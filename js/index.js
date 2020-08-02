const container = document.getElementById('container')
const btnAdd = document.getElementById('add')

btnAdd.addEventListener('click', () => {
    selectorId = createIdToSelector()
    selector = createSelector(selectorId)
    container.insertAdjacentHTML('beforeend', selector)
    addEventToSelector(selectorId)
})
