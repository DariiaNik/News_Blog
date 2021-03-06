let origin = document.getElementsByClassName('news-block')[0]

function createArticles(array) {
    for (let value of array) {
        let cloned = origin.cloneNode(true);
        cloned.querySelector("h1").textContent = value.title;
        cloned.querySelector('.news-text').innerHTML = value.content;
        origin.before(cloned)
    }
}

let newsSection = document.querySelector('.news-section');

newsSection.addEventListener("click", function (event) {
    let button = event.target;
    let news = button.previousElementSibling
    if (button.dataset.closed === 'true') {
        news.style.maxHeight = '500px';
        button.textContent = 'Скрыть текст';
        button.dataset.closed = 'false';
    } else if (button.dataset.closed === 'false') {
        news.style.maxHeight = '200px';
        news.style.transition = 'max-height 1s ease-out';
        button.textContent = 'Читать далее...';
        button.dataset.closed = 'true';
    }
})

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/news');
request.responseType = 'json'
request.send();

request.onload = function () {
    let response = request.response;
    createArticles(response.articles)
}
