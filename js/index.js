const container = document.getElementById('container')
const btnAdd = document.getElementById('add')
const textArea = document.getElementById('text-area')
const clearTextArea = document.getElementById('clear-text-area')
const copyLinks = document.getElementById('copy-links')
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
        checkboxChecked.forEach((element) => {
            try {
                document.getElementById(element.selectorId).style.backgroundColor = element.selectorBackground
                document.getElementById(element.checkboxId).checked = false    
            } catch (error) {
                console.log(error)
            }
            
        })
        textArea.innerHTML = ''
        checkboxChecked = []
        sessionStorage.clear()
    }
})

copyLinks.addEventListener('click', () => {
    let selection = window.getSelection()

    let range = document.createRange()
    range.selectNode(textArea)
    selection.removeAllRanges(range)
    selection.addRange(range)
    document.execCommand('copy')

    const textAreaLinks = document.getElementsByClassName('text-area-link')
    for (const link of textAreaLinks) link.classList.add('animate')
    setTimeout(() => {
        for (const link of textAreaLinks) link.classList.remove('animate')
    }, 1000)
})