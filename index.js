function getFirstSelector(selector){
  return document.querySelector(selector);
} 

function nestedTarget(){
  return document.querySelector(".target");
}

function increaseRankBy(n){
 var rankList = document.querySelector(".ranked-list") ;
 
 
  for(var i = 0; i < rankList.length; i++){
     var rankListChildren = rankList[i].children
     for(var b = 0; b < rankListChildren.length; b++){
       
     }
     parseInt(rankList[i].children[b].innerHTML)+ 1
    
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