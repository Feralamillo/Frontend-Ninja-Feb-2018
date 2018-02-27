

export class SongsService {

    list() {
        return new Promise((resolve, reject) => {
            let providerPromise = fetch('http://localhost:3001/songs/');

            // configuro qué quiero que ocurra cuando obtenga la respuesta correctamente
            providerPromise.then(response => {
                if (response.ok) {
                    let jsonPromise = response.json();
                    jsonPromise.then(songs => {
                        resolve(songs);  // resuelvo mi promesa con las canciones
                    });
                    jsonPromise.catch(error => {
                        reject(error);
                    });
                } else {
                    reject("Error");
                }
            });

            // configuro qué quiero que ocurra cuando se produzca una error
            providerPromise.catch(error => {
                reject(error);
            });

        });
    }

}
