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
    header: document.querySelector('.header'),
    showSearch: document.querySelector('.div-show'),
    list: document.querySelector('.list-span'),
    delete: document.querySelector('.delete'),
    recent: document.querySelector('.time-wrapper'),
    recentLocation: document.querySelector('.recent-location'),
    heading: document.querySelector('.heading'),
    t: document.querySelector('.t')
    

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


export const countries = [

    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Belarus',
    'Belgium',
    'Benin',
    'Bolivia',
    'Botswana',
    'Brazil',
    'Bulgaria',
    'Burkina Faso',
    "Côte d'Ivoire",
    'Cabo Verde',
    'Cambodia',
    'Canada',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Costa Rica',
    'Cuba',
    'Cyprus',
    'liverpool',
    'Manchester',
    'Bolton',
    'Avana',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominican Republic',
    'Ecuador',
    'Ibadan',
    'Monaco',
    'Abuja',
    'Calabar',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'New York',
    'New Mexico',
    'New Orleans',
    'Louisiana',
    'New Jersey',
    'New Haven',
    'New Hampshire',
    'Porto',
    'Phoenix',
    'San Jose',
    'Texas',
    'Florida',
    'Chicago',
    'Illinois',
    'Rochester',
    'Virginia',
    'Estonia',
    'Ethiopia',
    'San Francisco',
    'Indianapolis',
    'Hong Kong',
    'Fiji',
    'Utah',
    'Michigan',
    'Oklahoma',
    'Lowa',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Laos',
    'Lebanon',
    'Liberia',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Netherlands',
    'New Zealand',
    'Niger',
    'Nigeria',
    'North Korea',
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
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
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
    'Venezuela',
    'Lagos',
    'Sagamu',
    'Ikeja',
    ' Beijing',
    'Shanghai',
    'Karachi',
    'Istanbul',
    'Dhaka',
    'Tokyo',
    'Moscow',
    'Manila',
    'Tianjin',
    'Mumbai',
    'Delhi',
    'Buenos Aires',
    'Guangzhou',
    'Kinshasa',	
   	'Manila',	
    'Tianjin',
    'Boston',
    'Madrid',
    'Toronto',
    'Singapore',
    'Sydney',
    'Johannesburg',
    'St Petersburg',
    'Barcelona ',
    'Napoli',
    'Nairobi',
    'Cape Town',
    'Montreal'
]

