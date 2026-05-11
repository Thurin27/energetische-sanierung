function renderKatex() {
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false,
      strict: false
    });
  }
}

// Material for MkDocs uses instant loading; subscribe to navigation events
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    renderKatex();
  });
} else {
  document.addEventListener("DOMContentLoaded", renderKatex);
}
