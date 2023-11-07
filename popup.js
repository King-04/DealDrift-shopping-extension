// popup.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "displayResults") {
    const results = request.results;
    displayResults(results);
  }
});
//
//function displayResults(results) {
//  const resultsDiv = document.getElementById('results');
//  resultsDiv.innerHTML = '';
//
//  if (results.length === 0) {
//    resultsDiv.textContent = 'No results found.';
//  } else {
//    results.forEach(function(result) {
//      const link = document.createElement('a');
//      link.href = result.url;
//      link.textContent = `${result.site}: $${result.price.toFixed(2)}`;
//      link.target = '_blank';
//      resultsDiv.appendChild(link);
//      resultsDiv.appendChild(document.createElement('br'));
//    });
//  }
//}
//
//// The extension popup's UI initialization code goes here

// Assume 'results' is an array of search results with objects containing 'site', 'price', and 'url' properties

// Sample results data
const results = [
  { site: 'Amazon', price: 49.99, url: 'https://www.amazon.com/product1' },
  { site: 'eBay', price: 45.99, url: 'https://www.ebay.com/product1' },
  // More result objects as needed
];

// Function to update the content of the 'results' element in popup.html
function displayResults(results) {
  const resultsContainer = document.getElementById('results');

  // Clear previous results
  resultsContainer.innerHTML = '';

  // Iterate through the results and create HTML elements to display them
  results.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `
      <p><strong>Site:</strong> ${result.site}</p>
      <p><strong>Price:</strong> $${result.price.toFixed(2)}</p>
      <p><strong>Link:</strong> <a href="${result.url}" target="_blank">${result.url}</a></p>
      <hr>
    `;

    // Append the resultElement to the resultsContainer
    resultsContainer.appendChild(resultElement);
  });
}

// Call the displayResults function with the 'results' array
displayResults(results);
