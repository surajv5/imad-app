var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'article one | suraj',
    heading:'article one',
    date: 'sep 10, 2017',
    content: `<p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
          <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
           <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>`
},
 'article-two':{
         title:'article two | suraj',
    heading:'article two',
    date: 'sep 15, 2017',
    content: `<p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
          <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
           <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>`
 },
 'article-three':{
         title:'article three | suraj',
    heading:'article three',
    date: 'sep 20, 2017',
    content: `<p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
          <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>
           <p>this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. this is article one. read carefully. </p>`
 }
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
         </div></div>
            </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
