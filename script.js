function redClicked(clickedBtn) {
    toggleBackground(clickedBtn, 'red');
}

function yellowClicked(clickedBtn) {
    toggleBackground(clickedBtn, 'yellow');
}

function blueClicked(clickedBtn) {
    toggleBackground(clickedBtn, 'blue');
}

function starlightClicked(clickedBtn) {
    toggleBackground(clickedBtn, 'starlight');
}

function midnightClicked(clickedBtn) {
    toggleBackground(clickedBtn, 'midnight');
}

function greenClicked(clickedBtn) {
    toggleBackground(clickedBtn, 'green');
}

function toggleBackground(clickedBtn, color) {

    var buttons = document.querySelectorAll('.red, .yellow, .blue, .starlight, .midnight, .green');


    buttons.forEach(function(button) {

        if(button !== clickedBtn) {
            button.classList.remove('clicked');
        }
    });
    clickedBtn.classList.toggle('clicked');
}





// NEW FUNCTION

function gb128Clicked(clickedButton) {
    toggleBg(clickedButton, 'gb128')
}
function gb256Clicked(clickedButton) {
    toggleBg(clickedButton, 'gb256')
}
function gb512Clicked(clickedButton) {
    toggleBg(clickedButton, 'gb512')
}


// 
function toggleBg(clickedButton, color) {

    var capacity = document.querySelectorAll('.gb128, .gb256, .gb512');


    capacity.forEach(function(capacity) {

        if(capacity !== clickedButton) {
            capacity.classList.remove('clickeds');
        }
    });
    clickedButton.classList.toggle('clickeds');
}