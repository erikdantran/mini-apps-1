var express = require('express');
var app = express();
var port = 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('client')) // ask if the sendfile is needed
app.use(express.urlencoded({
  extended:true
}))


app.post('/upload_json', (req, res) => {
  console.log('Made it to the server, body:', req.body)
  res.send('post successful')
})

// app.get('/', (req, res) => {
//   res.sendFile('index.html', (err) => {
//     if (err) { console.log(err)}
//     else { console.log('File sent')}
//   })
// })


app.listen(port, () => {
  console.log(`listening on localport:${port}`);
})