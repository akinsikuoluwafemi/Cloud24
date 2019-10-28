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
    list: document.querySelector('.list-span')

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
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
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
    'Boston'
]





	
           	// Rio De Janeiro	
            //     	Guangzhou			Moscow	
            //             23	Lahore	
            //                 24	Shenzhen	
            //                     25	Bangalore	
            //                         26	Paris	10, 958, 187	10, 900, 952	0.53 %
            //                             27	Bogota	10, 779, 376	10, 574, 409	1.94 %
            //                                 28	Chennai	10, 711, 243	10, 455, 606	2.44 %
            //                                     29	Jakarta	10, 638, 689	10, 516, 927	1.16 %
            //                                         30	Lima	10, 554, 712	10, 390, 607	1.58 %
            //                                             31	Bangkok	10, 350, 204	10, 156, 316	1.91 %
            //                                                 32	Seoul	9, 962, 393	9, 963, 497 - 0.01 %
            //                                                     33	Hyderabad	9, 741, 397	9, 481, 623	2.74 %
            //                                                         34	Nagoya	9, 532, 059	9, 507, 076	0.26 %
            //                                                             35	London	9, 176, 530	9, 046, 485	1.44 %
            //                                                                 36	Tehran	9, 013, 663	8, 895, 947	1.32 %
            //                                                                     37	Chengdu	8, 971, 839	8, 813, 478	1.80 %
            //                                                                         38	New York	8, 601, 186	8, 580, 015	0.25 %
            //                                                                             39	Wuhan	8, 266, 273	8, 175, 602	1.11 %
            //                                                                                 40	Luanda	8, 044, 735	7, 774, 200	3.48 %
            //                                                                                     41	Ahmedabad	7, 868, 633	7, 680, 935	2.44 %
            //                                                                                         42	Kuala Lumpur	7, 780, 301	7, 563, 912	2.86 %
            //                                                                                             43	Xian	7, 722, 254	7, 444, 233	3.73 %
            //                                                                                                 44	Hong Kong	7, 490, 776	7, 428, 887	0.83 %
            //                                                                                                     45	Hangzhou	7, 437, 993	7, 235, 803	2.79 %
            //                                                                                                         46	Dongguan	7, 378, 500	7, 360, 496	0.24 %
            //                                                                                                             47	Foshan	7, 257, 143	7, 195, 585	0.86 %
            //                                                                                                                 48	Riyadh	7, 070, 665	6, 906, 595	2.38 %
            //                                                                                                                     49	Shenyang	7, 069, 012	6, 921, 314	2.13 %
            //                                                                                                                         50	Baghdad	6, 974, 439	6, 811, 955	2.39 %
            //                                                                                                                             51	Surat	6, 873, 756	6, 563, 585	4.73 %
            //                                                                                                                                 52	Santiago	6, 723, 516	6, 680, 371	0.65 %
            //                                                                                                                                     53	Suzhou Jiangsu	6, 703, 499	6, 338, 509	5.76 %
            //                                                                                                                                         54	Madrid	6, 559, 041	6, 497, 124	0.95 %
            //                                                                                                                                             55	Pune	6, 451, 618	6, 275, 748	2.80 %
            //                                                                                                                                                 56	Dar Es Salaam	6, 368, 272	6, 047, 600	5.30 %
            //                                                                                                                                                     57	Harbin	6, 249, 824	6, 115, 297	2.20 %
            //                                                                                                                                                         58	Toronto	6, 139, 404	6, 082, 425	0.94 %
            //                                                                                                                                                             59	Belo Horizonte	6, 028, 319	5, 972, 135	0.94 %
            //                                                                                                                                                                 60	Singapore	5, 868, 104	5, 791, 901	1.32 %
            //                                                                                                                                                                     61	Khartoum	5, 677, 921	5, 534, 079	2.60 %
            //                                                                                                                                                                         62	Johannesburg	5, 635, 127	5, 485, 986	2.72 %
            //                                                                                                                                                                             63	Barcelona	5, 541, 127	5, 494, 125	0.86 %
            //                                                                                                                                                                                 64	Fukuoka	5, 540, 084	5, 550, 683 - 0.19 %
            //                                                                                                                                                                                     65	Qingdao	5, 499, 117	5, 380, 760	2.20 %
            //                                                                                                                                                                                         66	Dalian	5, 458, 521	5, 300, 374	2.98 %
            //                                                                                                                                                                                             67	St Petersburg	5, 426, 959	5, 383, 068	0.82 %
            //                                                                                                                                                                                                 68	Yangon	5, 243, 989	5, 157, 461	1.68 %
            //                                                                                                                                                                                                     69	Jinan	5, 205, 402	5, 051, 675	3.04 %
            //                                                                                                                                                                                                         70	Alexandria	5, 182, 450	5, 086, 240	1.89 %
            //                                                                                                                                                                                                             71	Zhengzhou	5, 131, 377	4, 940, 455	3.86 %
            //                                                                                                                                                                                                                 72	Guadalajara	5, 100, 527	5, 022, 674	1.55 %
            //                                                                                                                                                                                                                     73	Abidjan	5, 058, 550	4, 920, 776	2.80 %
            //                                                                                                                                                                                                                         74	Ankara	5, 017, 996	4, 919, 074	2.01 %
            //                                                                                                                                                                                                                             75	Chittagong	4, 914, 633	4, 815, 545	2.06 %
            //                                                                                                                                                                                                                                 76	Melbourne	4, 870, 388	4, 770, 894	2.09 %
            //                                                                                                                                                                                                                                     77	Sydney	4, 859, 432	4, 792, 281	1.40 %
            //                                                                                                                                                                                                                                         78	Monterrey	4, 792, 864	4, 712, 297	1.71 %
            //                                                                                                                                                                                                                                             79	Brasilia	4, 558, 991	4, 469, 585	2.00 %
            //                                                                                                                                                                                                                                                 80	Nairobi	4, 556, 381	4, 385, 853	3.89 %
            //                                                                                                                                                                                                                                                     81	Cape Town	4, 524, 111	4, 430, 367	2.12 %
            //                                                                                                                                                                                                                                                         82	Jiddah	4, 522, 216	4, 432, 771	2.02 %
            //                                                                                                                                                                                                                                                             83	Changsha	4, 460, 622	4, 344, 862	2.66 %
            //                                                                                                                                                                                                                                                                 84	Xinbei	4, 361, 480	4, 324, 516	0.85 %
            //                                                                                                                                                                                                                                                                     85	Kunming	4, 335, 924	4, 230, 182	2.50 %
            //                                                                                                                                                                                                                                                                         86	Changchun	4, 332, 263	4, 240, 806	2.16 %
            //                                                                                                                                                                                                                                                                             87	Shantou	4, 249, 233	4, 173, 765	1.81 %
            //                                                                                                                                                                                                                                                                                 88	Rome	4, 234, 019	4, 209, 710	0.58 %
            //                                                                                                                                                                                                                                                                                     89	Montreal	4, 195, 523	4, 171, 716	0.57 %
            //                                                                                                                                                                                                                                                                                         90	Urumqi	4, 189, 926	4, 011, 236	4.45 %
            //                                                                                                                                                                                                                                                                                             91	Porto Alegre	4, 115, 354	4, 094, 398	0.51 %
            //                                                                                                                                                                                                                                                                                                 92	Hefei	4, 110, 366	3, 979, 854	3.28 %
            //                                                                                                                                                                                                                                                                                                     93	Tel Aviv	4, 096, 962	4, 010, 977	2.14 %
            //                                                                                                                                                                                                                                                                                                         94	Recife	4, 077, 746	4, 027, 623	1.24 %
            //                                                                                                                                                                                                                                                                                                             95	Los Angeles	4, 057, 841	4, 030, 668	0.67 %
            //                                                                                                                                                                                                                                                                                                                 96	Shijiazhuang	4, 031, 021	3, 949, 702	2.06 %
            //                                                                                                                                                                                                                                                                                                                     97	Fortaleza	4, 025, 753	3, 977, 336	1.22 %
            //                                                                                                                                                                                                                                                                                                                         98	Medellin	3, 966, 906	3, 933, 652	0.85 %
            //                                                                                                                                                                                                                                                                                                                             99	Ningbo	3, 965, 588	3, 815, 252	3.94 %
            //                                                                                                                                                                                                                                                                                                                                 100	Kano	3, 905, 598	3, 820, 082	2.24 %
            //                                                                                                                                                                                                                                                                                                                                     101	Yaounde	3, 822, 425	3, 655, 656	4.56 %
            //                                                                                                                                                                                                                                                                                                                                         102	Ekurhuleni	3, 817, 938	3, 741, 476	2.04 %
            //                                                                                                                                                                                                                                                                                                                                             103	Jaipur	3, 812, 262	3, 716, 538	2.58 %
            //                                                                                                                                                                                                                                                                                                                                                 104	Taiyuan Shanxi	3, 807, 407	3, 725, 418	2.20 %
            //                                                                                                                                                                                                                                                                                                                                                     105	San Salvador	3, 796, 634	3, 753, 686	1.14 %
            //                                                                                                                                                                                                                                                                                                                                                         106	Nanning	3, 743, 602	3, 628, 247	3.18 %
            //                                                                                                                                                                                                                                                                                                                                                             107	Casablanca	3, 716, 093	3, 683, 566	0.88 %
            //                                                                                                                                                                                                                                                                                                                                                                 108	Xiamen	3, 651, 537	3, 585, 108	1.85 %
            //                                                                                                                                                                                                                                                                                                                                                                     109	Fuzhou Fujian	3, 608, 056	3, 532, 120	2.15 %
            //                                                                                                                                                                                                                                                                                                                                                                         110	Lucknow	3, 589, 795	3, 504, 506	2.43 %
            //                                                                                                                                                                                                                                                                                                                                                                             111	Berlin	3, 556, 792	3, 552, 123	0.13 %
            //                                                                                                                                                                                                                                                                                                                                                                                 112	Douala	3, 536, 119	3, 412, 103	3.63 %
            //                                                                                                                                                                                                                                                                                                                                                                                     113	Wenzhou	3, 521, 172	3, 419, 467	2.97 %
            //                                                                                                                                                                                                                                                                                                                                                                                         114	Changzhou	3, 498, 645	3, 372, 270	3.75 %
            //                                                                                                                                                                                                                                                                                                                                                                                             115	Nanchang	3, 485, 364	3, 372, 810	3.34 %
            //                                                                                                                                                                                                                                                                                                                                                                                                 116	Busan	3, 465, 633	3, 466, 898 - 0.04 %
            //                                                                                                                                                                                                                                                                                                                                                                                                     117	Ibadan	3, 463, 855	3, 382, 598	2.40 %
            //                                                                                                                                                                                                                                                                                                                                                                                                         118	Faisalabad	3, 385, 342	3, 310, 750	2.25 %
            //                                                                                                                                                                                                                                                                                                                                                                                                             119	Kozhikode	3, 364, 657	3, 174, 933	5.98 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                 120	Tangshan Hebei	3, 285, 328	3, 145, 210	4.45 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                     121	Asuncion	3, 279, 160	3, 222, 199	1.77 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                         122	Bekasi	3, 276, 733	3, 159, 491	3.71 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                             123	Campinas	3, 255, 911	3, 210, 085	1.43 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                 124	Santo Domingo	3, 245, 021	3, 172, 152	2.30 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                     125	Guiyang	3, 226, 249	3, 136, 174	2.87 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                         126	Antananarivo	3, 210, 386	3, 058, 387	4.97 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                             127	Kumasi	3, 205, 586	3, 064, 718	4.60 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                 128	Wuxi Jiangsu	3, 198, 981	3, 143, 996	1.75 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                     129	Malappuram	3, 169, 457	2, 950, 374	7.43 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                         130	Athens	3, 154, 152	3, 155, 600 - 0.05 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                             131	Mashhad	3, 152, 482	3, 097, 062	1.79 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                 132	Puebla	3, 145, 456	3, 096, 703	1.57 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                     133	Kampala	3, 137, 690	2, 986, 352	5.07 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                         134	Milan	3, 136, 077	3, 132, 060	0.13 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                             135	Kanpur	3, 100, 285	3, 080, 571	0.64 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 136	Abuja	3, 095, 118	2, 918, 518	6.05 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     137	Dakar	3, 057, 065	2, 978, 419	2.64 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         138	Kuwait City	3, 052, 493	2, 989, 270	2.11 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             139	Lanzhou	3, 007, 613	2, 935, 812	2.45 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 140	Kochi	2, 969, 638	2, 857, 515	3.92 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     141	Guayaquil	2, 946, 158	2, 898, 796	1.63 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         142	Lisbon	2, 942, 097	2, 927, 316	0.50 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             143	Surabaya	2, 921, 630	2, 902, 504	0.66 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 144	Thrissur	2, 920, 761	2, 773, 826	5.30 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     145	Shizuoka	2, 911, 784	2, 899, 394	0.43 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         146	Guatemala City	2, 891, 230	2, 851, 104	1.41 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             147	Zhongshan	2, 890, 965	2, 871, 533	0.68 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 148	Sanaa	2, 874, 373	2, 779, 317	3.42 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     149	Port Harcourt	2, 873, 322	2, 731, 446	5.19 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         150	Dubai	2, 833, 079	2, 785, 376	1.71 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             151	Incheon	2, 782, 612	2, 763, 344	0.70 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 152	Cali	2, 754, 078	2, 725, 931	1.03 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     153	Algiers	2, 729, 325	2, 693, 542	1.33 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         154	Coimbatore	2, 713, 233	2, 640, 688	2.75 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             155	Taiyuan	2, 713, 112	2, 705, 791	0.27 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 156	Manchester	2, 710, 074	2, 690, 445	0.73 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     157	Port Au Prince	2, 704, 187	2, 636, 763	2.56 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         158	Chicago	2, 679, 044	2, 687, 682 - 0.32 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             159	Sapporo	2, 667, 852	2, 664, 966	0.11 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 160	Ouagadougou	2, 652, 720	2, 531, 381	4.79 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     161	Lusaka	2, 646, 619	2, 523, 844	4.86 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         162	Goiania	2, 628, 413	2, 564, 870	2.48 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             163	Depok	2, 615, 154	2, 503, 253	4.47 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 164	Zibo	2, 596, 275	2, 554, 625	1.63 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     165	Weifang	2, 560, 068	2, 466, 359	3.80 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         166	Bandung	2, 557, 561	2, 537, 934	0.77 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             167	Vancouver	2, 555, 884	2, 530, 746	0.99 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 168	Huaian	2, 537, 652	2, 420, 185	4.85 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     169	Bamako	2, 529, 328	2, 446, 749	3.38 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         170	Tashkent	2, 490, 334	2, 463, 969	1.07 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             171	Thiruvananthapuram	2, 476, 928	2, 369, 321	4.54 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 172	Accra	2, 475, 208	2, 439, 389	1.47 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     173	Pretoria	2, 472, 612	2, 378, 350	3.96 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         174	San Juan	2, 451, 375	2, 454, 337 - 0.12 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             175	Shaoxing	2, 444, 934	2, 350, 011	4.04 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 176	Yantai	2, 442, 581	2, 358, 730	3.55 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     177	Huizhou	2, 441, 944	2, 359, 640	3.49 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         178	Mbuji Mayi	2, 412, 532	2, 304, 603	4.68 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             179	Toluca De Lerdo	2, 410, 875	2, 354, 160	2.41 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 180	Beirut	2, 406, 875	2, 385, 271	0.91 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     181	Lubumbashi	2, 377, 495	2, 281, 421	4.21 %
            //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         182	Brisbane