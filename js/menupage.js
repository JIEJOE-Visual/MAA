const menucontrol = {
    if_pageshow: false,
    url_pointer: 0,
    urls: [
        "MAA_aboutus.html",
        "MAA_team.html",
        "MAA_handbook.html",
        "MAA_joinus.html",
        "../MAA_home.html"
    ],
    change: function (e) {
        this.url_pointer = e;
        d3.selectAll(".menupage-window-imgboxs img")
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("top", `${-e * 100}%`)
    },
    show: function () {
        d3.select(".menupage-window").style("transform", "translateX(0)");
        d3.select("#menupage").transition().duration(500).ease(d3.easeCubicInOut)
            .style("width", "100%");
        d3.select(".menupage-textbox").transition().duration(500).ease(d3.easeCubicInOut)
            .style("opacity", "1");
        d3.select(".menucolmun-button-linebox").classed("menucolmun-button-linebox-on", true);
        d3.select(".menucolmun-button-linebox").classed("menucolmun-button-linebox-off", false);
    },
    disapp: function () {
        menucontrol.change(0);
        d3.select(".menupage-window").style("transform", "");
        d3.select("#menupage").transition().duration(1000).ease(d3.easeCubicInOut)
            .style("width", "0%");
        d3.select(".menupage-textbox").transition().duration(500).ease(d3.easeCubicInOut)
            .style("opacity", "0");
        d3.select(".menucolmun-button-linebox").classed("menucolmun-button-linebox-on", false);
        d3.select(".menucolmun-button-linebox").classed("menucolmun-button-linebox-off", true);
    },
    menucolmun_diasapp: function () {
        d3.select(".menucolmun")
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "0")
    },
    menucolmun_show: function () {
        d3.select(".menucolmun")
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "1")
    },
    switch: function () {
        if (this.if_pageshow) { menucontrol.disapp(); }
        else { menucontrol.show(); }
        this.if_pageshow = !this.if_pageshow;
    },
    jumppage: function (e = this.url_pointer) {
        menucontrol.menucolmun_diasapp();
        d3.select(".menupage-window")
            .style("transform", "scale(0.5)")
            .style("opacity", "0");
        d3.selectAll(".menupage-textbox div")
            .transition()
            .duration(300)
            .ease(d3.easeCubicInOut)
            .delay(function (d, i) {
                return i * 80;
            })
            .style("top", "-5rem")
            .style("opacity", "0")
        setTimeout(() => {
            location.href = this.urls[e];
        }, 1000)
    }
}