import express from 'express';

//initialise express
const app = express();

// Set static folder
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded ({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Start the server

app.post("/calculate", (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    const bmi = weight/(height ** 2);
    let range = ""; 

    if (bmi < 18.5) {
        range = "underweight";
    } else if (bmi >= 18.5 && bmi <=24.9) {
        range = "healthy weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        range = "overweight";
    } else if (bmi >= 30.0) {
        range = "obese";
    }

    res.send(`
        <p>Height of ${height}m & Weight of ${weight}kg gives you a BMI of ${bmi.toFixed(2)}</p>
        <p>Your BMI falls within the ${range} range.</p>
        `);
});

app.listen (3000, ()=>{
    console. log('Server listening on port 3000');
});