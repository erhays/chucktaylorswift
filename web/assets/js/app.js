// var algoliasearch = require('algoliasearch');
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// import algoliasearch from 'algoliasearch';
//
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch('CQ07ZY5ECD', '150ab32b50146870b9fd9ddf14a612c5');
var index = client.initIndex('cts');

index.setSettings({
  searchableAttributes: [
    'artist',
    'venue',
    'tags',
    'images',
    'unordered(description)'
  ],
  customRanking: ['desc(popularity)'],
});

var search = instantsearch({
  // Replace with your own values
  appId: 'CQ07ZY5ECD',
  apiKey: '1e325b283c0e134184cd10feb6eced7c', // search only API key, no ADMIN key
  indexName: 'cts',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

// Add this after the previous JavaScript code
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

// Add this after the other search.addWidget() calls
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

// Add this after all the search.addWidget() calls
search.start();


// Add this after the previous JavaScript code
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

