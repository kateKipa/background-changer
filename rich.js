$(document).ready(function() {

    $('#btn').on('click', function() {
        onClickMeClicked()
    })
})

function onClickMeClicked() {
    updateBg()
}

function updateBg() {
    bgColor = getRandomBg()
    showBgColor(bgColor)
}

function getRandomBg() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0','1','2','3','4','5','6','7','8','9']
    const hex = [...letters, ...digits]

    let color = '#'
    for (let i = 1; i <= 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return color
}

function showBgColor(color) {
    $('#clr-hex').text(color)
    $('body').css(`background-color`, `${color}`)
}