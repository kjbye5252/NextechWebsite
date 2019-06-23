var i = 0,
    j = 0;
var txt = 'Keith Bye';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML = txt.substring(0, i) + txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        blink();
    }
}

function blink() {
    j++;
    if (j % 2 == 1) {
        document.getElementById("blinker").style.opacity = 0;
    } else {
        document.getElementById("blinker").style.opacity = 100;
    }
    setTimeout(blink, 500);
}
