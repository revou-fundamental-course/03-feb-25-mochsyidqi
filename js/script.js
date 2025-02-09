// function greet() {
//    alert("Hello! Welcome to the simple JavaScript example.");
//}

// Call the greet function
//greet();

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('suhu-celcius').value = '';
    document.getElementById('suhu-fahrenheit').value = '';
});

document.getElementById('konversi').addEventListener('click', function() {
    var celciusValue = document.getElementById('suhu-celcius').value;
    var fahrenheitValue = document.getElementById('suhu-fahrenheit').value;

    if (celciusValue !== '') {
        fahrenheitValue = parseFloat(celciusValue)+ 32;
        document.getElementById('suhu-fahrenheit').value = fahrenheitValue;
    } else if (fahrenheitValue !== '') {
        celciusValue = parseFloat(fahrenheitValue) - 32;
        document.getElementById('suhu-celcius').value = celciusValue;
    }
});


  
  