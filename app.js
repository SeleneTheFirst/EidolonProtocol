(() => {
  "use strict";

  const quoteCard = document.querySelector("#quote");
  const quoteLines = document.querySelector("#quote-lines");
  const attribution = document.querySelector("#attribution");
  const author = document.querySelector("#author");
  const source = document.querySelector("#source");
  const previousButton = document.querySelector("#previous-quote");
  const randomButton = document.querySelector("#random-quote");
  const nextButton = document.querySelector("#next-quote");

  if (!Array.isArray(QUOTES) || QUOTES.length === 0) {
    quoteLines.textContent = "No quotations have been added yet.";
    previousButton.disabled = true;
    randomButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  let currentIndex = Math.floor(Math.random() * QUOTES.length);

  function normalizeIndex(index) {
    return (index + QUOTES.length) % QUOTES.length;
  }

  function renderAttribution(entry) {
    const credit = entry.attribution ?? {};
    const authorText = credit.author?.trim() ?? "";
    const sourceParts = [credit.source, credit.year]
      .filter(Boolean)
      .map(value => String(value).trim())
      .filter(Boolean);

    author.textContent = authorText;
    source.textContent = sourceParts.join(" · ");
    attribution.hidden = !authorText && sourceParts.length === 0;
  }

  function renderQuote(index) {
    currentIndex = normalizeIndex(index);
    const entry = QUOTES[currentIndex];
    const lines = Array.isArray(entry.lines) ? entry.lines : [];

    quoteLines.replaceChildren();

    for (const text of lines) {
      const line = document.createElement("span");
      line.className = "quote-line";
      line.textContent = String(text);
      quoteLines.append(line);
    }

    renderAttribution(entry);
    quoteCard.classList.remove("is-changing");
    void quoteCard.offsetWidth;
    quoteCard.classList.add("is-changing");
  }

  function showPrevious() { renderQuote(currentIndex - 1); }
  function showNext() { renderQuote(currentIndex + 1); }

  function showRandom() {
    if (QUOTES.length === 1) {
      renderQuote(0);
      return;
    }
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * QUOTES.length);
    }
    renderQuote(nextIndex);
  }

  previousButton.addEventListener("click", showPrevious);
  randomButton.addEventListener("click", showRandom);
  nextButton.addEventListener("click", showNext);

  document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
    if (event.key.toLowerCase() === "r") showRandom();
  });

  renderQuote(currentIndex);
})();
