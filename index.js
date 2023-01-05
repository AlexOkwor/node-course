const express = require('express');

const app = express();

//app.get('/', (req,res)=>{
   // res.send('Hello World');
//});
app.get('/', (req,res)=>{
    res.send('Welcome to Dream Project Platform');
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3]);
});

app.listen(3000, ()=>console.log('Listening on port 3000...'));

// I had to generate personal access token for my github account. 
// When I gave the git push command, I encountered an error of access denied, 
// since password authentication was no longer used.
// I  configured ssh keys with github
// I created access token on git hub
// To set up git hub use:
// git config --global user.name "Alex"
// git config --global user.email alexogokwor@yahoo.com
