function inverteString(str) {

    let array = str.split('');
    
    array.reverse();
    
    let novaStr = array.join('');
    
    return novaStr;
  }
  
  let minhaString = 'exemplo';
  let stringInvertida = inverteString(minhaString);
  console.log(stringInvertida);