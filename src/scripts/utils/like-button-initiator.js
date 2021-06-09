import FavoriteMovieIdb from "../data/favouritemovie-idb";
import {
    createLikedButtonTemplate
} from "../views/templates/template-creator";

const LikeButtonInitiator = {
    // init fav button
    async init({
        likeButtonContainer,
        movie
    }) {
        this._lineButtonContainer = likeButtonContainer;
        this._movie = movie;

        await this._renderButton();
    },

    // cek apakah ada data movie dengan id
    async _renderButton() {
        const {
            id
        } = this._movie;

        if (await this._isMovieExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }

    },

    async _isMovieExist(id) {
        const movie = await FavoriteMovieIdb.getMovie(id);
        return !!movie;
    },

    // tampilkan button fav sebelum dklik-> even nya tampah / update dari halaman favorit
    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async ()=> {
            await FavoriteMovieIdb.putMovie(this._movie);
            this._renderButton();
        })

    },

    // tampilkan button fav setelah dklik -> even nya hapus dari halaman favorit
    _renderLiked() {
        this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likedButton = document.querySelector('#likeButton');
        likedButton.addEventListener('click', async ()=> {
            await FavoriteMovieIdb.deleteMovie(this._movie);
            this._renderButton();
        })
    },


};

export default LikeButtonInitiator;