let newsContent = document.querySelector('.news-content');
    newsSelector = document.querySelector('.dropdown-section');
    changeSection = document.querySelector('ul');

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
    var optns = '<option style="text-transform: capitalize">' + sections[i] + '</option>'
    $('.dropdown-section').append(optns);
}

$('select').on('change', function() {
    // $(textSection).innerText("");
    var selection = $('select').val();
    $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=EXmhIZ7OAfwVNUeK9LJBZxGGg2UnGioA`,
    }).done(function(data) {
        let count = 0;
        $(changeSection).html("");
        for(let infoNews = 0; infoNews < data.results.length; infoNews++) {
            let mainMultimedia = data.results[infoNews].multimedia[4].url;
            let newsDescription = data.results[infoNews].title;
            let newsItems = '<li><a id="image-content" href="' + data.results[infoNews].url +'"target="_blank"><img src="' + mainMultimedia + '"></a><p id="text-content">' + newsDescription + "</p></li>";
            $(newsContent).append(newsItems);
            if (count === 12) {
                break;
           }
        };
    });
});