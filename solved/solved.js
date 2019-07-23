function uniteUnique(arr) {
  
    var arg = Array.prototype.slice.apply(arguments);
    console.log(arg.length)
    
    var empArr=[];
  
    for(var i =0; i < arg.length; i++){
      // arg[i]
      for(var j=0; j<arg[i].length; j++)
      {
        if(!empArr.includes(arg[i][j])){
          // if(!empArr[i]){empArr[i] = []};
          empArr.push(arg[i][j]);
        }
      }
      
    }
    console.log(empArr);
  
    return empArr;
  
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);