const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Helper functions
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
};

const isArmstrong = (num) => {
    const digits = String(num).split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === num;
};

const getDigitSum = (num) => {
    const absNum = Math.abs(num);
    const sum = String(absNum).split('').reduce((acc, digit) => acc + Number(digit), 0);
    return num < 0 ? -sum : sum;
};

const getParity = (num) => {
    return num % 2 === 0 ? 'even' : 'odd';
};

// Root endpoint
app.get('/', (req, res) => {
    res.redirect('/api/classify-number');
});


// API endpoint
app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;

    if (isNaN(number) || number === '' || !Number.isInteger(parseFloat(number))) {
        return res.status(400).json({
            number: number,
            error: true
        });
    }

    const num = parseInt(number, 10);

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`);
        const funFact = funFactResponse.data;

        const properties = [];
        if (isArmstrong(num)) properties.push('armstrong');
        properties.push(getParity(num));

        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: properties,
            digit_sum: getDigitSum(num),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

//Export the express app for vercel
module.exports = app;