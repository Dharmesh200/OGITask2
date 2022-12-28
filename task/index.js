const getPostBtn = document.querySelector('.posts_btn');
const getAlbumBtn = document.querySelector('.album-btn');

const getPost = async () => {
    try {
        const fetchApi = await fetch(' https://jsonplaceholder.typicode.com/posts')
        const convertData = await fetchApi.json();
        console.log(convertData);
        let printData = "";
        convertData.map((data) => {
            printData += `<div class="card">
                    <p class="userId">Id :- ${data.id}</p>
                    <p class="title">Title :- ${data.title}</p>
                    <p class="title">Body :- ${data.body}</p>
                </div>`;
        });
        document.querySelector('.cards').innerHTML = printData;
    }
    catch {
        throw new Error;
    }
};

const getAlbum = async () => {
    try {
        const fetchApi = await fetch(' https://jsonplaceholder.typicode.com/albums');
        const convertData = await fetchApi.json();
        console.log(convertData);
        let printData = "";
        convertData.map((data) => {
            printData += `<div class="card">
                    <p class="userId">Id :- ${data.id}</p>
                    <p class="title">Title :- ${data.title}</p>
                </div>`;
        });
        document.querySelector('.cards').innerHTML = printData;
    }
    catch {
        throw new Error;
    }
};

const getPostEvent = getPostBtn.addEventListener('click', () => {
    getPost();
});

const getAlbumEvent = getAlbumBtn.addEventListener('click', () => {
    getAlbum();
});

