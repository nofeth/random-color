    const range = document.querySelectorAll('.range')
    range.forEach(element => {
        const [elements,option] = element.children
        elements.addEventListener('input',function (e) {
            console.log(e.target.value);
            option.value = e.target.value
            console.log(option.value);
        })
    });


function randomRGB () {
    return Math.floor((Math.random() * 255) + 1)
}
setInterval(() => {
    const rgb = [randomRGB(),randomRGB(),randomRGB()]

    document.body.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]})`
    document.body.style.transition = 'all 2s ease-out'
}, 3000);

