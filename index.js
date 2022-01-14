var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#autocomplete');
let autocomplete;

function initAutocomplete(){
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      types: ['(cities)'],
      componentRestrictions: {'country': ['us']}
    });
}


var formSubmitHandler = function(event){
  event.preventDefault();
  var city = searchInput.value;
  console.log(city);
  citySplit = city.split(',');
  console.log(citySplit[0]);
  cityName = citySplit[0];
  

  var checkedE1 = $('input:checked');
  var selected = [];
  $.each(checkedE1, function(){
    selected.push($(this).val());
  });
  console.log('Budget is :', selected.join(','));
  var budget = selected.join(',');
  getYelpApi(cityName, budget);
}
searchForm.addEventListener('submit', formSubmitHandler);


//let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

function getYelpApi(cityName, budget){
var token = 'Bearer uqPekTdjMxPwfPByRjaRhuSxoWXztbJfGo6_yHs6utX8o3e5WZPCxQM1DxsjrO-XhEj2sNaG7HMrxnhGvRihWa5iQI7mXvRlOM-w_XRXd3UxOMswA9Bxp_jIFBB-YHYx'
    var yelp_search_url = 'https://api.yelp.com/v3/businesses/search'
    var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com'
      var requestObj = {
        'url': cors_anywhere_url + '/' + yelp_search_url,
        'data': {
                term: 'restaurants',
                location: cityName,
                price: budget
              },
        headers: {'Authorization': token},
        error: function(jqXHR, textStatus, errorThrown){
          console.log('AJAX error, jqXRH = ', jqXHR, ', textStatus =',
          textStatus, ', errorThrown = ', errorThrown)
        }
      }
      $.ajax(requestObj)
        .done(function(response){
          var array = response.businesses;
          var restaurantIndex = array[Math.floor(Math.random() * array.length)];
          console.log('response = ', array)
            console.log(restaurantIndex);
        })
}

function randomizer() {

}

// Adds an event listener to the randomizer button, function will run when the button is clicked
