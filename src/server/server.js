const express = require('express');


const app = express();
app.set('port',(process.env.PORT || 3000 ));
app.set("view engine","ejs");


app.get('/',(req,res)=>{
    res.render('/src/client/index.html');
});

app.listen(app.get('port'),()=>{
        console.log('server iniciado');
});