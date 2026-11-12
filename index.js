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
const poster = document.getElementById('poster')
const mname = document.getElementById('name')
const button = document.getElementById('movie')

function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const delet = document.createElement('button')
        delet.textContent = 'Удалить'
        delet.addEventListener('click', () => {
            movieTitles.splice(index, 1)
            moviePosters.splice(index, 1)

            renderMovies()
        })

        const item = document.createElement('li');

        const poster = document.createElement('img');
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;

        item.append(poster, title, delet);
        movieList.append(item);

        
    });
}

button.addEventListener ('click', () => {
    movieTitles.push(mname.value)
    moviePosters.push(poster.value)

    renderMovies()
})
renderMovies()