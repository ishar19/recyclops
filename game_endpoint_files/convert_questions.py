import firebase_admin
import os
import random

from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage

all_classes = [
  "battery",
  "biological",
  "cardboard",
  "glass",
  "metal",
  "paper",
  "plastic"
]

if __name__ == '__main__':
  cred = credentials.Certificate("game-files\private_key_one.json")
  firebase_admin.initialize_app(cred, {
    'storageBucket' : 'test-1d905.appspot.com'
  })

  # Get a reference to the Cloud Storage bucket
  bucket = storage.bucket()
  db = firestore.client()
  questions_ref = db.collection('questions')

  # Loop through each subfolder in the bucket
  inside_index = 0
  for index in range(len(all_classes)):
    for image in bucket.list_blobs(prefix=f'game_Images/{all_classes[index]}'):
      inside_index += 1
      if inside_index % 100 == 0:
        break
      if '.png' not in image.name:
        continue
      _, file_extension = os.path.splitext(image.name)
      destination_blob_name = image.name
      blob = bucket.blob(destination_blob_name)
      leftover_ids = list(range(0,7))
      leftover_ids.remove(index)

      #getting all fields now
      correct_bin_id = index
      wrong_bin_ids = random.sample(leftover_ids, k=3)
      blob.make_public()
      image_url = blob.public_url

      set_dict = {
        "internalIndex" : inside_index,
        "imageUrl" : image_url,
        "correctBinId" : correct_bin_id,
        "wrongBinIds" : wrong_bin_ids
      }

      create_doc = questions_ref.document()
      create_doc.set(set_dict)
      



          

