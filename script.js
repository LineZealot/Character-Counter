function run() {
    const display = document.querySelector('.charCount-display');
    function characterCount() {
        const input = prompt("Input string:");
        return input.length;
    }
    display.textContent = characterCount();
}
run();