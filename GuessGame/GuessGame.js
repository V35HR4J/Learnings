function GuessGame(){
    var ans = Math.floor(Math.random()*11)
    console.log(ans);
    user=prompt('Enter Your Name To Continue This Awesome Game');
    alert(`Alright! ${user}, Welcome To The Game, You Have To Guess the right number to be winner.`)
    let chance=1;
{    
    do{
        guess=prompt('Guess any number from 1-10');
        console.log(`Guess=${guess} Ans=${ans}`);
        if(guess<ans){
            alert(`You Guessed Too Low! and You have ${5-chance} chances left`);
        }
        else if(guess>ans){
            alert(`You Guessed Too High and You have ${5-chance} chances left`);
        }
        else if(guess==ans){
            alert(`Congrats You Won it ${user}!!`);
        }
        
       if(chance>=5){
            alert(`You Loosed it, You are out of chances, The answer was ${ans}`);
            break;
        }
        chance++;

        
        }while(guess!=ans);

}
}
var click=document.querySelector('.click');
click.addEventListener('click',GuessGame)