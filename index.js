module.exports = () => {
    let express = require('express'), app = express();
    app.set('port', (process.env.PORT || 5000));
    app.get('/', (request, response) => {
        response.send('App is running!');
    }).listen(app.get('port'), () => {});
}