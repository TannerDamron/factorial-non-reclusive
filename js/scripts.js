$(document).ready(function(){
  $("form#factorial").submit(function(event){
    event.preventDefault();
    var userNumber=parseInt($("#userNumber").val());
    var runningTotal = 1;
    for(index=userNumber; index>1; index -=2){
      var product=index*(index-1);
      var runningTotal = runningTotal * product;
    }
    alert(runningTotal);
  });
});
