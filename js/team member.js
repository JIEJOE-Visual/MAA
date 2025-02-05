menucontrol.urls = [
    "../../html/MAA_aboutus.html",
    "../../html/MAA_team.html",
    "../../html/MAA_handbook.html",
    "../../html/MAA_joinus.html",
    "../../MAA_home.html",
];
backg_imgs = [];
function mouseicon_show() {
    d3.select(".mouseicon").style("transform", "scale(1)")
    d3.select(".mouse_judgebox").on("mousemove", function () {
        d3.select(".mouseicon")
            .style("left", `${event.clientX}px`)
            .style("top", `${event.clientY}px`)
    })
};
function mouseicon_disapper() {
    d3.select(".mouseicon").style("transform", "scale(0)")
};
d3.select("body").style("height", `${document.getElementsByClassName("maintext-box")[0].offsetHeight}px`)
let textblocks = document.getElementsByClassName("textblock");
let block_now = 0;
let scroll_direction;
window.addEventListener("wheel", function () { scroll_direction = event.wheelDeltaY; })
window.addEventListener("scroll", function () {
    d3.select(".maintext-box")
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .style("transform", `translateY(${-scrollY}px)`);
    for (i = 0; i < textblocks.length; i++) {
        if ((scrollY >= textblocks[i].offsetTop - textblocks[i].offsetHeight / 2 && i > block_now && scroll_direction < 0)
            || (scrollY <= textblocks[i].offsetTop + textblocks[i].offsetHeight && i < block_now && scroll_direction > 0)
        ) {
            block_now = i;
            change_textblock();
        };
    };
});
function change_textblock() {
    d3.select(".background-img")
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .style("opacity", "0")
        .transition()
        .duration(300)
        .ease(d3.easeLinear)
        .style("opacity", "1");
    setTimeout(function () {
        d3.select(".background-img").attr("src", backg_imgs[block_now])
    }, 300)
};
function show() {
    d3.select(".background")
        .transition()
        .duration(1000)
        .ease(d3.easeCubicInOut)
        .style("opacity", "1")
        .style("transform", "scale(1)");
    d3.select(".maintext")
        .transition()
        .duration(1000)
        .ease(d3.easeCubicInOut)
        .style("left", "0%")
        .style("opacity", "1");
};
function disapper() {
    d3.select(".mouseicon")
        .transition()
        .duration(300)
        .ease(d3.easeCubicInOut)
        .style("opacity", "0")
    d3.select(".background")
        .transition()
        .duration(1000)
        .ease(d3.easeCubicInOut)
        .style("opacity", "0")
        .style("transform", "scale(2)");
    d3.select(".maintext")
        .transition()
        .duration(1000)
        .ease(d3.easeCubicInOut)
        .style("left", "10%")
        .style("opacity", "0");
};
function jumppage(e = '../../html/MAA_team.html') {
    menucontrol.menucolmun_diasapp();
    disapper();
    setTimeout(function () {
        location.href = e
    }, 1200)
};
show();
menucontrol.menucolmun_show();