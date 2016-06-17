$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    var location = $("input[name=location]:checked").val();
    var home = $("input[name=home]:checked").val();
    var fun = $("input[name=fun]:checked").val();
    var drink = $("input[name=drink]:checked").val();
    var word = $("input[name=word]:checked").val();

    var totalHawaii = 0;
    var totalYosemite = 0;
    var totalNewYork = 0;

    if (location=== "Hawaii") {
      totalHawaii += 1;
    } else if (fun === "Hawaii") {
      totalYosemite += 1;
    } else if (fun === "Hawaii") {
      totalNewYork += 1;
    }

    if (home === "Yosemite") {
      totalHawaii += 1;
    } else if (home === "Hawaii") {
      totalYosemite += 1;
    } else if (home === "NewYork") {
      totalNewYork += 1;
    }

    if (fun === "Yosemite") {
      totalHawaii += 1;
    } else if (fun === "Hawaii") {
      totalYosemite += 1;
    } else if (fun === "NewYork") {
      totalNewYork += 1;
    }

    if (drink === "NewYork") {
      totalHawaii += 1;
    } else if (drink === "Hawaii") {
      totalYosemite += 1;
    } else if (drink === "Yosemite") {
      totalNewYork += 1;
    }

    if (word === "NewYork") {
      totalHawaii += 1;
    } else if (word === "Hawaii") {
      totalYosemite += 1;
    } else if (word === "Yosemite") {
      totalNewYork += 1;
    }

    if (totalHawaii > totalNewYork && totalYosemite > totalNewYork) {
      $("#islandgetaway").show();
      $("#mountainretreat").hide();
      $("#cityvacation").hide();
    } else if (totalYosemite > totalHawaii && totalNewYork > totalHawaii) {
      $("#mountainretreat").show();
      $("#islandgetaway").hide();
      $("#cityvacation").hide();
    } else {
      $("#cityvacation").show();
      $("#islandgetaway").hide();
      $("#mountainretreat").hide();
    }

  });
  });
