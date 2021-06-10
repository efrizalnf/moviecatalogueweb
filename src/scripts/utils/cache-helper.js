// import {
//     cache
// } from "webpack";

import CONFIG from "../globals/config";



const CacheHelper = {
    async cachingAppShell(requests) {
        // buat cache open cache
        const cache = await this._openCache();
        cache.addAll(requests);
    },

    async deleteOldCache() {
        // hapus cache lama
        const cacheNames = await cache.keys();
        cacheNames
            .filter((name) => name !== CONFIG.CACHE_NAME)
            .map((filteredName) => caches.delete(filteredName));
    },

    // Fecth request ke dalam cache
    async _fetchRequest(request) {
        const response = await fetch(request);

        if (!response || response.status !== 200) {
            return response;
        }

        await this._addCache(request);
        return response;
    },


    async _addCache(request) {
        const cache = await this._openCache();
        cache.add(request);
    },

    // revalidasi cache

    async revalidateCache(request) {
        const response = await caches.match(request);

        if (response) {
            this._fetchRequest(request);
            return response;
        }
        return this._fetchRequest(request);
    },

    async _openCache() {
        return caches.open(CONFIG.CACHE_NAME);
    },
};

export default CacheHelper;