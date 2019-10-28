import { elements } from './base';
export const getInput = () => elements.searchInput.value;

export const clearInput = () =>{
    elements.searchInput.value = '';
}

export const clearInputPrevResForHours = () => {
    elements.searchCurCondition.textContent = '';
}

export const clearInputPrevResForDays = () => {
    elements.extendedForc.textContent = '';
}

export const renderWeatherHours = weather =>{
    const markup = `
        <div class="current-condition-text">
                        <h2 class="cur">Current Conditions</h2>
                        <h2 class="temp">${parseInt(weather[0].temperature)}&deg;</h2>
                        <p class="temp-ranges"><span>${parseInt(weather[0].comfort)}&deg;</span> / <span>&nbsp;${parseInt(weather[11].temperature)}&deg;</span></p>
                        <p class="feels-text">Visibility: <span>${parseInt(weather[0].visibility)}m</span></p>
                        <p class="humidity">Humidity: <span>${parseInt(weather[0].humidity)}%</span></p>
                        <p class="feels-text">Wind: <span>${weather[0].windDescShort} ${parseInt(weather[0].windSpeed)} mph</span></p>
                        <p class="dewpoint">Dewpoint: <span>${parseInt(weather[0].dewPoint)}&deg;</span></p>
                        <p class="dewpoint">Localtime: <span>${weather[0].localTime.substr(0, 4).split('', 2).join('') + '-' + weather[0].localTime.substr(2, 4).split('', 2).join('') + '-' + weather[0].localTime.substr(4, 6).split('', 2).join('') + '-' + weather[0].localTime.substr(6, 10)}</span></p>
                        <p class="dewpoint">localTimeFormat: <span>${weather[0].localTimeFormat}</span></p>


                        <div class="update"> 
                            <i class="far fa-clock fa-2x"></i>
                            <p>Updated <span>${new Date().getHours() - (1) + ":" +new Date().getMinutes()} ${new Date().getHours() % 12 > 12 ? 'AM': 'PM'}</span></p>
                        </div>
                        <div class="day-wrapper">
                            <div class="all-time">
                                <p class="time-words"><span>${weather[11].daylight === 'D' ? weather[11].daylight = 'Morning' : 'Tonight'}</span></p>
                                <p class="time-num"><span>${parseInt(weather[11].temperature)}&deg;</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="image-wrapper">
                        <div class="description">
                            <img class="description-img" src="${weather[0].iconLink}" alt="${weather[0].iconName} image">
                            <p class="image-text">${weather[0].description.split(' ', 2).join(' ')}</p>
                        </div>


                        <div class="day-image down">
                            <img class="day-image-des" src="${weather[12].iconLink}" alt="${weather[12].iconName}">
                            <p class="image-des">${weather[12].iconName.split('_').join(' ').split('.').join(',')}</p>
                        </div>
    
    `;
    elements.searchCurCondition.insertAdjacentHTML('beforeend',markup);
}




 const renderWeatherForDays = weatherDay => {
     const markup = `
          <h3 class="heading">Extended Forecast</h3>

                    <div class="time-wrapper wrap">
                        <div class="time-container">
                            <p class="time-words"><span>${weatherDay.weekday} ${weatherDay.daySegment}</span></p>
                            <p class="time-num">${parseInt(weatherDay.temperature)}&deg;</p>
                        </div>
                        <div class="day-image">
                            <img class="day-image-des" src="${weatherDay.iconLink}" alt="${weatherDay.iconName}">
                            <p class="image-des">${weatherDay.description.split(' ', 2).join(' ').split('.').join('.')}</p>
                        </div>

                    </div>
      
    `;
     elements.extendedForc.insertAdjacentHTML('beforeend', markup);
}
 




export const renderWeathersDays = (weathers) => {
    // render results of current page
   
    weathers.slice(0,5).forEach(renderWeatherForDays);

};


export const renderWeatherAlerts = (query) => {
    
}








