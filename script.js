function Display() {
  var e = Number(document.getElementById("eng").value);

  var m = Number(document.getElementById("math").value);

  var s = Number(document.getElementById("sci").value);

  var c = Number(document.getElementById("chem").value);

  var p = Number(document.getElementById("phy").value);

  var total = e + m + s + c + p;
  document.getElementById("Total").innerHTML = "The total Marks : " + total;

  var percent = total / 5;
  document.getElementById("Percentage").innerHTML =
    "The Percentage : " + percent + "%";

  if (percent > 35) {
    document.getElementById("res").innerHTML = "Pass";
  } else {
    document.getElementById("res").innerHTML = "Fail";
  }
}
