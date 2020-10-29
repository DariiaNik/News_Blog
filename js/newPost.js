
addEventListener("click", function (event){
    let button = event.target;
    if (button.name === "submit"){
        let body = {
            "title":document.getElementById('textTitle').value,
            "content": document.getElementById('textContent').value
        }
        let serv = new XMLHttpRequest();
        serv.open('POST','http://192.168.0.100:8080/api/news');
        serv.setRequestHeader('Content-Type', 'application/json');
        serv.responseType = 'json'
        serv.send(JSON.stringify(body));
    }
})