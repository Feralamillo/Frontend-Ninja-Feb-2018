import css from './scss/style.scss';
import { SongsListController } from './js/SongsListController';
import { AppController } from './js/AppController';
import { HeaderController } from './js/HeaderController';

document.addEventListener("DOMContentLoaded", () => {

    let appController = new AppController("body");
    let headerController = new HeaderController(".web-header", appController);

    let songsListController = new SongsListController(".songs-list");
    songsListController.loadSongs();

});
