const lastKey = process.env.LAST_KEY;
const axios = require('axios')

axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=97cc8d506895ec63220499529151e8e3&limit=500&format=json')
    .then(function (response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })