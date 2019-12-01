const express = require('express');
const app = express();
const port = 3000;
const connection = require('./DBconnection');
const imgFiles = require('./myPicsFiles');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/DB', (req, res) => {
    connection.query('SELECT * FROM pictures' , (errors, rows, fields) => {
            console.log('shit worked');
            const pictures = rows.map((row) => {
               return row.picturelocation;
            });
            console.log(pictures);
    });
}
);

//insert picture into my DB
app.get('/UploadPicture', (req, res) => {
            connection.query('INSERT INTO pictures SET ?', req.body, (error, results, fields) => {
                if (error) throw error;
                //  Neat!
            });
        }
);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));