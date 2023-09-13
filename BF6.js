//WITH ARGUMENT WITH RETURN
function reverse(number) 
{
    let reverse = '';
    for (let i = number.length - 1; i >= 0; i--) 
    {
      reverse += number[i];
    }
    return reverse;
}
  let String = "HelloWorld";
  let result = reverse(String);
  console.log(result);
