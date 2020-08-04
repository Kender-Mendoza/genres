const inputVehabior = (element) => {
    element.output.style.width = element.input.value ? 'auto' : '100px'
    element.output.innerHTML = element.input.value
    element.input.style.display = 'none'
    element.inputUrl.style.display = 'none'
    element.output.style.display = 'inline-block'
    element.checkbox.value = element.input.value
}

const outputVehabior = (element) => {
    const outputWidth = element.output.getBoundingClientRect().width
    element.input.style.width = `${outputWidth + 10}px`
    element.inputUrl.style.width = `${outputWidth + 10}px`
    element.output.style.display = 'none'
    element.input.style.display = 'inline'
    element.inputUrl.style.display = 'inline'
    element.input.focus()
}

const btnDeleteVehabior = (e) =>{
    const container = e.target.parentNode.parentNode
    const selector = e.target.parentNode
    container.removeChild(selector)
} 

const addEventToSelector = (id) => {
    const selector = document.getElementById(id.selector)
    const checkbox = document.getElementById(id.checkbox)
    const input = document.getElementById(id.input)
    const inputUrl = document.getElementById(id.inputUrl)
    const output = document.getElementById(id.output)
    const btnDelete = document.getElementById(id.btnDelete)

    output.addEventListener('click', () => outputVehabior({input, inputUrl, output, checkbox}))
    // Solo cuando se precione la tecla de enter
    input.addEventListener('keypress', (e) => {if (e.keyCode === 13 && input.value && inputUrl.value) inputVehabior({input, inputUrl, output, checkbox})})
    inputUrl.addEventListener('keypress', (e) => {if (e.keyCode === 13 && input.value && inputUrl.value) inputVehabior({input, inputUrl, output, checkbox})})
    btnDelete.addEventListener('click', btnDeleteVehabior)
    // detecta cuando se hace click fuera del selector
    window.addEventListener('click',(e)=>{ if(!selector.contains(e.target) && input.value && inputUrl.value) inputVehabior({input, inputUrl, output, checkbox})})
}

const createIdToSelector = () => {
    const selectors = document.getElementsByClassName('selector')
    const quantity = selectors.length
    
    return {
        selector: `selector${quantity}`, 
        checkbox: `checkbox${quantity}`,
        input:`input${quantity}`,
        inputUrl: `input-url${quantity}`,
        output:`output${quantity}`,
        btnDelete: `btn-delete${quantity}`
    }
}

const createSelector = (id) =>{
    return `
    <div class="selector" id="${id.selector}">
        <input type="checkbox" value="#" class="checkbox" id="${id.checkbox}"> 
        <div class="input-container">
            <input type="text" class="input" id="${id.input}" placeholder="Selector name" >
            <input type="text" class="input" id="${id.inputUrl}" placeholder="Selector url">
        </div>
        <p class="output" id="${id.output}"></p>
        <i class="fas fa-times btn-delete" id="${id.btnDelete}"></i>
    </div>
    `
}