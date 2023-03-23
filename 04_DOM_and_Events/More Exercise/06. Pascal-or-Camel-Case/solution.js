function solve() {
  const input = document.getElementById('text');
  const [example, requiredType] = input.value.split(', ');
  const exampleArr = example.split(' ');
  const requiredTypeArr = requiredType.split(' ');

  const namingConvention = document.getElementById(`naming-convention`);

  let result = '';
  exampleArr.forEach(word => {
    word = word.toLowerCase();
    if (requiredType === "Camel Case") {
      if (exampleArr.indexOf(word) === 0) {
        word = word.slice(1, word.length);
        result += word;
      } else if (exampleArr.indexOf(word) === exampleArr.length - 1) {
        word = word.slice(0, word.length - 1);
        result += capitalizeFirstLetter(word);
      } else {
        result += capitalizeFirstLetter(word);
      }
    } else if (requiredType === 'Pascal Case') {
      result += capitalizeFirstLetter(word);
    } else {
      result = 'Error!'
    }
  });
  namingConvention.value = result;

  function capitalizeFirstLetter (string) {
    let stringWithoutFirstLetter = string.slice(1);
    let stringFirstLetter = string.charAt(0);
    string = stringFirstLetter.toUpperCase() + stringWithoutFirstLetter;
    return string
  }
}






// function solve() {
//   // const input = document.getElementById('text');
//   // const [example, requiredType] = input.value.split(', ');
//   const exampleArr = ['"this', 'is', 'an', 'example"'];
//   const requiredType = "Camel Case";
//   // const namingConvention = document.getElementById(`naming-convention`);

//   let result = '';
//   exampleArr.forEach(word => {
//     word = word.toLowerCase();
//     if (requiredType === "Camel Case") {
//       if (exampleArr.indexOf(word) === 0) {
//         word = word.slice(1, word.length);
//         result += word;
//       } else if (exampleArr.indexOf(word) === exampleArr.length - 1) {
//         word = word.slice(0, word.length - 1);
//         result += capitalizeFirstLetter(word);
//       } else {
//         result += capitalizeFirstLetter(word);
//       }
//     } else if (requiredType === 'Pascal Case') {
//       result += capitalizeFirstLetter(word);
//     } else {
//       result = 'Error!'
//     }
//   });
//   namingConvention.value = result;

//   function capitalizeFirstLetter (string) {
//     let stringWithoutFirstLetter = string.slice(1);
//     let stringFirstLetter = string.charAt(0);
//     string = stringFirstLetter.toUpperCase() + stringWithoutFirstLetter;
//     return string
//   }
// }

// solve()