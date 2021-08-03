import '..css/styles.css';
import countryCardTlt from '../templates/countries.hbs';
const refs = {
    form:document.querySelector("#form")
  input: document.querySelector('.js-search'),
};
refs.form.addEventListener('submit', onSearch);
function onSearch(e) {
  e.PreventDefault();
  const form = e.currentTarget;
  const searchQuery = refs.input.value;
  fetchCountry(searchQuery)
    .then(renderCountryCard)
    .catch(error => console.log(error));
}
function fetchCountry(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
        return response.json();
    });
}
function renderCountryCard(country) {
    const markup = countryCardTlt(country);
    refs.cardContainer.innerHTML = markup;
}