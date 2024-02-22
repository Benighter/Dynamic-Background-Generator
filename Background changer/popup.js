document.addEventListener('DOMContentLoaded', function () {
    var colorPicker = document.getElementById('colorPicker');
    var backgroundType = document.getElementById('backgroundType');
    var imageUploadDiv = document.getElementById('imageUploadDiv');
    var imageUpload = document.getElementById('imageUpload');
    var applyButton = document.getElementById('applyButton');
  
    backgroundType.addEventListener('change', function () {
      if (backgroundType.value === 'image') {
        imageUploadDiv.style.display = 'block';
      } else {
        imageUploadDiv.style.display = 'none';
      }
    });
  
    applyButton.addEventListener('click', function () {
      var color = colorPicker.value;
      var type = backgroundType.value;
      var imageData = null;
  
      if (type === 'image') {
        // Handle image upload
        imageData = imageUpload.files[0];
      }
  
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'changeBackground', color: color, type: type, imageData: imageData });
      });
    });
  });
  