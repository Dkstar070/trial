// Sample array of movie names
 // Sample array of movie names
 document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const movieListContainer = document.getElementById("searchresult");

    // Sample array of movie names and corresponding images
    const moviesData = [
        { name: "Fighter IMDb 9.6 ", image: "fighter-h.jpg" },
        { name: "Money Heist- 9.5 ", image: "money heist1.jpg" },
        { name: "KGF chapter 2  IMDB- 9.8", image: "KGF2 h.jpg" },
        { name: "secrete invasion IMDB- 5.5 ", image: "secrate invasin h.jpg" },
        { name: "Spiderman no way home  IMDB- 9.1", image: "spiderman1.jpg" },
        { name: "wakanda forever IMDB- 8.5 ", image: "wakanda h.jpg" },
        { name: "College Romance  IMDB- 6.1", image: "College-Romance-Season-3 h.webp" },
        { name: "Dr strange multiverse of madness IMDB- 8.5 ", image: "dr stange h.jpg" },
        { name: "farzi IMDB- 9.1", image: "Farzi h.jpg" },
        { name: "Animal IMDB- 9.5 ", image: "animal h.jpg" },
        { name: "Jurassic world  IMDB- 8.1", image: "jurassic world1.jpg" },
        { name: "777 charlie IMDB- 9.9 ", image: "777-Charlie h.jpg" },
        { name: "Avengers Endgame  IMDB- 9.1", image: "end game h.jpg" },
        { name: "Dunki IMDB- 5.5 ", image: "dunki h.jpg" },
        // Add other movies with their names and images
    ];

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = moviesData.filter(movie => movie.name.toLowerCase().includes(searchTerm));

        // Clear the current list
        movieListContainer.innerHTML = "";

        // Populate the list with filtered movies and images
        filteredMovies.forEach(movie => {
            const listItem = document.createElement("div");
            listItem.classList.add("search-result-item");

            // Create an image element
            const movieImage = document.createElement("img");
            movieImage.src = movie.image;
            movieImage.alt = `${movie.name} Poster`;

            // Create a span element for the movie name
            const movieName = document.createElement("span");
            movieName.textContent = movie.name;

            // Add click event to navigate to the selected movie
            listItem.addEventListener("click", () => {
                // You can replace 'movie.html' with the actual link or route to the movie page
                window.location.href = `download.html?name=${encodeURIComponent(movie.name)}`;
            });

            // Append image and name to the list item
            listItem.appendChild(movieImage);
            listItem.appendChild(movieName);

            // Append the list item to the container
            movieListContainer.appendChild(listItem);
        });
    });

    document.body.addEventListener("click", () => {
        movieListContainer.innerHTML = "";
        // Hide the movie list
    });
});

