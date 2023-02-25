// Video 34-3 International travel, display country name, capital

const loadCountries  = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById("all-countries");
    // console.log(countries);
    // const countriesContainer = document.getElementById('all-countries');
    // for(const country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        console.log(country.cca2)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3 class="text-center text-primary">Name: ${country.name.common}</h3>
            <p class="text-center text-success">Capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
            <button onclick="displayCountryDetails('${country.cca2}')" class="btn btn-primary">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const displayCountryDetails = code =>{
    // https://restcountries.com/v2/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    //  console.log(url)
     fetch(url)
     .then(res => res.json())
     .then(data => showCountryDetail(data[0]));
}

const showCountryDetail = country =>{
    console.log(country)
    const detailsContainer = document.getElementById('country-details')
    detailsContainer.innerHTML = `
    <h3>Name: ${country.name.common} <h3>
    <img src="${country.flags.png}">
    `;
}

loadCountries();

