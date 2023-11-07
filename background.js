// background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "searchProduct") {
    const productName = request.product;

    // List of predefined e-commerce sites for comparison
    const ecommerceSites = [
      { name: "Amazon", url: "https://www.amazon.com/s?k=" },
      { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=" },
      // Add more e-commerce sites as needed
    ];

    // Function to open comparison tabs for each e-commerce site
    ecommerceSites.forEach(site => {
      const searchUrl = site.url + encodeURIComponent(productName);
      chrome.tabs.create({ url: searchUrl });
    });
  }
});
