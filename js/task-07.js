const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControl.addEventListener("input", onFontSizeControlChange);

function onFontSizeControlChange(event) {
    textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}