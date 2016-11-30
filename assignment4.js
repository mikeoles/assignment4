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

//return json from the api request
var api = [];

//get the possible searches from the api
$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'http://www.mattbowytz.com/simple_api.json?data=all',
    dataType: "json",
    success: function(result){
      api = result.data.programming;
    }
  })
})

//on each key entered update the search results
$('.flexsearch-input').keyup(function(event){
  $(".predictions").html("");
  var currentInput = $(".flexsearch-input").val();
  displayPredictions(currentInput)
})

//find the predictions that match the current input
function displayPredictions(textEntered){
  if(textEntered.length == 0){
    $(".predictions").html("");
  }else{
    api.forEach(function(searchTerm){
      searchTermUpper = searchTerm.toUpperCase();
      if(searchTermUpper.length >  0 && searchTermUpper.startsWith(textEntered.toUpperCase())){
        $(".predictions").append("<li>"+searchTerm+"</li>");
      }
    });
  }
}
