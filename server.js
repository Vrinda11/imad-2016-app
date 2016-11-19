var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title:'Change:VrindaB',
    heading: 'Change',
    date:'Sep 20,2016',
  
    content:  `
                 <p>
                 
                 "To improve is to change; to be perfect is to change often."-Winston Churchill
                    Change is scary,risky and sometimes dangerous.We all are afraid of it.All afraid to try it,try new things,try something profound and striking.Unless we have a sense of comfort we aren't confortable.It requires great courage,confidence and bravery to step out of our confort zone.The best secret to change is just to no think and do,
                            trust your guts,trust your instincts and you are half way to success.If you believe your brain knows that it
                          be done and so it works and acts accordingly.
                      </p>
                        <p>
                         The first stepping stone to change is to believe in yourself and in creating the new out of the old.It it necessary to focus all our energies on finding solutions and fighting the problem.A strategy or a series of solution are required with proper implementation 
                        and working out the plan requiresd.One need to be more imaginative,creative and expand one's horizons.One needs to be bolder in one's pursuits and there should be adequate time bound implementation of actions.
                        </p>
                        <p>
                        "Action speaks louder than words".Thus with a serene,calm,stable,purified mind one should strive for one's goals and face adversity with determination and will power.                        
                        </p> `

    
};

var htmlTemplate = `<html>
    <head>
        <title>
${title}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale-1"/>
           <link href="/ui/style.css" rel="stylesheet" />
    <meta name="viewport" content='width-device-width,initial-scale-1'/>
    
   
    </head>
    <body>
           <div class="container">
        
        <div  class="center">
            <div>
                <a href="/">Home</a>
            </div>
          <img style="-webkit-user-select: none;" src="https://www.mindtools.com/media/Resized-Images/Articles/Project_Management/25_IS_10761150_cglade_2x1.jpg" width="592" height="296">
          <hr/>
          <h3>
          ${heading}
          $</h3>
          <div>
          ${date}
          </div>
            <div>     
            ${content}
</div>
    </div>
    </div>
    </body>
</html>



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
    });


app.get('/article-one',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
}
);

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
}
);

app.get('/article-three',function(req,res){
    res.send('article-three requested and will be served here');
}
);

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
