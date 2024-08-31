function myFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Input is not valid";
  } else {
    text = "Input is ok";
  }
  document.getElementById("um").innerHTML = text;
}
