function fibonacci(n) {
    let seq = [];
    
    seq.push(0);
    seq.push(1);
    
    for (let i = 2; i < n; i++) {
      let proximoNum = seq[i - 1] + seq[i - 2];
      seq.push(proximoNum);
    }
    
    for (let i = 0; i < seq.length; i++) {
      console.log(`O número ${seq[i]} pertence a sequência de Fibonacci`);
    }
    
    return seq;
  }
  
  let n = 6;
  let seqFibonacci = fibonacci(n);