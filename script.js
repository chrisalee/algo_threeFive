const threeFives = (start, finish) => {
  let sum = 0;
  for(let checkNumber = start; checkNumber <= finish; checkNumber++) {
    if(checkNumber % 5 === 0 && checkNumber % 3 === 0) {
      continue;
    } else if(checkNumber % 5 === 0 || checkNumber % 3 === 0) {
      sum +=checkNumber;
    } else{
        continue;
    } 
  }
  console.log(sum);
  return sum;
}

threeFives(0, 5);
