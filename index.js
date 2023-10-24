
  function multiplyAll(arr){
    let result = [arr[0]* 2];
    for(let i = 0; i < arr.length; i++){
      result.push(arr[i]*2);  
    }
    return result;
  }
  console.log(multiplyAll([2, 4, 6]));