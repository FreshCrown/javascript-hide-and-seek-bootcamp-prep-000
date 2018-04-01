function getFirstSelector(selector){
  return document.querySelector(selector);
} 

function nestedTarget(){
  return document.querySelector(".target");
}

function increaseRankBy(n){
  
  for (var i = 0; i < 0; i++;){
    
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