from torch import nn
from torch.utils.data import random_split
from torch.utils.data.dataloader import DataLoader
from torchinfo import summary
from torchvision import transforms
from torchvision.datasets import ImageFolder
import matplotlib.pyplot as plt
import os
import statistics
import torch
import torchvision.models as models

#Setting up Batch Size
BATCH_SIZE = 32

#Setting up seed for pytorch
SEED = 42

#CPU Count
cpu_count = os.cpu_count()

#Setting up device
device = "cuda" if torch.cuda.is_available() else "cpu"

#Setting up directory for images
garbage_data_directory  = 'machine-learning-files\garbage_seven_classification'

#Yes, Literal Garbage Model because now we are training resnet_18 model
'''
class LiteralGarbage(nn.Module):

  def __init__(self, input_units: int, hidden_units: int, output_units: int):
    super().__init__()
    self.cnn_classifier = None
    self.hidden_units = hidden_units
    self.output_units = output_units

    self.network = nn.Sequential(
      nn.Conv2d(in_channels=input_units, out_channels=hidden_units, kernel_size=3, stride=1, padding=1),
      nn.BatchNorm2d(num_features=hidden_units),
      nn.ReLU(),
      nn.MaxPool2d(kernel_size=(2,2)),

      nn.Conv2d(in_channels=hidden_units, out_channels=hidden_units*2, kernel_size=3, stride=1, padding=1),
      nn.ReLU(),
      nn.MaxPool2d(kernel_size=(2,2)),

      nn.Conv2d(in_channels=hidden_units*2, out_channels=hidden_units*4, kernel_size=3, stride=1, padding=1),
      nn.ReLU(),
      nn.MaxPool2d(kernel_size=(2,2)),
      
      nn.Conv2d(in_channels=hidden_units*4, out_channels=hidden_units*8, kernel_size=3, stride=1, padding=1),
      nn.ReLU(),
      nn.MaxPool2d(kernel_size=(2,2)),

    )

    self.classifier = nn.Sequential(
      nn.Flatten(),
      nn.Linear(
        in_features=32768, #calculated value
        out_features=self.hidden_units*4
      ),
      nn.ReLU(),
      nn.Dropout(),
      nn.Linear(
        in_features=self.hidden_units*4,
        out_features=self.output_units
      ),
    )
    
  def forward(self, X: torch.Tensor):
    network_output = self.network(X)
    final_classification = self.classifier(network_output)
    return final_classification
'''

def accuracy_func(y_true: torch.Tensor, y_pred: torch.Tensor) -> float:
  correct = torch.eq(y_true.to(device), y_pred.to(device)).sum().item()
  acc = (correct / len(y_pred)) * 100
  return acc

def get_normalize_transform(image_dataset: ImageFolder) -> transforms.Normalize:
  # Calculate mean and std
  mean = 0.
  std = 0.

  # Set the number of samples to calculate mean and std
  n_samples = len(image_dataset)

  for data, _ in image_dataset:
    # Add the data to the running sum
    mean += torch.mean(data)
    std += torch.std(data)

  # Divide the sum by the number of samples to get the mean and std
  mean /= n_samples
  std /= n_samples

  return transforms.Normalize(mean, std)

def calculate_mean_list(values_list: list[float]) -> float:
  return statistics.fmean(values_list)

