$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var location = $("input:radio[name=drink]:checked").val();
    var home = $("input:radio[name=home]:checked").val();
    var fun = $("input:radio[name=home]:checked").val();
    var drink = $("input:radio[name=home]:checked").val();
    var word = $("input:radio[name=word]:checked").val();



  });
});
