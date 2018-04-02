function getFirstSelector(selector){
  return document.querySelector(selector);
} 

function nestedTarget(){
  return document.querySelector(".target");
}

function increaseRankBy(n){
 var rankList = document.querySelector(".ranked-list") ;
  for(var i = 0; i < rankList.length; i++){
     parseInt(rankList[i].children[i].innerHTML + 1)
  }

}

function deepestChild(){
  var grandNode = document.getElementById("grand-node")
  var node = grandNode
  var childNode = node.children[0]

  while(childNode){
      node = childNode
      childNode = node.children[0]
  }
 
  return node
}