if __name__ == '__main__':

  #Transformations
  to_tensor_transformation = transforms.ToTensor()
  
  #Image Transformations
  image_transformations = transforms.Compose([
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(20),
    transforms.RandomResizedCrop(size=256, scale=(0.8, 1.0)),
    transforms.ColorJitter(brightness=0.1, contrast=0.1, saturation=0.1, hue=0.1),
    transforms.RandomGrayscale(p=0.1),
    transforms.RandomAffine(degrees=10, translate=(0.1, 0.1), scale=(0.9, 1.1), shear=10),
    to_tensor_transformation,
    get_normalize_transform(
      ImageFolder(garbage_data_directory, transform=to_tensor_transformation)
    ),
  ])

  image_dataset = ImageFolder(
    garbage_data_directory, 
    transform=image_transformations
  )

  #Getting train and test data
  image_dataset_len = len(image_dataset)
  train_len = int(image_dataset_len*0.8)
  test_len = image_dataset_len - train_len
  train_data, test_data = random_split(
    image_dataset, 
    [train_len, test_len], 
    generator=torch.Generator().manual_seed(SEED)
  )

  #Setting up DataLoader
  train_dataloader = DataLoader(
    train_data,
    BATCH_SIZE,
    num_workers=cpu_count//2-1,
    shuffle=True
  )

  test_dataloader = DataLoader(
    test_data,
    BATCH_SIZE,
    num_workers=cpu_count//2-1,
    shuffle=True
  )

  torch.manual_seed(SEED)
  current_model = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)

  # Commented out because not using our own model.

  '''
  current_model = LiteralGarbage(
    input_units=3, hidden_units=16, output_units=7
  ).to(device)
  '''

  # Freeze all layers
  for param in current_model.parameters():
    param.requiresGrad = False
  
  # Replace the last fully connected layer with a new one
  num_ftrs = current_model.fc.in_features
  current_model.fc = torch.nn.Linear(num_ftrs, 7)
  
  #Loading the trained model
  current_model.load_state_dict(torch.load('resnet_18.pt'), strict=False)

  current_model.to(device)

  # Setup loss and optimizer
  loss_func = nn.CrossEntropyLoss()
  optimizer = torch.optim.SGD(
    current_model.fc.parameters(), 
    lr=0.001,
    momentum=0.9
  )

  train_accuracies = []
  train_losses= []
  test_accuracies = []
  test_losses = []
  epochs = []

  for epoch in range(15):  
    epochs.append(epoch)
    current_epoch_train_loss = []
    current_epoch_train_accuracy = []
    current_epoch_test_loss = []
    current_epoch_test_accuracy = []

    current_model.train()
    X: torch.Tensor
    Y: torch.Tensor
    for batch, (X, Y) in enumerate(train_dataloader):

      #Perform summary pass
      if epoch == 0 and batch == 0:
        print(summary(current_model, input_size=X.shape))

      optimizer.zero_grad()
      y_pred: torch.Tensor = current_model(X.to(device))
      accuracy = accuracy_func(y_true=Y, y_pred=y_pred.argmax(dim=1))
      loss = loss_func(y_pred, Y.to(device))
      if batch % 20 == 0:
        print(f'Train Batch {batch} Loss :- {loss}')
        print(f'Train Batch {batch} Accuracy :- {accuracy}')
      current_epoch_train_accuracy.append(accuracy)
      current_epoch_train_loss.append(loss)
      loss.backward()
      optimizer.step()  
      
    train_accuracies.append(calculate_mean_list(current_epoch_train_accuracy))
    train_losses.append(calculate_mean_list(current_epoch_train_loss))

    print(f'\n\nTrain Model Epoch {epoch} Accuracy : {train_accuracies[-1]}')
    print(f'Train Model Epoch {epoch} Loss : {train_losses[-1]}')

    current_model.eval()
    with torch.inference_mode(): 
      for batch, (X, Y) in enumerate(test_dataloader):
        y_pred: torch.Tensor = current_model(X.to(device))
        accuracy = accuracy_func(y_true=Y, y_pred=y_pred.argmax(dim=1))
        loss = loss_func(y_pred, Y.to(device))
        current_epoch_test_accuracy.append(accuracy)
        current_epoch_test_loss.append(loss)
      test_accuracies.append(calculate_mean_list(current_epoch_test_accuracy))
      test_losses.append(calculate_mean_list(current_epoch_test_loss))
    
    print(f'\n\nTest Model Epoch {epoch} Accuracy : {test_accuracies[-1]}')
    print(f'Test Model Epoch {epoch} Loss : {test_losses[-1]}\n\n')
    
    torch.save(current_model.state_dict(), 'resnet_18.pt')

  # Setup a plot 
  plt.figure(figsize=(15, 7))

  # Plot loss
  plt.subplot(1, 2, 1)
  plt.plot(epochs, train_losses, label='train_loss')
  plt.plot(epochs, test_losses, label='test_loss')
  plt.title('Losses')
  plt.xlabel('Epochs')
  plt.legend()

  # Plot accuracy
  plt.subplot(1, 2, 2)
  plt.plot(epochs, train_accuracies, label='train_accuracy')
  plt.plot(epochs, test_accuracies, label='test_accuracies')
  plt.title('Accuracies')
  plt.xlabel('Epochs')
  plt.legend()
  
  # Plot show
  plt.show()
