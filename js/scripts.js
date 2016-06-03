$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var location = $("#tropical").val();
    var home = $("#condo").val();
    var fun = $("#beach").val();
    var drink = $("#maitai").val();
    var word = $("#laidback").val();

    var location = $("#mountains").val();
    var home = $("#cabin").val();
    var fun = $("#hike").val();
    var drink = $("#beer").val();
    var word = $("#adventurous").val();

    var location = $("#urban").val();
    var home = $("#penthouse").val();
    var fun = $("#museum").val();
    var drink = $("#martini").val();
    var word = $("#sophisticated").val();

    if ("tropical" && "condo" && "beach" && "maitai" && "laidback") {
      $('#final').show();
      $('#hawaii').show();
    }

    if ("mountains" && "cabin" && "hike" && "beer" && "adventurous") {
        $('#final').show();
        $('#yosemite').show();
    }

    if ("urban" && "penthouse" && "museum" && "martini" && "sophisticated") {
        $('#final').show();
        $('#newyork').show();
    }


  });
});
