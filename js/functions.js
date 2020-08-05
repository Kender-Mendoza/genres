const createRamdomId = (str1, str2) => {
    let size = str1.length
    let randSize = Math.round(Math.random() * size)
    const piece1 = str1.slice(0, randSize)

    size = str2.length
    randSize = Math.round(Math.random() * size)
    const piece2 = str2.slice(0, randSize)

    size = str1.length + str2.length
    randSize = Math.round(Math.random() * size)

    return `${piece1}${piece2}${randSize}`
}

const getOfStorange = () => {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const storangeElement = localStorage[key]

            const selectorId = createIdToSelector()
            const selector = createSelector(selectorId)
            container.insertAdjacentHTML('beforeend', selector)
            const elements = selectElements(selectorId)
            elements.input.value = storangeElement
            elements.inputUrl.value = key 
            addEventToSelector(elements)
        }
    }
    
}

getOfStorange()