var btnQuote = document.getElementById("btnQuote");



function addQuote()
{
  var newquote = ["“Be yourself; everyone else is already taken.”" , 

  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" , 
  
  "“So many books, so little time.”" , 

  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",

  "“A room without books is like a body without a soul.”",

  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  
  "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
  
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  
  "“You only live once, but if you do it right, once is enough.”",
  
  "“Be the change that you wish to see in the world.”"

];








  var authorquote = ["― Oscar Wilde" ,
   "― Marilyn Monroe" ,
    "― Frank Zappa",
    "― Albert Einstein",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
    "― William W. Purkey",
    "― Dr. Seuss",
    "― Mae West",
    "― Mahatma Gandhi"
  ];
  var num = Math.floor(Math.random() * newquote.length)
  var quoteholder = "";
  quoteholder+= `  
  <p>${newquote[num]}</p>
  <span>${authorquote[num]}</span>

    `
    var quotes = document.getElementById("quotes");
    quotes.innerHTML=quoteholder
}