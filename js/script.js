// function greet() {
//    alert("Hello! Welcome to the simple JavaScript example.");
//}

// Call the greet function
//greet();

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("suhu-celcius").value = "";
  document.getElementById("suhu-fahrenheit").value = "";
});

document.getElementById("konversi").addEventListener("click", function () {
  var celciusValue = document.getElementById("suhu-celcius").value;
  var fahrenheitValue = document.getElementById("suhu-fahrenheit").value;

  if (celciusValue !== "") {
    fahrenheitValue = parseFloat(celciusValue)*9/5 + 32;
    document.getElementById("suhu-fahrenheit").value = fahrenheitValue;
  } else if (fahrenheitValue !== "") {
    celciusValue = (parseFloat(fahrenheitValue) - 32)*5/9;
    document.getElementById("suhu-celcius").value = celciusValue;
  }
});

/// Set initial state
document.getElementById("suhu-fahrenheit").readOnly = true;

let isReversed = true;

document.getElementById("reverse").addEventListener("click", function () {
    var celciusLabel = document.querySelector("section.left-align:nth-child(1) p strong");
    var fahrenheitLabel = document.querySelector("section.left-align:nth-child(2) p strong");

    var celciusInput = document.getElementById("suhu-celcius");
    var fahrenheitInput = document.getElementById("suhu-fahrenheit");

    // Swap the labels
    var tempLabel = celciusLabel.innerHTML;
    celciusLabel.innerHTML = fahrenheitLabel.innerHTML;
    fahrenheitLabel.innerHTML = tempLabel;

    // Swap the input fields
    var tempValue = celciusInput.value;
    celciusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = tempValue;

    // Toggle the read-only property based on the state
    if (!isReversed) {
      fahrenheitInput.readOnly = false;
      celciusInput.readOnly = true;
  } else {
      celciusInput.readOnly = false;
      fahrenheitInput.readOnly = true;
  }

    // Toggle the state
    isReversed = !isReversed;
});

document.addEventListener("DOMContentLoaded", function() {
  var isReversed = true; // Change this value to test different scenarios
  var formInput = document.getElementById("cara-konversi");

  if (isReversed) {
    formInput.value = "S (°F) = (S (°C) x 9/5) + 32";
  } else {
    formInput.value = "S (°F) = (S (°C) + 32) x 5/9";
  }
});



