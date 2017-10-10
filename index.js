function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#app #nested .target")
}
function deepestChild(){

}
function increaseRankBy(n){
  var num = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for (x = 0; x < num.length; x++){
    num[x].innerHTML =(parseInt(num[x].innerHTML)+n)
  }
}
