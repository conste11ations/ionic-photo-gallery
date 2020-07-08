const express = require('express');
const path = require('path')
const app = express();
app.use(express.static(path.resolve(__dirname, 'www')));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
 console.log('listening to Port', app.get('port'));
});