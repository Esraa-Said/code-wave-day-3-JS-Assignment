let message = prompt("Enter a message to display:");

for (let i = 1; i <= 6; i++) {
    let header = document.createElement(`h${i}`);
    header.textContent = message;
    document.body.appendChild(header);
}
