let newsContent = document.querySelector('.news-content');
let newsSelector = document.querySelector('.dropdown-section');
let newsImage = document.querySelector('.news-image');
let newsHeader = document.querySelector('.news-header');
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
    $('select').append(optns);
}

$('select').on('change', function() {
    var selection = $('select').val();
    $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=EXmhIZ7OAfwVNUeK9LJBZxGGg2UnGioA`,
    }).done(function(data) {
        const { url } = data.results[0].multimedia[0];
        newsImage.textContent = url;
        // newsHeader.setAttribute = url;
        const { title } = data.results[0];
        newsHeader.textContent = title;
    })
})