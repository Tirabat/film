const movieTitles = [
    'Космическая станция',
    'Тайна старого дома',
    'Поезд на север',
];
const moviePosters = [
    'covers/space.jpg',
    'covers/house.jpg',
    'covers/train.jpg',
];
const movieList = document.getElementById('movieList');

function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const item = document.createElement('li');

        const poster = document.createElement('img');
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;

        item.append(poster, title);
        movieList.append(item);
    });
}