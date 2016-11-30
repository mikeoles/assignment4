// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

//Eeturn json from the api request
var api = [];

//Get the possible searches from the api
$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'http://www.mattbowytz.com/simple_api.json?data=all',
    dataType: "json",
    success: function(result){
      var interests = result.data.interests;
      var programming = result.data.programming;
      api = $.merge(programming,interests);
    }
  })
})

//On each key entered update the search results
$('.flexsearch-input').keyup(function(event){
  $(".predictions").html("");
  var currentInput = $(".flexsearch-input").val();
  displayPredictions(currentInput)
})

//Find the predictions that match the current input
function displayPredictions(textEntered){
  if(textEntered.length == 0){
    $(".predictions").html("");
  }else{
    api.forEach(function(searchTerm){
      searchTermUpper = searchTerm.toUpperCase();
      if(searchTermUpper.length >  0 && searchTermUpper.startsWith(textEntered.toUpperCase())){
        $(".predictions").append("<li> <a href=http://www.google.com/search?q=" + searchTerm + ">" + searchTerm + "</a> </li>");
      }
    });
  }
}
