import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/moviedb-source';
import {
    createMovieDetailTemplate,
    createLikeButtonTemplate
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
        <div id="movie" class="movie"></div>
        <div id="likeButtonContainer"></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await TheMovieDbSource.detailMovie(url.id);
        const movieContainer = document.querySelector('#movie');
        movieContainer.innerHTML = createMovieDetailTemplate(movie);

        const likeButtonContainer =  document.querySelector('#likeButtonContainer');
        likeButtonContainer.innerHTML =  createLikeButtonTemplate();

        // panggil fav button initiator
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            movie: {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                vote_average: movie.vote_average,
            },
        });
    },
};

export default Detail;