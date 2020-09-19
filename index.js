function OnClick(){
  var randomNumber1=Math.floor(Math.random()*5);
  var randomNumber2=Math.floor(Math.random()*5);

  document.querySelector(".img1").setAttribute("src","images/stage_"+randomNumber1+".png")

  document.querySelector(".img2").setAttribute("src","images/stage_"+randomNumber2+".png")

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is the master!"
  }
  else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 is the master!"
  }
  else if (randomNumber1===0 && randomNumber2===0){
    document.querySelector("h1").innerHTML="You are both useless!"
  }
  else{
    document.querySelector("h1").innerHTML="You tie!"
  }

  document.querySelector("h3").innerHTML="Click to replay"
}
