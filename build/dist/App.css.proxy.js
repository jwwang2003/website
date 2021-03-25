// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: min-content auto;\n}\n\n.fade-enter {\n  opacity: 0;\n  transform: translateY(50px);\n  z-index: 1;\n}\n\n.fade-enter.fade-enter-active {\n  opacity: 1;\n  transform: translateY(0px);\n  transition: 250ms ease;\n}\n\n.fade-exit {\n  opacity: 1;\n  transform: translateY(0px);\n}\n\n.fade-exit.fade-exit-active {\n  opacity: 0;\n  transform: translateY(50px);\n  transition: 250ms ease;\n}\n\n.Navbar {\n  grid-row: 1\n}\n\n.Content {\n  grid-row: 2;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}