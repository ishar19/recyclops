import dateparser
import feedparser
from bs4 import BeautifulSoup
from contextlib import suppress
from datetime import datetime
import random
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

random_images = [
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%201.png?alt=media&token=87317646-dc63-440f-b115-2c2dda052834",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%202.png?alt=media&token=a1ee295f-a88e-4656-92ed-71428bcf3676",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%203.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%204.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%205.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%206.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%207.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%208.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%209.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb",
  "https://firebasestorage.googleapis.com/v0/b/recyclops-69781.appspot.com/o/article_images%2FMacBook%20Pro%2014_%20-%2010.png?alt=media&token=6326b1f9-9791-409a-a955-1947124dedeb"
]


cred = credentials.Certificate("articles_scraping/private_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
articles_ref = db.collection('articles')
sources_ref = db.collection("sources")
source_docs = sources_ref.get()

for source_doc in source_docs:
  feed_id : str = source_doc.id
  source_doc_dict : dict = source_doc.to_dict()
  feed_name : str = source_doc_dict['feedName']
  feed_url : str = source_doc_dict['feedUrl']
  news_feed = feedparser.parse(feed_url)
  if news_feed.get('status') != None and news_feed.status != 200: 
    print(f'{feed_name} Error - {news_feed.status}', flush=True)
    continue
  for entry in news_feed['entries']:
    published : datetime = dateparser.parse(entry['published'])
    title : str = BeautifulSoup(entry['title'], 'lxml').text
    description : str | None = entry['description']
    if description is not None:
      description : str = BeautifulSoup(entry['description'], 'lxml').text
      description = description.split(' ')
      description = ' '.join(description[:-1])
      description = description[:253] + ' ...'
    link : str = entry['link']
    tags : list[str] = [tag['term'] for tag in entry['tags']]
    image_url = None
    with suppress(AttributeError, IndexError, KeyError, TypeError):
      if feed_id == "recycle_dot_com":
        image_url = BeautifulSoup(entry['content'][0]['value'], 'lxml').find('img')['src']
      elif feed_id == "earth_911":
        image_url = entry['media_thumbnail'][0]['url']
      elif feed_id == "clean_river":
        image_url = BeautifulSoup(entry['content'][0]['value'], 'lxml').find('figure').find('img')['src']
    if image_url is None:
      image_url = random.choice(random_images)
    #dict of fields
    set_dict = {
      'sourceId' : feed_id,
      'title' : title,
      'description' : description,
      'tags' : tags,
      'published' : published,
      'articleUrl': link,
      'imageUrl': image_url,
    }

    # Query the collection for documents with the matching title
    matching_docs = articles_ref.where('articleUrl', '==', link).get()
    
    # If at least one document matches, update the first one
    if len(matching_docs) > 0:
      print(f'updating')
      update_doc = matching_docs[0].reference
      update_doc.update(set_dict)
    else:
      print(f'creating')
      # create a new document with a timestamp field
      create_doc = articles_ref.document()
      create_doc.set(set_dict)