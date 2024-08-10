const apiKey = 'f07ad48582d6243151596d1fc0e8b1a1';
const baseUrl = 'https://api.themoviedb.org/3';

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        fetchMovies(query);
    }
});

function fetchMovies(query) {
    fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => console.error('Error fetching movie data:', error));
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('movie-results');
    resultsContainer.innerHTML = '';

    if (movies.length > 0) {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.release_date}</p>
                <button class="more-info" onclick="fetchMovieDetails(${movie.id})">More Info</button>
            `;
            resultsContainer.appendChild(movieItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}

function fetchMovieDetails(id) {
    fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayMovieDetails(data))
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p><strong>Released:</strong> ${movie.release_date}</p>
        <p><strong>Genre:</strong> ${movie.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Director:</strong> ${movie.director || 'N/A'}</p>
        <p><strong>Actors:</strong> ${movie.actors || 'N/A'}</p>
        <p><strong>Plot:</strong> ${movie.overview}</p>
    `;

    const modal = document.getElementById('movie-modal');
    modal.style.display = 'block';

    document.querySelector('.close').onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
