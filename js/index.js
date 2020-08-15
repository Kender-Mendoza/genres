const container = document.getElementById('container')
const btnAdd = document.getElementById('add')
const textArea = document.getElementById('text-area')
const clearTextArea = document.getElementById('clear-text-area')
let checkboxChecked = []

btnAdd.addEventListener('click', () => {
    const selectorId = createIdToSelector()
    const selector = createSelector(selectorId)
    container.insertAdjacentHTML('beforeend', selector)
    const elements = selectElements(selectorId)
    addEventToSelector(elements)
})

clearTextArea.addEventListener('click', () => {
    if (checkboxChecked.length > 0) {
        checkboxChecked.forEach((element) => document.getElementById(element).checked = false)
        textArea.innerHTML = ''
        checkboxChecked = []
    }
})