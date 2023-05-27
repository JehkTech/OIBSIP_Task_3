function convert() {
	// Get the Celsius temperature
	var celsius = document.getElementById("celsius").value;
	
	// Convert Celsius to Fahrenheit
	var fahrenheit = (celsius * 9/5) + 32;
	
	// Convert Celsius to Kelvin
	var kelvin = parseFloat(celsius) + 273.15;
	
	// Display the results
	document.getElementById("fahrenheit").value = fahrenheit.toFixed(3);
	document.getElementById("kelvin").value = kelvin.toFixed(3);
}

function convertToFahrenheit() {
    // Get the Fahrenheit temperature
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheit - 32) * 5/9;

    // Convert Fahrenheit to Kelvin
    var kelvin = (fahrenheit + 459.67) * 5/9;

    // Display the results
    document.getElementById("celsius").value = celsius.toFixed(3);
    document.getElementById("kelvin").value = kelvin.toFixed(3);
}

function convertToKelvin() {
    // Get the Kelvin temperature
    var kelvin = parseFloat(document.getElementById("kelvin").value);

    // Convert Kelvin to Celsius
    var celsius = kelvin - 273.15;

    // Convert Kelvin to Fahrenheit
    var fahrenheit = (kelvin - 273.15) * 9/5 + 32;

    // Display the results
    document.getElementById("celsius").value = celsius.toFixed(3);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(3);
}


