export default class Store{
    static getWeather () {
        let stWeather;
        if(localStorage.getItem('stWeather') === null ){
            stWeather = [];
        }else {
            stWeather = JSON.parse(localStorage.getItem('stWeather'));
        }
        return stWeather;
    }

    static addWeather(weather) {
        const stWeather = Store.getWeather();

        stWeather.push(weather);

        localStorage.setItem('stWeather', JSON.stringify(stWeather));

    }

   
}