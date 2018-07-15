function getIt() {
  $('p').on("click", function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').addClass('tasty')
  $('.tasty').on('load', function() {
  $('.tasty')== $('red')  
  })
}
function submitIt() {
 $('form').on("submit", function() {
   alert('Your form is going to be submitted now.')
 })
}
$(document).ready(function(){

// call functions here

});
