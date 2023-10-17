//URL for localhost testing
// const baseURL = 'http://localhost:9000/movies/';

// prod URL for the deployed backend
const baseURL = 'https://moviematchtest-api.onrender.com/movies/';

export const getMovies = () => {
  return fetch(baseURL)
  .then(response => response.json());
}

export const postMovie= (movie) => {
  return fetch(baseURL, {
    method:'POST',
    body: JSON.stringify(movie),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json());
}

export const deleteMovie= (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
  
}

export const updateMovie = (movie) => {
    return fetch(baseURL + movie._id, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json());
}