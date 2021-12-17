/*
Requirement 1
Create a product based on your Final Project Proposal by:
Successfully deploying your application to an appropriate production environment
Making the source code available for review
Creating a simple yet visually pleasing user interface
Including and help system and user instructions that succinctly 
describes the application and how it works
Requirement 2
Implement at least four (4) meaningful features that are of similar 
complexity to features we delivered in previous applications.
*/

/*Requirement 1: Help System*/
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
   }
  
   function closeModal() {
     var modal = document.getElementById('myModal');
     modal.style.display = "none";
   }
  //learned from w3schools tutorial
   window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  

/*feature 1: Add/Clear your own word/Reset all --------------------------------------------------*/
var splitString = [];
var myword;

function getWordInput(){
    myword = document.getElementById("getWordInput").value;
    console.log("Word is " + myword);

}

MatchingLetter = [];

function setWordInput(){
    getWordInput()

    if(splitString.length == 0){
        for (var i = 0; i<myword.length; i++){
            splitString.push(myword.charAt(i));
        }
    }
    //console.log(splitString);

    MatchingLetter = splitString;
    console.log(MatchingLetter);

    document.getElementById("getWordInput").value = "";
}

function resetWordInput(){
    splitString = [];
    MatchingLetter = splitString;
    console.log(MatchingLetter);

    document.getElementById("playerInput").value = "";
    document.getElementById("letterOne").value = "";
    document.getElementById("letterTwo").value = "";
    document.getElementById("letterThree").value = "";
    document.getElementById("letterFour").value = "";
    document.getElementById("wrongGuess").value = "";
}

function resetAll(){
    splitString = [];
    MatchingLetter = splitString;
    console.log(MatchingLetter);

    document.getElementById("playerInput").value = "";
    document.getElementById("letterOne").value = "";
    document.getElementById("letterTwo").value = "";
    document.getElementById("letterThree").value = "";
    document.getElementById("letterFour").value = "";
    document.getElementById("wrongGuess").value = "";
    document.getElementById("score").value = 0;
    score = 0;
}
//------------------------------------------------------------------------------------------

/*Feature 2: autofill the guessed letters*/
function callLetter(){
    getLetter();
  }

//MatchingLetter = [];
NotMatching = [];

scoreCheck = false;

function getLetter(){
    //MatchingLetter = ["D", "O", "G", "S"];
    //NotMatching = [];
    var pInput = document.getElementById("playerInput").value
    console.log("player typed:" + pInput);
    
    
    checkNotMatch();
    console.log("Checking Not Match Function");


        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[0]) && 
        (document.getElementById("letterOne").value == "") || 
        (document.getElementById("letterOne").value == " "))
        {
            document.getElementById("letterOne").value = pInput;
            scoreSet1();
        }

        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[1]) && 
        (document.getElementById("letterTwo").value == "") || 
        (document.getElementById("letterTwo").value == " "))
        {
            document.getElementById("letterTwo").value = pInput;
            scoreSet2();
        }

        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[2]) && 
        (document.getElementById("letterThree").value == "") || 
        (document.getElementById("letterThree").value == " "))
        {
            document.getElementById("letterThree").value = pInput;
            scoreSet3();
        }

        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[3]) && 
        (document.getElementById("letterFour").value == "") || 
        (document.getElementById("letterFour").value == " "))
        {
            document.getElementById("letterFour").value = pInput;
            scoreSet4();
        }
        scoreWinAlert();
      }
 

/*feature 3: score counter and win notification*/
score = 0;
function scoreSet1(){

    var pInput = document.getElementById("playerInput").value

    if ( (document.getElementById("letterOne").value == "") || 
        (document.getElementById("letterOne").value == " ") || 
        (document.getElementById("letterOne").value == null))
    {
        var falseThing2 = false;
        //score -= 1;
    } else {
        if(pInput == MatchingLetter[0])
        {
            score += 3;
            document.getElementById("playerInput").value = "";
        }else{
            score -= 1;
            document.getElementById("playerInput").value = "";
        }
        document.getElementById("score").value = score;
    }
}

