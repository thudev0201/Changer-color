browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    document.body.style.fontSize = request.fontSize;
  });