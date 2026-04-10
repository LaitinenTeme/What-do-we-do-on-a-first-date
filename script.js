function showResult(text) {
  const result = document.getElementById("result");
  result.textContent = "Suggested first date: " + text;
  result.classList.remove("hidden");
}
