// content.js

function extractProductName() {
  // Implement logic to extract the product name from the current e-commerce site.
   const productName = document.querySelector('#productTitle').textContent;
   return productName;
}

function sendProductInfoToBackground(productName) {
  chrome.runtime.sendMessage({ action: "searchProduct", product: productName });
}

// Extract product name and send it to background script
const productName = extractProductName();
if (productName) {
  sendProductInfoToBackground(productName);
}
