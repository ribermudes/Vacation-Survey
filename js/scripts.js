$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var location = $("input[name=location]:checked").val();
    var home = $("input[name=home]:checked").val();
    var fun = $("input[name=fun]:checked").val();
    var drink = $("input[name=drink]:checked").val();
    var word = $("input[name=word]:checked").val();

    var totalH = 0;
    var totalY = 0;
    var totalN = 0;

    if (location=== "H") {
      totalH += 1;
    } else if (fun === "H") {
      totalY += 1;
    } else if (fun === "H") {
      totalN += 1;
    }

    if (home === "Y") {
      totalH += 1;
    } else if (time === "H") {
      totalY += 1;
    } else if (time === "N") {
      totalN += 1;
    }

    if (fun === "Y") {
      totalH += 1;
    } else if (fun === "H") {
      totalY += 1;
    } else if (fun === "N") {
      totalN += 1;
    }

    if (drink === "N") {
      totalH += 1;
    } else if (drink === "H") {
      totalY += 1;
    } else if (drink === "Y") {
      totalN += 1;
    }

    if (word === "N") {
      totalH += 1;
    } else if (word === "H") {
      totalY += 1;
    } else if (word === "Y") {
      totalN += 1;
    }



    if (totalH > totalN && totalY > totalC) {
      $("#hawaii").show();
      $("#yosemite").hide();
      $("#newyork").hide();
    } else if (totalY > totalH && totalN > totalH) {
      $("#yosemite").show();
      $("#hawaii").hide();
      $("#newyork").hide();
    } else {
      $("#newyork").show();
      $("#hawaii").hide();
      $("#yosemite").hide();
    }



  });
  });
