function getImageTemplate(data = {}) {
  if(!data.img) {
    return ''
  }  
  return `
    <img src="${data.img}" alt="${data.title}">
  `
}

function template(data = {}) {
      return `
        <div class="movie">
          ${ getImage() }
          <h4>${data.title}</h4>
          <p>${data.description}</p>
        </div>
      `;
    }
    
function render($parent, listdata) {
    $parent.append(template(listdata));
}
    
function search(title) {
    const query = $.ajax({
    apiKey: '9fc71b6c',
    apiURL: 'http://www.omdbapi.com/',
    t: title,
    });
    const url = apiURL + apiKey + query;
    console.log(url);
}
    
    function handleSearch() {
      const title = $('[name=q]').val() 
    
      search(title)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // debugger
        })
        .catch(function(error){
          console.error(error);
        })
    }
    
$(function () {
      $('.searchbtn').on('click', handleSearch);
      $('[name=q]').on('keyup', handleSearch)
    });