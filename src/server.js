const express = require('express');
const webpack= require('webpack');
const webpackDevMiddleware= require('webpack-dev-middleware');
const webpackConfig= require('../webpack.config');

const app = express();
app.set('port',(process.env.PORT || 3000 ));
app.set('/static',express.static('dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/',function(req,res,next){
    res.send('Hola');
});

app.listen(app.get('port'),()=>{
        console.log('server iniciado');
});