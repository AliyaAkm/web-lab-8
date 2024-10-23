// 1. Highlight all words over 8 characters long
let paragraph = document.getElementById("paragraph");
let words = paragraph.innerHTML.split(' ');
paragraph.innerHTML = words.map(word => {
    return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
}).join(' ');

let link = document.createElement("a");
link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
link.textContent = "Source of the text";
paragraph.insertAdjacentElement("afterend", link);

paragraph.innerHTML = paragraph.innerHTML.replace(/\.\s/g, '.<br class="line-break">');

let wordCount = words.length;
let wordCountDisplay = document.createElement("p");
wordCountDisplay.textContent = `Word count: ${wordCount}`;
document.body.insertBefore(wordCountDisplay, paragraph);

paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲');
