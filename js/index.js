const container = document.getElementById('container')
const btnAdd = document.getElementById('add')
const textArea = document.getElementById('text-area')

btnAdd.addEventListener('click', () => {
    const selectorId = createIdToSelector()
    const selector = createSelector(selectorId)
    container.insertAdjacentHTML('beforeend', selector)
    const elements = selectElements(selectorId)
    addEventToSelector(elements)
})
