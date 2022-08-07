    function randomRGB () {
        return Math.floor((Math.random() * 255) + 1)
    }
const randomColor = setInterval(() => {
        const rgb = [randomRGB(),randomRGB(),randomRGB()]
        document.body.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]})`
        document.body.style.transition = 'all 2s ease-out'
    }, 3000);

    const range = document.querySelectorAll('.range')
    let r = 0;
    let g = 0;
    let b = 0;
    range.forEach(elements => {
        const [element,option] = elements.children
        element.addEventListener('input',function (e) {
            clearInterval(randomColor)
            if (element.id === 'r') r = e.target.value
            if (element.id === 'g') g = e.target.value
            if (element.id === 'b') b = e.target.value
            option.value = e.target.value
            document.body.style.transition = 'none'
            document.body.style.background = `rgb(${r},${g},${b})`
        })
    });


