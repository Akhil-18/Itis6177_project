var express = require('express');
var cors = require('cors');
var axios = require('axios');
var app = express();
app.use(cors());

const port = 3000

app.get('/', function(req, res){
    const data = axios.get('https://ekmbusljl2.execute-api.us-east-1.amazonaws.com/prod')
    .then((response) => {
        // console.log(response.data);
        res.send(response.data);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))