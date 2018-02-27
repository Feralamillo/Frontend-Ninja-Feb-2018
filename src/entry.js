import css from './scss/style.scss';
import { SongsListController } from './js/SongsListController';

document.addEventListener("DOMContentLoaded", () => {

    let songsListController = new SongsListController(".songs-list");
    songsListController.loadSongs();

});
