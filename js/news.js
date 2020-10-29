let div = document.getElementsByClassName('blockNews')[0]

function createElem(array){
    for (let i = 0; i < array.length ; i++) {
        let div2 = div.cloneNode(true);
        div2.querySelector("h1").textContent = array[i].title;
        div2.getElementsByClassName('newsText')[0].innerHTML = array[i].content;
        div.before(div2)
    }
}
let readButton = div.querySelector('.readButton');

document.addEventListener("click", function (event){
    let button = event.target;
    if (button.className === 'readButton'){
        let news = button.previousElementSibling
        console.log(button.dataset)
        if (button.dataset.closed === 'true') {
            news.style.maxHeight = '500px';
            button.textContent = 'Скрыть текст';
            button.dataset.closed = 'false';
        }else if (button.dataset.closed === 'false') {
            news.style.maxHeight = '200px';
            news.style.transition = 'max-height 1s ease-out';
            button.textContent = 'Читать далее...';
            button.dataset.closed = 'true';
        }
    }
})

let serv = new XMLHttpRequest();
serv.open('GET','http://192.168.0.100:8080/api/news');
serv.responseType = 'json'
serv.send();

serv.onload = function  () {
    let responseObj = serv.response;
    console.log(responseObj)
    console.log(typeof responseObj)
    console.log(responseObj.articles[0].title)
    createElem(responseObj.articles)

}







