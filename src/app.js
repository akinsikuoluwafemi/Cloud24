import Search, { cities } from './models/Search';
import * as  searchView from './views/searchView';
import { elements, renderLoader, clearLoader,countries } from './views/base';
import axios from 'axios'


// global state of the app
    // >search Object
    // >Recent location
    // >extended forcast
const state = {};

// a function that will be ran anytime we submit the form
const controlSearch = async() => {
    // get the query from the view
    const query = searchView.getInput();
    console.log(query);

    if(query) {
        // New Search object and add it to state
        state.search = new Search(query);

        


        //  Clear Previous inputs and previous result
        searchView.clearInput();
        searchView.clearInputPrevResForDays();
        searchView.clearInputPrevResForHours();

        // render the loading spinner
        renderLoader(elements.search);

        // wait for the two results to arrive
        await state.search.getWeatherHours('forecast_hourly', 'DemoAppId01082013GAL', 'AJKnXv84fjrb0KIHawS0Tg')
        await state.search.getWeatherDays('forecast_7days', 'DemoAppId01082013GAL', 'AJKnXv84fjrb0KIHawS0Tg')
        await state.search.getAlerts('alerts', 'DemoAppId01082013GAL', 'AJKnXv84fjrb0KIHawS0Tg')

        // clear the loader after the results have arrived
        clearLoader();        
        // insert the two search results in the state
        searchView.renderWeatherHours(state.search.resultHours);
        searchView.renderWeathersDays(state.search.resultDays);
        searchView.renderWeatherAlerts(state.search.resultDays);
        elements.searchInput.value



        //  change textContent of the location text

        elements.searchLocation.textContent = query.split(' ',2).join(' ');
        console.log(state);

    }

} 

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
    elements.showSearch.style.display = 'none';
})



let findMatches = (wordToMatch,cities) =>{
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.match(regex)
    })
   
}


function displayMatches() {
    const matchArray = findMatches(this.value, countries)
    const html = matchArray.map(place => {
        return`
                <li class="list-span"><span>${place}</span></li>
            
        `
    }).join('');
        elements.showSearch.innerHTML = html;

}
// come back here
if(elements.list === null){
    
}else {
        elements.list.addEventListener('click',(e) => {
        console.log(e.target);
    })
}


elements.searchInput.addEventListener('change', () => {
    displayMatches()
    elements.showSearch.style.zIndex = '-1';
    elements.showSearch.style.opacity = '0';
});
elements.searchInput.addEventListener('keyup', displayMatches);


elements.searchInput.addEventListener('input', () => {
    elements.showSearch.style.zIndex = '2';
    elements.showSearch.style.opacity = '1';


});












// whenever you scroll the window 20px downward the navigation will be fixed
//   This example demonstrates how to slide down a navbar when the user starts to scroll the page
function checkScroll () {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        elements.header.style.top = '0'

  }else {
        elements.header.style.top = '-50px'
       
  }
}


window.onscroll = checkScroll; 



// what happens any time the page loads



 


const random = Math.floor(Math.random() * countries.length);   

console.log(countries[random])     



 async function hoursAlertOnDomLoad(query) {
            
        
        const request = await axios(`https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_hourly&name=${query}&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`)

        let { data } = request;
        let { hourlyForecasts } = data;
        let { forecastLocation } = hourlyForecasts;
        let { forecast } = forecastLocation;
     console.log(forecast);  
     console.log(countries[random])  
     
     searchView.renderHoursOnDomLoad(forecast);
     elements.searchLocation.textContent = query.split(' ', 2).join(' ');
     

 }
document.addEventListener('DOMContentLoaded', hoursAlertOnDomLoad(countries[random]));





async function dayAlertOnDomLoad(query) {
            
        
        const request = await axios(`https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days&name=${query}&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`)

        let { data } = request;
        let { forecasts } = data;
        let { forecastLocation } = forecasts;
        let { forecast } = forecastLocation;
        console.log(forecast);
    console.log(countries[random]) 
    searchView.renderDaysOnDomLoad(forecast)
        
    }
    
    

document.addEventListener('DOMContentLoaded', dayAlertOnDomLoad(countries[random]));  

elements.searchInput.value

console.log(countries)

// let newCountry = countries.filter(coun => {
//     return coun.includes('Tur')
// });
// console.log(newCountry)

