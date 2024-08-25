
function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const convertFrom = document.querySelector('input[name="convertFrom"]:checked').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        switch (convertFrom) {
            case 'Celsius':
                result = `Fahrenheit: ${(temperature * 9/5) + 32}°F<br>`;
                result += `Kelvin: ${temperature + 273.15}K`;
                break;
            case 'Fahrenheit':
                result = `Celsius: ${(temperature - 32) * 5/9}°C<br>`;
                result += `Kelvin: ${((temperature - 32) * 5/9) + 273.15}K`;
                break;
            case 'Kelvin':
                result = `Celsius: ${temperature - 273.15}°C<br>`;
                result += `Fahrenheit: ${((temperature - 273.15) * 9/5) + 32}°F`;
                break;
            default:
                result = 'Something went wrong.';
        }
    }

    document.getElementById('result').innerHTML = result;
}
