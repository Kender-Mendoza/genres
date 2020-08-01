const inputs = document.getElementsByClassName('input')
const outputs = document.getElementsByClassName('output')
const checkboxes = document.getElementsByClassName('checkbox')


const inputVehabior = (element) => {
    element.output.style.width = element.input.value ? 'auto' : '100px'
    element.output.innerHTML = element.input.value
    element.input.style.display = 'none'
    element.output.style.display = 'inline-block'
    element.checkbox.value = element.input.value
}

const size = inputs.length
for (let i = 0; i < size; i++) {
    const input = inputs[i];
    const output = outputs[i];
    const checkbox = checkboxes[i];

    output.addEventListener('click', () => {
        let outputWidth = output.getBoundingClientRect().width
        input.style.width = `${outputWidth + 10}px`
        output.style.display = 'none'
        input.style.display = 'inline'
        input.focus()
    })

    input.addEventListener('focusout', () => {
        inputVehabior({input, output, checkbox})
    })

    input.addEventListener('keypress', (e) => {
        // Solo cuando se precione la tecla de enter
        if (e.keyCode === 13) inputVehabior({input, output, checkbox})
    })
}