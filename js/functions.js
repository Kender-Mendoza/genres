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

const orderStorange = () => {
    const selectors = []

    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const item = localStorage[key];
            selectors.push({
                name: item,
                url: key
            })
        }
    }

    return selectors.sort((a, b) => (a.name < b.name) ? -1 : 1)
}

const getOfStorange = () => {
    const storange = orderStorange()
    storange.forEach((element) => {
        const selectorId = createIdToSelector()
        const selector = createSelector(selectorId)
        container.insertAdjacentHTML('beforeend', selector)
        const elements = selectElement(selectorId)
        elements.input.value = element.name
        elements.inputUrl.value = element.url
        addEventToSelector(elements)
    })
}

getOfStorange()