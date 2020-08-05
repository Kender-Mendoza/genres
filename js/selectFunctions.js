const checkboxVehabior = (element) => {
    if (element.checkbox.checked) {
        const id = createRamdomId(element.input.value, element.inputUrl.value)
        const link = `<a href="${element.inputUrl.value}" id="${id}">${element.input.value}</a> `
        textArea.innerHTML += link
        element.checkbox.value = id
    } else {
        textArea.removeChild(document.getElementById(element.checkbox.value))
    }
}

const inputVehabior = (element) => {
    element.output.style.width = element.input.value ? 'auto' : '100px'
    element.output.innerHTML = element.input.value
    element.input.style.display = 'none'
    element.inputUrl.style.display = 'none'
    element.output.style.display = 'inline-block'

    localStorage.setItem(element.inputUrl.value, element.input.value)
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

const btnDeleteVehabior = (element) => {
    container.removeChild(element.selector)

    localStorage.removeItem(element.inputUrl.value)
    
    element.input.value = ''
    element.inputUrl.value = ''
}

const selectElements = (id) => {
    return {
        selector: document.getElementById(id.selector),
        checkbox: document.getElementById(id.checkbox),
        input: document.getElementById(id.input),
        inputUrl: document.getElementById(id.inputUrl),
        output: document.getElementById(id.output),
        btnDelete: document.getElementById(id.btnDelete)
    }
}

const addEventToSelector = (element) => {
    element.output.addEventListener('click', () => {
        outputVehabior({
            input: element.input,
            inputUrl: element.inputUrl,
            output: element.output
        })
    })
    
    // Solo cuando se precione la tecla de enter
    element.input.addEventListener('keypress', (e) => {
        if (e.keyCode === 13 && element.input.value && element.inputUrl.value) {
            inputVehabior({
                input: element.input,
                inputUrl: element.inputUrl,
                output: element.output
            })
        }
    })

    element.inputUrl.addEventListener('keypress', (e) => {
        if (e.keyCode === 13 && element.input.value && element.inputUrl.value) {
            inputVehabior({
                input: element.input,
                inputUrl: element.inputUrl,
                output: element.output
            })
        }
    })
    
    element.btnDelete.addEventListener('click', ()=>{
        btnDeleteVehabior({
            input: element.input,
            inputUrl: element.inputUrl,
            selector: element.selector
        })
    })
    
    // detecta cuando se hace click fuera del selector
    window.addEventListener('click', (e) => {
        if (!element.selector.contains(e.target) && element.input.value && element.inputUrl.value){
            inputVehabior({
                input: element.input,
                inputUrl: element.inputUrl,
                output: element.output
            })
        }
    })

    element.checkbox.addEventListener('click', () => {
        if (element.input.value && element.inputUrl.value) {
            checkboxVehabior({
                input: element.input,
                inputUrl: element.inputUrl,
                checkbox: element.checkbox
            })
        }
    })
}

const createIdToSelector = () => {
    const selectors = document.getElementsByClassName('selector')
    const quantity = selectors.length

    return {
        selector: `selector${quantity}`,
        checkbox: `checkbox${quantity}`,
        input: `input${quantity}`,
        inputUrl: `input-url${quantity}`,
        output: `output${quantity}`,
        btnDelete: `btn-delete${quantity}`
    }
}

const createSelector = (id) => {
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