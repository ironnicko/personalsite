$(document).ready(
    () => {
        $('.loading hidden').remove()
    }
)
var prev;
$(".btn").css(
    {
        "z-index":"1"
    }
)
function openNav() {
    $(".btn").css(
        {
            "z-index":"-1"
        }
    )
    document.getElementById("mySidenav").style.width = "20rem";
    document.getElementById("main").style.marginLeft = "20rem";
    prev = window.getComputedStyle(document.body).getPropertyValue("background-color")
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    $(".btn").css(
        {
            "z-index":"1"
        }
    )
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = prev;
}

var page = document.URL.split("/").slice(-1)[0] || "home";

$("#mLink").html(`${page.toUpperCase()}`)