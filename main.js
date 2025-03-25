function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const button = answer.previousElementSibling;
    const isVisible = answer.style.display === "block";

    answer.style.display = isVisible ? "none" : "block";
    button.setAttribute("aria-expanded", !isVisible);
}