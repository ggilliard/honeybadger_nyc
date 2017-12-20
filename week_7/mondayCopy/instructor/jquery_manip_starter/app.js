// jquery $ () //
$(function() {
	console.log('Loaded, bro');
});

// difference between text and html, the html
// will remove the html elements from the page

const $googleLink = $('.google');
$googleLink.text('Go to Google');

const $h1 = $('<h1>Example of adding an element</h1>')
$('body').append($h1);

// another way to append to another element 
$h1.appendTo('body');

// ('. --- get element)
// ('< > --- creates an element)

// template literals

const $essay = $(`
<div>
<h1>test</h1>
<p>test 2</p>
</div>
`);

$h1.remove();

// TAKE THE UL WITH THE CLASS OF SECOND AND APPEND IT TO THE LINK HOLDER DIV
const $second = $('.second');
$('link-holder').append($second);

// PREPEND THE LINK HOLDER DIV TO THE CONTAINER DIV

const $linkHolder = $('.link-holder');
$('.container').prepend($linkHolder);


// EMPTY THE SECTION WITH tHE CLASS OF ASIDES AND APPEND ALL 
// ASIDES THAT EXIST IN THE PAGE TO IT
//CSS SELECTORS -
const $sideSelection = $('.asides');
const $allAsides = $('aside');
$asideSelection.empty();


//grab .circle and change the color
const $circle = $('.circle');
$circle.css('background-color', 'blue');


// add a class via juery 
$circle.addClass('Yess');
$circle.removeClass('');

//tranversing down is easier with Jquery
$circle.parent
$circle.children 
//will give you all the children for that circle
//you can use .find 
console.log($circle.children().find('asides'));


