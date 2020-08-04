const createRamdomId = (str1, str2) =>{
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