var request = new XMLHttpRequest();
request.onload = sendBack;
request.open('GET', 'https://localhost:8081/');
request.send();

function sendBack() {
    location = 'http://localhost:80/index.html'
}