function diamond(letter) {
    const charCode = letter.charCodeAt(0);
    const distanceFromA = charCode - 65;
    const numRows = distanceFromA * 2 + 1;
    let diamondStr = '';
  
    for (let i = 0; i < numRows; i++) {
      const distanceFromCenter = Math.abs(distanceFromA - i);
      const numChars = distanceFromA - distanceFromCenter + 1;
      const numSpaces = distanceFromCenter;
  
      let row = ' '.repeat(numSpaces);
  
      for (let j = 0; j < numChars; j++) {
        const char = String.fromCharCode(65 + j);
        row += char;
      }
  
      for (let j = numChars - 2; j >= 0; j--) {
        const char = String.fromCharCode(65 + j);
        row += char;
      }
  
      row += ' '.repeat(numSpaces);
      diamondStr += row + '\n';
    }
  
    return diamondStr;
  }
  
  console.log(diamond('C'));
  console.log(diamond('F'));