
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

    //countries from Asia///

    let countriesFromAsia = data.filter((x) => x.region === "Asia");
    console.log(countriesFromAsia);

    //Population under 2 lacs //

    let populationUnder = data.filter(pop => pop.population < 2000000);
    console.log(populationUnder);

    //Name,Capital,Flag//

    let info = data.filter(details => {console.log(details.name,details.capital,details.flag)});
    console.log(info);

    //Total population//

    let totalPopulation = data.reduce((total,a) => total+a.population,0);
    console.log(totalPopulation);

    //country which use Currency as USD //

    let currencryDollars = data.filter(x => x.currencies[0].code === 'USD');
    console.log(currencryDollars);


  };
