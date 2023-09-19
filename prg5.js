function yash(hello) {
    const words = hello.split(' ');
  
    let abc = '';
  

    for (let i = 0; i < words.length; i++) {
      const xyz = words[i];
  
      
      if (xyz.length > abc.length) {
        abc = xyz;
      }
    }
  
    return abc;
  }
  
  
  const hello = "Web Development Tutorial";
  const per = yash(hello);
  console.log("The longest word is:", per);
  