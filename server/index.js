const express = require('express'),
  bodyParser = require('body-parser'),
  port = 3000,
  app = express(),
  messagesCtrl = require('./controllers/messagesCtrl');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', messagesCtrl.read);
app.post('/api/messages', messagesCtrl.create);
app.put('/api/messages/:id', messagesCtrl.update);
app.delete('/api/messages/:id', messagesCtrl.remove);

app.listen(port, function() {
  console.log('Server listening on port', port);
});
