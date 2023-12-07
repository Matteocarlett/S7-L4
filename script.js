const apiKey = 'IF1xlEKxWMkVSu3h79LzZ1If6uWOqM6QZbgCOieiD1fQtTO5B9Iie5dQ';
async function fetchFromApi(apiUrl) {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`Errore nella richiesta: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        /*const photos = data.photo
        const container = document.getElementById('containerPappagalli')
        photos.forEach(photo => {

            const card = createCard(photo)

            container.innerHTML += card
        })   */


    } catch (error) {
        console.error('Errore durante la richiesta:', error);
    }
}

const apiUrlDog = 'https://api.pexels.com/v1/search?query=Dog';
const apiUrlParrot = 'https://api.pexels.com/v1/search?query=Parrot';

function createCard(photo) {
    return `
    <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}

Promise.all([fetchFromApi(apiUrlDog), fetchFromApi(apiUrlParrot)]);