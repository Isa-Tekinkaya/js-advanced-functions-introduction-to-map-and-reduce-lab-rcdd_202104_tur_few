function mapToNegativize(array){
  return array.map(array => array * -1)
}
function mapToNoChange(array) {
  return array.map(array => array)
  
}
function mapToDouble(array){
  return array.map(array => array *2)
} 
function mapToSquare(array){
  return array.map(array => array * array)
}

  function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce((acc, cur) => {
      return  cur+  acc     
     
  },startingPoint )
    
}
  
  
  function reduceToAllTrue(array){
    return array.reduce((sourceArray) => {sourceArray
   })
    
  }
