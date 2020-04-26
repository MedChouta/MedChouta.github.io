$(document).ready(function() {
    writeName("Mohammed Chouta")
    AOS.init({
    duration: 1000,
    once: true
    })

    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
})

var i = 0;
function writeName(name) {
    var arName = name.split('')
    var showedName = ""
    var interval = setInterval(function() { // this code is executed every 500 milliseconds:
        showedName += arName[i]
        $(".name").html(showedName + "<span class='block'></span>")
        i++
        
        if(showedName == name){
            clearInterval(interval)
            return 0
        }
    }, 100);
}