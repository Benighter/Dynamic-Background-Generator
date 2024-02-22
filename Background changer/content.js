chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeBackground') {
      if (request.type === 'color') {
        document.body.style.backgroundColor = request.color;
      } else if (request.type === 'gradient') {
        document.body.style.background = `linear-gradient(to right, ${request.color}, #ffffff)`;
      } else if (request.type === 'image' && request.imageData) {
        // Handle image background
        var imageURL = URL.createObjectURL(request.imageData);
        document.body.style.background = `url('${imageURL}')`;
      }
    }
  });
  