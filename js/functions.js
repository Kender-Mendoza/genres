const inputVehabior = (element) => {
    element.output.style.width = element.input.value ? 'auto' : '100px'
    element.output.innerHTML = element.input.value
    element.input.style.display = 'none'
    element.output.style.display = 'inline-block'
    element.checkbox.value = element.input.value
}

const outputVehabior = (element) => {
    const outputWidth = element.output.getBoundingClientRect().width
    element.input.style.width = `${outputWidth + 10}px`
    element.output.style.display = 'none'
    element.input.style.display = 'inline'
    element.input.focus()
}

const btnDeleteVehabior = (e) =>{
    const container = e.target.parentNode.parentNode
    const selector = e.target.parentNode
    container.removeChild(selector)
} 

const addEventToSelector = (id) => {
    const input = document.getElementById(id.input)
    const output = document.getElementById(id.output)
    const checkbox = document.getElementById(id.checkbox)
    const btnDelete = document.getElementById(id.btnDelete)

    output.addEventListener('click', () => outputVehabior({input,output,checkbox}))
    input.addEventListener('focusout', () => inputVehabior({input, output, checkbox}))
    // Solo cuando se precione la tecla de enter
    input.addEventListener('keypress', (e) => {if (e.keyCode === 13) inputVehabior({input, output, checkbox})})
    btnDelete.addEventListener('click', btnDeleteVehabior)
}

const createIdToSelector = () => {
    const selectors = document.getElementsByClassName('selector')
    const quantity = selectors.length
    
    return {
        input:`input${quantity}`,
        output:`output${quantity}`,
        checkbox: `checkbox${quantity}`,
        btnDelete: `btn-delete${quantity}`
    }
}

const createSelector = (id) =>{
    return `
    <div class="selector">
        <input type="checkbox" value="#" class="checkbox" id="${id.checkbox}"> 
        <input type="text" class="input" id="${id.input}">
        <p class="output" id="${id.output}"></p>
        <i class="fas fa-times btn-delete" id="${id.btnDelete}"></i>
    </div>
    `
}