    const range = document.querySelectorAll('.range')
    const elementHex = document.querySelector('.hex')
    let r = 0;
    let g = 0;
    let b = 0;
    let string = ["0","0","0"]
    function randomRGB () {
        return Math.floor((Math.random() * 255) + 1)
    }

    function hex(e){
        return parseInt(e).toString(16)
    }

    const randomColor = setInterval(() => {
        const rgb = [randomRGB(),randomRGB(),randomRGB()]
        const convertRGB = rgb.map((e) => hex(e))
        document.body.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]})`
        document.body.style.transition = 'all 1s ease-in-out'
        elementHex.innerText = '#'+convertRGB.join("")
    }, 3000);

    range.forEach(elements => {
        const [element,option] = elements.children
        element.addEventListener('input',function (e) {
            clearInterval(randomColor)
            if (element.id === 'r') {
                r = e.target.value
                string[0] = hex(r)
            }
            if (element.id === 'g') {
                g = e.target.value
                string[1] = hex(g)
            }
            if (element.id === 'b') {
                b = e.target.value
                string[2] = hex(b)
            }
            elementHex.innerText = `#${string.join("")}` 
            option.value = e.target.value
            document.body.style.transition = 'none'
            document.body.style.background = `rgb(${r},${g},${b})`
        })
    });

    elementHex.addEventListener('click',function (e){
        navigator.clipboard.writeText(e.target.innerText)
    })

