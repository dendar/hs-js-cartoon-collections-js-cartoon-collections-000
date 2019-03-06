function dwarfRollCall(dwarves) {
  // let str= "";
  // dwarves.forEach(function(name, index){
  //   str += (index+1 ". " + name + " ")
  // });
  // return str;

  let newStr= [];
  for(let i=0; i<dwarves.length; i++){



    newStr.push(((i+1) + ". " +dwarves[i] + " "));


   }
   return newStr.join("");

}

function summonCaptainPlanet(planeteerCalls){

  let str =[];
  for(let i=0; i < planeteerCalls.length; i++){
    let curElement= planeteerCalls[i];
    curElement= curElement.toUpperCase()+"!";
    str.push(curElement);
  }
  return str;
}

function longPlaneteerCalls(words) {
  for(let i=0; i<words.length; i++){
    if(words[i].length>4) return true;
  }
  return false;
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda","camembert"];
  for (var i = 0; i < cheese.length; i++) {
    let curCheese = cheese[i];
    for(let j=0; j<foods.length; j++){
      let curFoods =foods[i];
      if(curCheese===curFoods) return foods[j]
    }

  }
  return "no cheese!"
}
