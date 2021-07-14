addEventListener("click", function (event) {
    let button = event.target;
    if (button.name === "submit") {
        let body = {
            "title": document.getElementById('textTitle').value,
            "content": document.getElementById('textContent').value
        }
        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/news');
        request.setRequestHeader('Content-Type', 'application/json');
        request.responseType = 'json'
        request.send(JSON.stringify(body));
    }
})
