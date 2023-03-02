function run() {
    // get input text
    const inputField = document.querySelector('#charCount-input');
    // get submit button
    const inputButton = document.querySelector('.submit');
    // get output display
    const display = document.querySelector('.charCount-display');
    // function to get the string and return the character count
    function characterCount() {
        const input = inputField.value;
        return input.length;
    }
    // update character count on button click
    inputButton.addEventListener('click', () => {
        display.textContent = characterCount();
    });
}
run();