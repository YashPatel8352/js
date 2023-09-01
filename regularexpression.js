//let data = 'Hello world,  I am learing Javascript SkillQode@hello.in';
//let reg = /JAVA/i;
//let reg = /i/g;
//let reg = /[H,e,5]/g;
//let reg = /(H|i|@)/g;
//let reg = /\d/g;
//let reg = /\s/g;
//let reg = /ing\b/g;
//let result = data.match(reg);
//console.log(result);


let mo = "915-565-1425";
let reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{4}$/;
result = mo.match(reg);
console.log(result); 