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
$(document).ready(function(){

// call functions here

});
