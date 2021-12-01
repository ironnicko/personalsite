// function nav
$("nav").on(
    {
        mouseenter : () => $("nav").css("width", "45%"),
        mouseleave : () => $("nav").css("width", "30%"),
    }
)