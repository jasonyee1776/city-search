const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
/* 
use new API request called FETCH
    - SM to $.get
    - SM to axios
    - SM to XMLHttps request 
*/

/*
FETCH will return a PROMISE
    - does NOT return the data
    - PROMISE will return some data at some point
    - must use .THEN against FETCH
        > returns 'blob' of data

*/

// must conver this data into JSON (or whatever the 'blob' actually us)
fetch(endpoint)
.then(blob => blob.json()) // calling the JSON() method on 'blob' will result in 'data'
// need to push 'data' into array

.then(data => cities.push(...data)); // use ES6 SPREAD on push() method to push data into array 

// create function to use user's search value and run it against the array of data

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state match what was searched
        // HOW TO PUT VARIABLE IN A REGULAR EXPRESSION
            // create RegExs
        const regex = new RegExp(wordToMatch, 'gi'); // g = global , i = 'insensative' (matches uppercase/lowercase -)
        return place.city.match(regex) || place.state.match(regex)
    });
}

// create the disply function for user values

function displayMatches() {
    console.log(this.value)
}

