

export class SongsService {

    async list() {
        const response = await fetch('http://localhost:3001/songs/');
        return response.json();
    }

}
