function decrease() {
  var first = document.getElementById("txtCounter").value;
  if (isNaN(first)) {
    alert("Please enter a valid number");
  } else {
    first--;
    document.getElementById("txtCounter").value = first;
  }
}

function reset() {
  document.getElementById("txtCounter").value = "0";
}

function increase() {
  var second = document.getElementById("txtCounter").value;
  if (isNaN(second)) {
    alert("Please enter a valid number");
  } else {
    second++;
    document.getElementById("txtCounter").value = second;
  }
}
