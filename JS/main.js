let newsContent = document.querySelector('.news-content');
let newsSelector = document.querySelector('.dropdown-section');
let changeSection = document.querySelector('ul');
let logo = document.querySelector('.nyt-logo');
let intro = document.querySelector('#intro');

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

for (let  i = 0; i < sections.length; i++) {
    let label = sections[i];
    let optns = `<option value=${label}>` + label.substr(0, 1).toUpperCase() + label.substr(1) + `</option>`
    $(newsSelector).append(optns);
}

$('select').on('change', function() {
    $('.preload').show();

    $(intro).removeClass('default-size').addClass('new-size');
    $(logo).removeClass('logo-size').addClass('new-logo');
    
    let selection = $('select').val();
    $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=EXmhIZ7OAfwVNUeK9LJBZxGGg2UnGioA`,
        dataType: "json",
        async: true,
    }).done(function(data) {
        let count = 0;
        $(changeSection).html("");
        for (let infoNews = 0; infoNews < data.results.length; infoNews++) {
            if (data.results[infoNews].multimedia.length >= 5 && count < 12) {
                count += 1;
                let mainMultimedia = data.results[infoNews].multimedia[4].url;
                let newsDescription = data.results[0].abstract;
                let newsItems = 
                '<li><a href="' + data.results[infoNews].url +'"target="_blank"><article style="background-image: url(' + mainMultimedia + ')"><p class="text-content">' + newsDescription + "</p></article></a></li>";
            $(newsContent).append(newsItems);
            $('.preload').hide();
    }
    }})
})