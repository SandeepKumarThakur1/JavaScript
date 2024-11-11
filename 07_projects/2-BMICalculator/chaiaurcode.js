// (weight / ((height * height) / 10000))

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Set Height Value ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Set Weight Value ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi <= 18.6) {
            results.innerHTML = `The BMI Value is Less then 18.6, so BMI Weight is Under Weight ${bmi}`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `The BMI Value is greater then 18.6, and less than 24.9 so BMI Weight is Normal Range ${bmi}`
        }
        else {
            results.innerHTML = `The BMI Value is greater than 24.9 so BMI Weight is Overweight ${bmi}`
        }
    }
})
