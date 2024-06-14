const axios = require('axios')

const home = async (req, res) => {

    const test = "Hellow"
    
    res.render('main/home', {test})
}


const postLogin = async (req, res) => {

    const {email, password} = req.body
    
    const url = 'https://api.example.com/login'; // Replace with the actual API endpoint
    const requestBody = {
        email: email,
        password: password
    };

    try {
        const response = await axios.post(url, requestBody);
        console.log('Login successful:', response.data);
        // Handle successful login here (e.g., store tokens, navigate to another page, etc.)
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
        // Handle login error here (e.g., show error message to user)
    }
    
}

module.exports = {
    home,
    postLogin
}