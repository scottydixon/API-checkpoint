// Function to fetch and display a Chuck Norris joke and robot image
function fetchAndDisplayData() {
    // Fetch Chuck Norris joke
    let chuckNorrisPromise = fetch("https://api.chucknorris.io/jokes/random");

    chuckNorrisPromise
        .then(function (response) {
            console.log("Request for Chuck Norris joke is fulfilled, we have a response");
            return response.json();
        })
        .then(function (data) {
            console.log("Here's a random Chuck Norris joke:", data.value);

            // Display the Chuck Norris joke in an HTML element with the id "value"
            document.getElementById("value").innerHTML = data.value;
        })
        .catch(function (error) {
            // Handle errors without displaying them
        });

    // Fetch a random robot image with a random query parameter
    let randomQuery = Math.random(); // Generates a random number
    let robohashUrl = `https://robohash.org/${randomQuery}`;
    fetch(robohashUrl)
        .then(function (response) {
            console.log("Request for Robohash image is fulfilled, we have a response");

            // Check if the response status is okay (status code 200)
            if (response.ok) {
                // If the response is okay, use the response URL for the image source
                document.getElementById("robo-image").src = response.url;
            } else {
                // Handle errors without displaying them
            }
        })
        .catch(function (error) {
            // Handle errors without displaying them
        });
}

// Initial fetch and display of data
fetchAndDisplayData();

// Add an event listener to the refresh button
document.getElementById("refresh-button").addEventListener("click", fetchAndDisplayData);



