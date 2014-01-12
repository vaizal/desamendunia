// SEARCH INPUT //
$(".input-search").focus(function() {
    $(this).attr("value", "");
}).blur(function() {
    $(this).attr("value", "Search..");
});

// SOCIAL MEDIA ICON //
$(".social-media > a").mouseenter(function() {
    $(this).children().first().css("visibility", "visible");
}).mouseleave(function() {
    $(this).children().first().css("visibility", "hidden");
});

// AFFIX SCROLLING//
$(".navbar-desa-mendunia").affix({
    offset: {
        top: 213
    }
});

// CAROUSEL //
$(".wrap-carousel").mouseenter(function() {
    $(".wid-control").css("visibility", "visible");
}).mouseleave(function() {
    $(".wid-control").css("visibility", "hidden");
});

$('#wid-carousel').carouFredSel({
    prev: "#prev",
    next: "#next",
    scroll: {
        pauseOnHover: "immediate"
    },
    auto: {
        timeoutDuration: 5 * 2500
    }
});
