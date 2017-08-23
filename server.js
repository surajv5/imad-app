var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'article one | suraj',
    heading:'article one',
    date: 'sep 5, 2017',
    content: `<p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
          <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
           <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>`
};

function createTemplate(data){

var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=
    
    `<html>
    <head>
    <title>
        ${title}
    </title>
        <meta name="viewport" content="width-device-width, inial-sacle=1" />
        <link href="/ui/style.css" rel="stylesheet" />

        </head>
        <body>
            <div class="container">
         <div>
             <a href="/">Home</a><hr/>
         </div>
         <div>
             ${heading}
             <hr/>
         </div>
         
         <div>
            ${date}     
            </div>
            <div>
             ${content}
         </div>
            </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
