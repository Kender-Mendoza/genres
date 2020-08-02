const inputVehabior = (element) => {
    element.output.style.width = element.input.value ? 'auto' : '100px'
    element.output.innerHTML = element.input.value
    element.input.style.display = 'none'
    element.output.style.display = 'inline-block'
    element.checkbox.value = element.input.value
}

// funcion para asignar eventos a los selectores

const selectorEvents = () =>{
    const inputs = document.getElementsByClassName('input')
    const outputs = document.getElementsByClassName('output')
    const checkboxes = document.getElementsByClassName('checkbox')
    
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
            inputVehabior({
                input,
                output,
                checkbox
            })
        })
    
        input.addEventListener('keypress', (e) => {
            // Solo cuando se precione la tecla de enter
            if (e.keyCode === 13) inputVehabior({
                input,
                output,
                checkbox
            })
        })
    }
}

selectorEvents()

const container = document.getElementById('container')
const btnAdd = document.getElementById('add')
btnAdd.addEventListener('click', () => {
    const element = `
    <div class="selector">
        <input type="checkbox" value="#" class="checkbox"> 
        <input type="text" class="input">
        <p class="output"></p>
        <i class="fas fa-times btn-delete"></i>
    </div>
    `
    container.insertAdjacentHTML('beforeend', element)
    selectorEvents()
})