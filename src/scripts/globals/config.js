const datet = new Date().toISOString();
const CONFIG = {
    KEY: '5fcca45c2d1e73cb3376b4628123ad62',
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en-us',
    // CACHE_NAME: 'moviemy',
    CACHE_NAME: datet,
    DATABASE_NAME: 'movie-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'movies',
};

export default CONFIG;