

export class SongsService {

    constructor(url) {
        this.url = url;
    }

    async list() {
        const response = await fetch(this.url);
        return response.json();
    }

    async save(song) {
        const response = await fetch(this.url, {
            method: 'post',
            body: JSON.stringify(song)
        });
        return response.json();
    }

}
