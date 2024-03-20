// Get the search parameters from the URL
const url_paramenters = new URLSearchParams(window.location.search);

// Get the value of a parameter
const primary_key = url_paramenters.get('pk');

console.log('Primary Key(pk) # is ', primary_key); // Output: "value1"
console.log('mycards is ', mycards)
