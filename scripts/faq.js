let faqQuestion = document.querySelectorAll(".faq-text");
let faqAnswer = document.querySelectorAll(".faq-answer");

const displayFAQ = i => {
	console.log(i);
	faqAnswer[i].classList.toggle("display");
};

Array.from(faqQuestion).forEach((faqQuestion, i) => {
	faqQuestion.addEventListener("click", displayFAQ.bind(null, i), false);
});
