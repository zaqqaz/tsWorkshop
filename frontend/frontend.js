function render(html) {
    requestAnimationFrame(() => document.getElementById("root").innerHTML = html);
}

const html = `<div style="height: 100px; width: 100px; background: red;"></div>`;

render(html);
