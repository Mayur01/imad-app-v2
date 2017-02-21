var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 ArticleOne :{ 
        title: `Falat Familial Insomnia | Mayur`,
        heading: `Falat Familial Insomnia`,
        content:`<p>
                    Carried in a gene handed down through generations, the rare disease known as fatal familial insomnia has plagued families for hundreds of years, and researchers are working to learn more about this uncommon but deadly disorder in the hopes of finding a solution.
                    The name sort of puts it all on the table. It’s a progressive, inherited condition, characterized by eventually total insomnia  leading within about nine months time to death.
                 </p>
                 
                 <p>
                    Author of the book The Family That Couldn’t Sleep: A Medical Mystery, Max introduces readers to a man known only as Silvano, who fell victim to this mysterious affliction the same way many of his relatives had. Taking Max through his family tree, Silvano traced the disease’s origins to a distant relative  a Venetian doctor in the late 18th century and connected the dots to include his own father, before finally reaching himself.
                 </p>
                 
                 <p>
                    Unlike his older relatives who chose to keep the family’s curse a secret, Silvano visited a sleep clinic at the University of Bologna at the insistence of his niece’s husband. Here, researchers located the cause of the disease: A misshapen protein found in the brain, the result of a genetic mutation.
                    This protein is known as a prion, making fatal familial insomnia a prion disease, a neurodegenerative disorder that affects various regions of the brain. This particular disorder primarily affects the thalamus, the part of the brain that helps control the body’s motor systems, which include the sleeping and waking cycles, and its progression is nothing short of maddening.
                 </p>` 
    },
 ArticleTwo : {
    title: `The Paradox of Behavior Change | Mayur`,
    heading: `The Paradox of Behavior Change`,
    content:`<p>
                  Like your body, there are many forces and feedback loops that moderate the particular equilibrium of your habits. Your daily routines are governed by the delicate balance between your environment, your genetic potential, your tracking methods, and many other forces. As time goes on, this equilibrium becomes so normal that it becomes invisible. All of these forces are interacting each day, but we rarely notice how they shape our behaviors.
              </p>
              <p>
                  The natural tendency of life is to find stability. In biology we refer to this process as equilibrium or homeostasis.
    For example, consider your blood pressure. When it dips too low, your heart rate speeds up and nudges your blood pressure back into a healthy range. When it rises too high, your kidneys reduce the amount of fluid in the body by flushing out urine. All the while, your blood vessels help maintain the balance by contracting or expanding as needed.
    The human body employs hundreds of feedback loops to keep your blood pressure, body temperature, glucose levels, calcium levels, and many other processes at a stable equilibrium.
              </p>` 
    }
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
          <head>
              <title>
              ${title}
          </title>
          <link href="/ui/style.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width initial-scale=1"/>
          </head> 
          
          <body>
              <div class="change">
                  <div>
                      <a href="/">Home</a>
                  </div>
                      <hr/> <!--Horizontal line-->
                      <h2>
                          ${heading}
                      </h2>
                      <div>
                  ${content}
                      </div>
              </div>
          </body>
        </html>
        `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(ArticleOne));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui','/article-two.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
