$(document).ready(function() {

    $('#btn').on('click', function() {
        onClickMeClicked()
    })
})

function onClickMeClicked() {
    updateBg()
}

function updateBg() {
    bgColor = getBgColor()
    showBgColor(bgColor)
}

function getBgColor() {
    const colors = ['red', 'white', 'black', 'green', 'blue', 'yellow']
    return colors[Math.floor(Math.random() * colors.length)]
}

function showBgColor(color) {
    $('#clr-hex').html(color)
    $('body').css(`background-color`, `${color}`)
}

