// function solve() {
//   const textArea = document.getElementById('input');
//   const divOutput = document.getElementById('output');
//   let countSentences = textArea.value.split('.');
//   let p = document.createElement('p');
//   // p.textContent = '';
//   for (let i = 0; i < countSentences.length; i += 3) {
//     if (countSentences.length <= 3) {
//       p.textContent = `${countSentences[i]}. ${countSentences[i + 1]}. ${countSentences[i + 2]}`;
//     } else if (countSentences.length > 3) {
//       p.textContent = `${countSentences[i]}. ${countSentences[i + 1]}. ${countSentences[i + 2]}`;
//       console.log(countSentences[i])
//     }
//     divOutput.appendChild(p);
//     p.textContent = '';
//   }
//   console.log(countSentences)
// }

function solve() {
  const textArea = document.getElementById('input');
  const output = document.getElementById('output');
  let sentences = textArea.value.split('.');
  sentences.pop();

  
  while (sentences.length > 0) {
    let paragraphSentences = sentences.splice(0, 3)
      .map((p) => p.trimStart());
    const newParagraph = document.createElement('p');
    newParagraph.textContent = paragraphSentences.join('. ') + '.';
    output.appendChild(newParagraph)
  }
}