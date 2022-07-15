
function HourglassPyramid(n) {
    let string = "", reverseString = "";
    for(let i = 1; i <= n; i++) {
      string += "\n";
      for (let k = 1; k < i; k++) {
        string += " ";
      }  
      for(let j = i; j <= n; j++) {
       string += ` ${j}`;
      }
    }
    for(let i = n-1; i >= 1; i--) {
      string += "\n";
      for (let k = 1; k < i; k++) {
        string += " ";
      }  
      for(let j = i; j <= n; j++) {
       string += ` ${j}`;
      }
    }
    console.log(string);
  }
  HourglassPyramid(7);
  