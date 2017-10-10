function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#app #nested .target")
}
function deepestChild(){
  return document.querySelector("#app div#grand-node div div div div")
}
function increaseRankBy(n){
  var num = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for (let x = 0; x < num.length; x++){
    num[x].innerHTML =(parseInt(num[x].innerHTML)+n)
  }
}
