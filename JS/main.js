const authKey = 'EXmhIZ7OAfwVNUeK9LJBZxGGg2UnGioA';
// let sectionSelector = document.querySelector('.dropdown-list');
// let newsBaseURL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${authKey}`;
const sections = [
    'Sections ...',
    'arts',
    'automobiles', 
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'national',
    'nyregion',
    'obituaries',
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview',
    'technology',
    'theater',
    'tmagazine',
    'travel',
    'upshot',
    'world',
]

for (i = 0; i < sections.length; i++) {
    var optns = '<option style="text-transform: capitalize">' + sections[i] + '</option>'
    $('select').append(optns);
}

// $("button").on("click", function runSections(sections, newsURL) {
//     $.ajax({method: "GET", url: newsURL, dataType: JSON})
//         .done(function(newsData) {
//         const { title } = data.results[0];
//         const { url } = data.results.multimedia[0];
//         console.log(data);
//     })
// })




























/*

let temperatureDescription = document.querySelector('.temperature-description');
let temperatureCondition = document.querySelector('.temperature-condition');
let iconWeather = document.querySelector('.icons');

$("button").on("click", function() {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9"
    }).done(function(data) {
        const { description, main, icon } = data.weather[0];
        temperatureDescription.textContent = description,
        temperatureCondition.textContent = main,
        iconWeather.setAttribute("src", "http://openweathermap.org/img/w/10n.png");
    });
}); */