const apiKey = '9fc71b6c'
const apiURL = 'https://www.omdbapi.com'


function search(title) {
    const query = qs({
    apiKey: '9fc71b6c',
    t: title,
    });
    const url = apiURL + '?' + query;
    console.log(url);
}
    
    function handleSearch() {
      const title = $('[name=q]').val()
    
      search(title)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          debugger
        })
        .catch(function(error){
          console.error(error);
        })
    }

