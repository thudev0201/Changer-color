document.addEventListener('DOMContentLoaded', function() {
    var fontSizeInput = document.getElementById('fontSizeInput');
    var applyButton = document.getElementById('applyButton');
  
    applyButton.addEventListener('click', function() {
      var fontSize = fontSizeInput.value + 'px';
      browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {fontSize: fontSize});
      });
    });
  });