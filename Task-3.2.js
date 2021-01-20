//1. create a request variable
var request = new XMLHttpRequest();
// 2.create a new connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// 3. send request
request.send();
// 4. load response
request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data)

    //Flag Url of All countries//

    let info = data.filter(details => {console.log(details.flag)});
    console.log(info);


  };