import css from './scss/style.scss';
import { SongsService } from './js/SongsService';

document.addEventListener("DOMContentLoaded", () => {

    let songsService = new SongsService();

    document.querySelector(".songs-list").innerHTML = '<div class="loading">Cargando...</div>';

    songsService.list().then(songs => {
        let html = "";
        if (songs.length == 0) {
            html = '<div class="info">No hay ninguna canción</div>';
        } else {
            for (let song of songs) {
                html += `<article class="song">
                    <div class="cover">
                        <img src="${song.cover}" alt="${song.artist} - ${song.title}">
                    </div>
                    <div class="info">
                        <div class="title">${song.title}</div>
                        <div class="artist">${song.artist}</div>
                    </div>
                </article>`;
            }
        }
        document.querySelector(".songs-list").innerHTML = html;
    }).catch((error) => {
        console.error("ERROR RETRIEVING SONGS", error);
        document.querySelector(".songs-list").innerHTML = '<div class="error">Se ha producido un error</div>';
    });

});
