function firstLetterToUpper(strIn)
{
  // get first character and convert to lower case
  const firstCharUpperCase = strIn[0].toUpperCase();
  // console.log(firstCharUpperCase,"====")
  // convert all characters to lower case
  // and then get the characters from 2nd character upto the end 
  const tmpStr = strIn.toLowerCase().slice(1, strIn.length);
  // console.log(tmpStr)
  // concatenate the string
  const str = firstCharUpperCase + tmpStr;

  // console.log(str, "from line 13");
  return str;
}

const result = firstLetterToUpper("hElLo fROm Mars!");
console.log(result + "anuri", "from line 18")



