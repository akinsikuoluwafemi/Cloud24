import Search, { cities } from './models/Search';
import * as  searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import axios from 'axios'


// global state of the app
    // >search Object
    // >Recent location
    // >extended forcast
const state = {};

// a function that will be ran anytime we submit the form
const controlSearch = async() => {
    // get the query from the view
    const query = searchView.getInput()
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


        //  change textContent of the location text

        elements.searchLocation.textContent = query.split(' ',2).join(' ');
        console.log(state);

    }

} 

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})





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






















   





// what happens any time the page loads, i left it here because it works independently i.e it happens when the page loads



 

const countries = [

        'Afghanistan',
        'Albania',
        'Algeria',	
        'Andorra',	
        'Angola',
        'Argentina'	,
        'Armenia'	,
        'Australia'	,
        'Austria'	,
        'Azerbaijan',	
        'Bahamas'	,
        'Bahrain'	,
        'Bangladesh',	
        'Barbados',	
        'Belarus',	
        'Belgium',
        'Benin'	,
        'Bolivia'	,
        'Botswana',
        'Brazil'	,
        'Bulgaria'	,
        'Burkina Faso',	
        'Burundi'	,
        "Côte d'Ivoire",	
        'Cabo Verde',
        'Cambodia',	
        'Canada',	
        'Chad'	,
        'Chile'	,
        'China'	,
        'Colombia'	,
        'Comoros'	,
        'Costa Rica',	
        'Cuba'	,
        'Cyprus'	,
        'Czech Republic',
        'Denmark'	,
        'Djibouti'	,
        'Dominican Republic',	
        'Ecuador',	
        'Egypt'	,
        'El Salvador'	,
        'Equatorial Guinea',	
        'Eritrea',
        'Estonia',
        'Ethiopia',	
        'Fiji'	,
        'Finland',
        'France',	
        'Gabon'	,
        'Gambia',	
        'Georgia',	
        'Germany',
        'Ghana'	,
        'Greece'	,
        'Grenada'	,
        'Guatemala',	
        'Guinea',	
        'Haiti',
        'Honduras',	
        'Hungary',	
        'Iceland',	
        'India'	,
        'Indonesia',	
        'Iran'	,
        'Iraq'	,
        'Ireland',	
        'Israel',	
        'Italy'	,
        'Jamaica',
        'Japan'	,
        'Jordan'	,
        'Kazakhstan',	
        'Kenya'	,
        'Kuwait',
        'Laos'	,
        'Lebanon',	
        'Liberia',	
        'Luxembourg',	
        'Madagascar',	
        'Malawi'	,
        'Malaysia'	,
        'Mali'	,
        'Malta'	,
        'Mauritania',	
        'Mauritius'	,
        'Moldova'	,
        'Monaco'	,
        'Mongolia'	,
        'Montenegro',
        'Morocco',
        'Mozambique',	
        'Netherlands',	
        'New Zealand',	
        'Niger'	,
        'Nigeria'	,
        'North Korea'	,
        'North Macedonia',
        'Norway',	
        'Oman',	
        'Pakistan',	
        'Panama',	
        'Papua New Guinea',	
        'Paraguay',	
        'Peru',	
        'Philippines',
        'Poland',	
        'Portugal',	
        'Qatar',	
        'Romania',	
        'Russia',
        'Rwanda',	
        'Saint Kitts and Nevis',	
        'Saint Lucia',
        'San Marino',	
        'Saudi Arabia',	
        'Senegal',
        'Serbia',	
        'Seychelles',
        'Sierra Leone',	
        'Singapore',
        'Slovakia',	
        'Slovenia',	
        'Solomon Islands',
        'Somalia',
        'South Africa',	
        'South Korea',	
        'Spain',	
        'Sri Lanka',	
        'Sudan',	
        'Sweden',	
        'Switzerland',
        'Syria',	
        'Tanzania',	
        'Togo',	
        'Tunisia',	
        'Turkey',	
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',	
        'Uruguay',
        'Venezuela'
]

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



   