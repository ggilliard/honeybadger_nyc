//f(irst step need onload function
// $(function)
//first task grab movie by title
//ajax to grab results then doe
$(function (){
 const result = $.ajax({
     url: "http://www.omdbapi.com/",
     data: {
        s: 'Batman',
        apikey: '9fc71b6c',
     }
 })
    result.then(function(data){
        console.log(data);
    })
});

//result - getting back the data 
//wrap the data into a function for reusability
// this above becomes the below:

$(function (){
    function getMovieData(title){
    const result = $.ajax({
        url: "http://www.omdbapi.com/",
        data: {
           s: 'Batman',
           apikey: '9fc71b6c',
        }
    })
       return result;
}

//data.Search is the array from the console

getMovieData('Batman')
    .then(function(data){

    }

.then(function (movieToRender){
    const {poster,title, imdbID} = moviesToRenter;
    const template = `
        <div>
        <h1>${title}</h1>
        <img src="${poster}" alt"
    
    `
})

//Normalize the data after rendering
// data atrribtutes hides data from the user
//once infor is populated on the screen
//wire up the button 
// const imbID = $(this).data --- reason "this" is not 
// jquery object so to convert it back to javascript
// you have to use $(this) not just this.data