function scoreSet2(){
    var pInput = document.getElementById("playerInput").value
   if ( (document.getElementById("letterTwo").value == "") || 
        (document.getElementById("letterTwo").value == " ") || 
        (document.getElementById("letterTwo").value == null))
    {
        var falseThing2 = false;
        //score -= 1;
    } else {
        if(pInput == MatchingLetter[1])
        {
            score += 3;
            document.getElementById("playerInput").value = "";
        }else{
            score -= 1;
            document.getElementById("playerInput").value = "";
        }
        document.getElementById("score").value = score;
    }
}
function scoreSet3(){
    var pInput = document.getElementById("playerInput").value
    if ( (document.getElementById("letterThree").value == "") || 
        (document.getElementById("letterThree").value == " ") || 
        (document.getElementById("letterThree").value == null))
    {
        var falseThing2 = false;
        //score -=1;
    } else {
        if(pInput == MatchingLetter[2])
        {
            score += 3;
            document.getElementById("playerInput").value = "";
        }else{
            score -= 1;
            document.getElementById("playerInput").value = "";
        }
        document.getElementById("score").value = score;
    }
}
function scoreSet4(){
    var pInput = document.getElementById("playerInput").value
    if ( (document.getElementById("letterFour").value == "") || 
        (document.getElementById("letterFour").value == " ") || 
        (document.getElementById("letterFour").value == null))
    {
        var falseThing2 = false;
        //score -=1;
    } else {
        if(pInput == MatchingLetter[3])
        {
            score += 3;
            document.getElementById("playerInput").value = "";
        }else{
            score -= 1;
            document.getElementById("playerInput").value = "";
        }
        document.getElementById("score").value = score;
    }
}

//win notification
function scoreWinAlert(){

    if( ((document.getElementById("letterOne").value == "") || 
    (document.getElementById("letterOne").value == " ") || 
    (document.getElementById("letterOne").value == null) ||
    (document.getElementById("letterTwo").value == "") || 
    (document.getElementById("letterTwo").value == " ") || 
    (document.getElementById("letterTwo").value == null) ||
    (document.getElementById("letterThree").value == "") || 
    (document.getElementById("letterThree").value == " ") || 
    (document.getElementById("letterThree").value == null) ||
    (document.getElementById("letterFour").value == "") || 
    (document.getElementById("letterFour").value == " ") || 
    (document.getElementById("letterFour").value == null)
    )){
        var falseThing3 = false;
    }else{

        if (score == 12){
            document.getElementById("hint").value = "";
            document.getElementById("hint").value = "Congratulations, perfect score";
            console.log("YOU WIN");
        }
        if (score < 12 && score > 6 || score == 6){
            document.getElementById("hint").value = "";
            document.getElementById("hint").value = "Result: Above Average Score";
        }
        if (score < 6){
            document.getElementById("hint").value = "";
            document.getElementById("hint").value = "Result: Below Average Score";
        }

    }
}



found = true;

//wrong guesses show up here
function checkNotMatch(){
    var pInput = document.getElementById("playerInput").value
    console.log("pINPUT " + pInput)
    if ((pInput == "")||(pInput == " ")||(pInput==null)){
        var falseThing = false;
    }else{
        for (i =0; i < MatchingLetter.length; i++){
            if (pInput != MatchingLetter[i]){
                //NotMatching.push(pInput); 
                //console.log("not matching" + NotMatching.value);
                found = false;
                //score -= 1;
                //console.log("score is: " + score);
            } else{
                found = true;
                //score += 5;
                //console.log("score is: " + score);
                break;
            }
        }
        if (found == false){
            NotMatching.push(pInput); 
            document.getElementById("wrongGuess").value = NotMatching;
            console.log("not matching" + NotMatching.value);
            score -= 1;

            document.getElementById("playerInput").value = "";
            document.getElementById("score").value = score;
            //console.log("score is: " + score);
        }

        //true if section was commented out--
        //if (found == true){
            //score += 3;
            //console.log("score is: " + score);
        //}
        //-----------------------------------
        found = true;
    }
}


/*feature 4: Hints*/

function hint(){
    vowelCounter = 0;
    for (i =0; i < MatchingLetter.length; i++){
        if ((MatchingLetter[i] == "A")||(MatchingLetter[i] == "E")||(MatchingLetter[i] == "I")||
            (MatchingLetter[i] == "O")||(MatchingLetter[i] == "U")|| 
            (MatchingLetter[i] == "a")||(MatchingLetter[i] == "e")||(MatchingLetter[i] == "i")||
            (MatchingLetter[i] == "o")||(MatchingLetter[i] == "u"))
            {
            vowelCounter +=1; 
            }
    }
    document.getElementById("hint").value = "There is(are) " + vowelCounter + " vowel(s)!"
}