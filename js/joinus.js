let scroll_distance = ori_scrolly = 0;
let introduce_page = document.getElementsByClassName("introduce");
const scroll_data = [
    {
        distance: introduce_page[0].offsetTop - introduce_page[0].offsetHeight / 2,
        if_trigger: false,
        nums: 1,
    },
    {
        distance: introduce_page[1].offsetTop - introduce_page[1].offsetHeight / 2,
        if_trigger: false,
        nums: 2,
    },
    {
        distance: introduce_page[2].offsetTop - introduce_page[2].offsetHeight / 2,
        if_trigger: false,
        nums: 3,
    },
    {
        distance: introduce_page[3].offsetTop - introduce_page[3].offsetHeight / 2,
        if_trigger: false,
        nums: 4,
    },
    {
        distance: introduce_page[4].offsetTop - introduce_page[4].offsetHeight / 2,
        if_trigger: false,
        nums: 5,
    },

]
function textshow_animate(e) {
    d3.selectAll(e)
        .transition()
        .duration(300)
        .ease(d3.easeCubicInOut)
        .delay(function (d, i) {
            return i * 100
        })
        .style("transform", "translateY(0)");
}
let introimg3_totaldistance = 0;
let introimg3_ifcanscroll = true;
let cri_cardbox = document.getElementsByClassName("criterion-page")[0];
let _profpage = document.getElementsByClassName("profpage")[0];
let cri_scrolldistance = [0, 0, 0, 0, 0];
let pro_scrolldistance = pro_scrolldistance2 = 0;
let pro_scrollindex = 0;
let cridistance_now = 0;
let cridistance_old;
let prodistance = 0;
let hightall = document.getElementsByClassName("pageall")[0].offsetHeight;
d3.select("body").style("height", `${hightall}px`)
window.addEventListener("scroll", function () {
    d3.select(".pageall")
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .style("transform", `translateY(${-scrollY}px)`)
    scroll_distance = scrollY - ori_scrolly;
    ori_scrolly = scrollY;
    ////////////////////////////////////
    for (i = 0; i < scroll_data.length; i++) {
        if (scrollY >= scroll_data[i].distance && !scroll_data[i].if_trigger) {
            textshow_animate(`.introduce${scroll_data[i].nums}-textline p`)
            scroll_data[i].if_trigger = true;
        };
    }
    if (scrollY >= scroll_data[2].distance && scrollY <= scroll_data[3].distance) {
        if (introimg3_ifcanscroll) {
            if (!introimg3_totaldistance) {
                setTimeout(function () {
                    introimg3_totaldistance = 0;
                    introimg3_ifcanscroll = false;
                    d3.select(".introduce3-img img:nth-child(1)")
                        .transition().duration(300).ease(d3.easeLinear)
                        .style("transform", "translateY(0px)");
                    d3.select(".introduce3-img img:nth-child(2)")
                        .transition().duration(300).ease(d3.easeLinear)
                        .style("transform", "translateY(0px)");
                    setTimeout(function () { introimg3_ifcanscroll = true; }, 300)
                }, 300);
            }
            introimg3_totaldistance += scroll_distance;
            d3.select(".introduce3-img img:nth-child(1)")
                .style("transform", `translateY(${-introimg3_totaldistance / 5}px)`);
            d3.select(".introduce3-img img:nth-child(2)")
                .style("transform", `translateY(${-introimg3_totaldistance / 8}px)`);
        }
    }
    // 进入职位要求卡片滑动监听区间
    if (scrollY >= cri_cardbox.offsetTop && scrollY <= cri_cardbox.offsetTop + cri_cardbox.offsetHeight - window.innerHeight) {
        cridistance_old = cridistance_now;
        cridistance_now = scrollY - cri_cardbox.offsetTop;
        d3.select(".criterion-page")
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style("transform", `translateY(${cridistance_now}px)`)
        for (i = 0; i <= 4; i++) {
            if (scrollY >= cri_cardbox.offsetTop + window.innerHeight * i
                && scrollY <= cri_cardbox.offsetTop + window.innerHeight * (i + 1)) {
                // 更新滑动距离
                cri_scrolldistance[i] += cridistance_now - cridistance_old;
                if (cri_scrolldistance[i] <= 0) { cri_scrolldistance[i] = 0; }
                if (cri_scrolldistance[i] >= window.innerHeight) { cri_scrolldistance[i] = innerHeight; }
                if (i > 0) {
                    cri_scrolldistance[i - 1] = innerHeight;
                    d3.select(`.criterion-card-move${i}`).style("transform", "translateY(0%)");
                }
                if (i < 4) {
                    cri_scrolldistance[i + 1] = 0;
                    d3.select(`.criterion-card-move${i + 2}`).style("transform", "translateY(100%)");
                }
                // 进行滑动距离换算并移动卡片
                let distancey = cri_scrolldistance[i] / window.innerHeight * 100;
                d3.selectAll(`.criterion-card-move${i + 1}`)
                    .style("transform", `translateY(${100 - distancey}%)`)
            }
        }
    };
    if (scrollY >= cri_cardbox.offsetTop && scrollY <= cri_cardbox.offsetTop + cri_cardbox.offsetHeight) {
        d3.select('.menucolmun').classed('menucolmun-whitebackg', true);
    }
    else {
        d3.select('.menucolmun').classed('menucolmun-whitebackg', false);
    }
    // 进入职位介绍卡片滚动监听区间
    if (scrollY >= _profpage.offsetTop) {
        prodistance += scroll_distance
        d3.select(".profpage")
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style("transform", `translateY(${prodistance}px)`)
        pro_scrolldistance += scroll_distance;
        pro_scrolldistance2 += scroll_distance;
        d3.selectAll(".profpage-left-messagebox")
            .style("transform", `translateY(${-pro_scrolldistance}px)`);
        d3.selectAll(".profpage-right-cardbox")
            .style("transform", `translateY(${-window.innerHeight * pro_scrollindex - pro_scrolldistance2 / 10}px)`);
        for (i = 0; i <= 3; i++) {
            if (pro_scrolldistance >= _profpage.offsetHeight / 4 * i
                && pro_scrolldistance <= _profpage.offsetHeight / 4 * (i + 1)) {
                if (pro_scrollindex != i) {
                    pro_scrollindex = i;
                    pro_scrolldistance2 = 0;
                }
            }
        }
    }
    else {
        pro_scrolldistance = pro_scrolldistance2 = 0;
        prodistance = 0
        d3.select(".profpage")
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style("transform", `translateY(${0}px)`)
        d3.selectAll(".profpage-left-messagebox").style("transform", "translateY(0)");
        d3.selectAll(".profpage-left-cardbox").style("transform", "translateY(0)");
    }
});
/////////////////////////////////
function show() {
    d3.select(".welcomepage-main-img")
        .transition()
        .duration(800)
        .ease(d3.easeLinear)
        .style("opacity", "1")
        .style("left", "0%");
    d3.selectAll(".welcomepage-main-text div:nth-child(1) p")
        .transition()
        .duration(800)
        .ease(d3.easeCubicInOut)
        .delay(function (d, i) {
            return i * 100
        })
        .style("top", "0rem");
    d3.select(".welcomepage-main-text div:nth-child(2)")
        .transition()
        .duration(1000)
        .ease(d3.easeCubicInOut)
        .style("transform", "scaleX(1)")
        .on("end", function () {
            d3.select(".welcomepage-scrolltip")
                .transition()
                .duration(500)
                .ease(d3.easeLinear)
                .style("opacity", "1");
        });
}
function disapp() {
    d3.select("body")
        .transition()
        .duration(800)
        .ease(d3.easeCubicInOut)
        .style("opacity", "0");
}
setTimeout(function () {
    menucontrol.menucolmun_show();
    show();
}, 500)