var relisyn=require("readline-sync");
var chalk=require("chalk");
var bb=chalk.redBright;
var score=0;
var exit=0;
var a=relisyn.question("Please enter your name!");
console.log("\nHello "+chalk.yellow.underline(a.toUpperCase()));
console.log(chalk.green("\n                  Welcome to KBC show              \n"));
console.log("GET...........SET.............GO\n");

var questions=[{
  questioon:bb("Who is the first president of INDIA?"),
  a:"rishikesh",b:"ruthesh",c:"rajendra prasad",d:"rithesh",
  answer:"c"
},
{
  questioon:bb("Who is the present prime minister of INDIA?"),
  a:"narendra modi",b:"pranab mukherjee",c:"nitheesh",d:"rathuk",answer:"a"
},
{
  questioon:bb("Who is the best batsman in the world?"),
  a:"virat kohli",b:"skyadav",c:"pandya",d:"bumrah",answer:"a"
},
{
  questioon:bb("What is the national animal of INDIA?"),
  a:"peacock",b:"tiger",c:"rabbit",d:"ostrich",answer:"b"
},
{
  questioon:bb("Who is the founder of facebook?"),
  a:"mark zuckerburg",b:"jeffbezos",c:"timcook",d:"hero",answer:"a"
},
{
  questioon:bb("Who is the leading run scorer in cricket?"),
  a:"sachin",b:"inzamam",c:"gilchrist",d:"tylor",answer:"a"
},
{
  questioon:bb("How many teeth does a normal adult human have?"),a:"20",b:"32",c:"40",d:"50",answer:"b"
},
{
  questioon:"What is the highest mountain in the world?",
  a:"Mount Everest",b:"teko",c:"yohan",d:"reddt",answer:"a"
},
{
  questioon:bb("Where does tanay pratap works?"),
  a:"microsoft",b:"google",c:"infosys",d:"IBM",answer:"a"
},
{
  questioon:bb("Hero of sholay movie?"),
  a:"amitabh bhachan",b:"rytee",c:"riteshdeshmukh",d:"ten",
  answer:"a"
}
]
for(var i=0;i<questions.length;i++)
{
  var cq=questions[i];
  play(cq.questioon,cq.answer,cq.a,cq.b,cq.c,cq.d);
  if(exit==1){
    break;
  }
}
function play(questioon,answer,a,b,c,d)
{
  console.log(questioon);
  console.log("a:",a,"               ","b:",b," ");
  console.log("c:",c,"               ","d:",d," ");
  var a1=relisyn.question();
  if(a1==answer)
  {
    score=score+10000;
    console.log("correct answer\n");
  }
  else{
    console.log("Sorry ! it's Wrong answer\n");
    exit=1;
  }
}
if(score==100000)
{
  console.log("\nCongrats!You have won Rs.",score);
  console.log("You had great talent,",a);
}
else if(score>30000 && score<100000)
{
  console.log("\nCongrats!You have won Rs.",score);
  console.log("Pchhh! But You didn't went till last question,",a);
}
else{
  console.log("\nYou have won Rs.",score);
  console.log("You should have played much better,",a);
}

