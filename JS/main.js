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
    $('.preload').show();
    var selection = $('select').val();
    $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=EXmhIZ7OAfwVNUeK9LJBZxGGg2UnGioA`,
        dataType: "json",
        async: true,
    }).done(function(data) {
        let count = 0;
        $(changeSection).html("");
        // switch (count <= 12) {
            /* case 1: */for(var infoNews = 0; infoNews < data.results.length; infoNews++) {
                var mainMultimedia = data.results[infoNews].multimedia[4].url;
                var newsDescription = data.results[infoNews].title;
                var newsItems = '<li><a class="image-content" href="' + data.results[infoNews].url +'"target="_blank"><img src="' + mainMultimedia + 
                '"></a><p id="text-content">' + newsDescription + "</p></li>";
            $(newsContent).append(newsItems);
            $('.preload').hide();
        };
        // break;
    // };
    });
});