var height = '40px';
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('content/clock/clock.html');
iframe.style.height = height;
iframe.style.width = '100%';
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.zIndex = '938089'; // Some high value
// Etc. Add your own styles if you want to
document.documentElement.appendChild(iframe);

// continuing add-toolbar.js
var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';