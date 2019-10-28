// bASE IS WHERE YOU PUT THE STYLES THAT ARE RESUSABLE AND ARE USED ACROSS IN ALL THE MODULES

export const elements = {
    searchForm: document.querySelector('.search-form'),
    searchInput: document.querySelector('.search-form-input'),
    searchLocation: document.querySelector('.location-text'),
    searchCurCondition: document.querySelector('.current-condition'),
    currentWrapper: document.querySelector('.current-wrapper'),
    extendedForc: document.querySelector('.extended-forecast'),
    spinner: document.querySelector('.spinner'),
    search: document.querySelector('.search'),
    searchResPages: document.querySelector('.outer-wrapper'),
    goButton: document.querySelector('.btn-container'),
    header: document.querySelector('.header')

}

export const elementStrings = {
    loader: 'spinner'
};



export const renderLoader = parent => {
    const spinner = `
            <i class="fas fa-circle-notch fa-4x ${elementStrings.loader}"></i>

    `
    parent.insertAdjacentHTML('afterbegin', spinner);
}



export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);

    if (loader) loader.parentElement.removeChild(loader);
}

