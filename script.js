const faqs = document.querySelectorAll(".faq")
const questions = document.querySelectorAll(".question")

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active")
  })
})
