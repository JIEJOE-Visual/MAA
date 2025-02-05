const TVanimate = {
    animate_timer: '',
    _teamc: d3.select(".screenin"),
    _teamc_movy: 0,
    tvline_counter: 0,
    screenshake: function () {
        d3.select(".tvb-screen").style("display", "flex");
        update_screenscale();
        d3.select(".screenin").style("filter", "grayscale(0)");
        d3.selectAll(".screenin-name div , .screenin-name div").classed("faulttext-select2", true);
        d3.selectAll(".scre-por-ori").style("mix-blend-mode", "darken")
        d3.selectAll(".scre-por-shake").style("mix-blend-mode", "lighten")
            .style("filter", function (d, i) {
                return `url(#fillcolor${i})`
            });
        faultshake(".screenin-name div");
        faultshake(".screenin-id div");
        faultshake(".scre-por-shake");
        TVanimate._teamc.style("transform", function () {
            return `translate(
                ${d3.randomUniform(-100, 100)()}px,
                ${d3.randomUniform(-100, 100)()}px
            )`
        });
    },
    faulttext: function () {
        TVdatas.changedata();
        TVanimate._teamc.style("display", "none");
        d3.select(".faulttext-box").style("display", "flex");
        d3.select(".screenin").style("filter", "grayscale(1)");
        d3.selectAll(".screenin-portrait , .screenin-name div , .screenin-id div")
            .style("mix-blend-mode", "none")
            .style("filter", "")
            .style("transform", "")
            .style("clip-path", "")
            .classed("faulttext-select2", false);
        d3.selectAll(".faulttext").classed("faulttext-select", true);
        faultshake(".faulttext");
    },
    textshake: function () {
        d3.selectAll(".faulttext")
            .style("transform", "")
            .style("clip-path", "")
            .classed("faulttext-select", false);
        d3.selectAll(".faulttext")
            .style("transform", function () {
                return `translate(
                ${d3.randomUniform(-3, 3)()}px,
                ${d3.randomUniform(-3, 3)()}px
            )`
            })
            .style("color", function (d, i) {
                let color;
                if (i == 0) { color = 'black' }
                else if (i == 1) { color = 'red' }
                else if (i == 2) { color = 'blue' }
                else if (i == 3) { color = 'green' }
                return color;
            });
    },
    tvwave: function () {
        TVanimate.tvline_counter++;
        d3.select(".faulttext-box").style("display", "none");
        d3.select(".faultlinebox").style("display", "flex");
        TVanimate._teamc.style("display", "flex");
        rect = d3.select(".faultlinebox").append('rect');
        rect.attr("x", 0)
            .attr("y", -50)
            .attr('fill', "black")
            .attr("width", '900')
            .attr("height", "100")
            .style("opacity", "0.5");
        rect.transition().duration(500).ease(d3.easeLinear)
            .delay(TVanimate.tvline_counter * 100).attr("y", "637").remove();
        if (TVanimate._teamc_movy > 250) {
            TVanimate._teamc_movy = -350;
        }
        else {
            TVanimate._teamc_movy += 100
        };
        TVanimate._teamc.style("transform", `translateY(${TVanimate._teamc_movy}px)`);
    },
    nosign: function () {
        d3.select(".nosign").style("display", "flex");
        d3.select("#wave feTurbulence")
            .attr("baseFrequency", "0 1")
            .attr("seed", `${d3.randomUniform(0, 100)()}`);
        d3.select("#wave feDisplacementMap")
            .attr("scale", `${d3.randomUniform(30, 40)()}`);
    },
    screenline: function () {
        d3.select(".nosign").style("display", "none");
        TVanimate._teamc
            .style("filter", "grayscale(1) url(#wave)")
            .style("transform", function () {
                return `translate(
                ${d3.randomUniform(-100, 100)()}px,
                ${d3.randomUniform(-100, 100)()}px
            )`
            });
    },
    removstyle: function () {
        TVanimate.tvline_counter = 0;
        clearInterval(TVanimate.animate_timer);
        d3.select(".faultlinebox").style("display", "none");
        d3.select(".nosign").style("display", "none");
        TVanimate._teamc.style("transform", "").style("filter", "");
    },
}
function faultshake(e) {
    d3.selectAll(e)
        .style("transform", function () {
            return `translate(
            ${d3.randomUniform(-30, 30)()}%,
            ${d3.randomUniform(-30, 30)()}%)`;
        })
        .style("clip-path", function () {
            x = d3.randomUniform(0, 100)();
            y = d3.randomUniform(0, 100)();
            h = d3.randomUniform(50, 100)();
            w = d3.randomUniform(10, 50)();
            return `polygon(
        ${x}% ${y}%, 
        ${x + w}% ${y}%,
        ${x + w}% ${y + h}%, 
        ${x}% ${y + h}%)`;
        });
}
const animates = [
    { name: TVanimate.screenshake, time: 300 },
    { name: TVanimate.faulttext, time: 300 },
    { name: TVanimate.textshake, time: 400 },
    { name: TVanimate.faulttext, time: 200 },
    { name: TVanimate.tvwave, time: 400 },
    { name: TVanimate.nosign, time: 300 },
    { name: TVanimate.screenline, time: 300 },
    { name: TVanimate.removstyle, time: 300 }
];
var timeouts = new Array();
function animate_player() {
    TVanimate.animate_timer = setInterval(TVanimate.screenshake, 30);
    let time = 0;
    for (i = 1; i < animates.length; i++) {
        time += animates[i - 1].time;
        let fun = animates[i].name;
        var a = setTimeout(function () {
            clearInterval(TVanimate.animate_timer);
            TVanimate.animate_timer = setInterval(fun, 30);
        }, time);
        timeouts.push(a)
    }
}
const TVdatas = {
    nowscreen: 0,
    screens: [
        {
            img: '../img/team/TM_0213.webp',
            name: '后羿',
            id: 'no.0213',
            src: '../html/team member/TM_0213.html'
        },
        {
            img: '../img/team/TM_0215.webp',
            name: '刑天',
            id: 'no.0215',
            src: '../html/team member/TM_0215.html'
        },
        {
            img: '../img/team/TM_0216.webp',
            name: '神农',
            id: 'no.0216',
            src: '../html/team member/TM_0216.html'
        },
        {
            img: '../img/team/TM_0217.webp',
            name: '庄周',
            id: 'no.0217',
            src: '../html/team member/TM_0217.html'
        }, {
            img: '../img/team/TM_0218.webp',
            name: '精卫',
            id: 'no.0218',
            src: '../html/team member/TM_0218.html'
        }, {
            img: '../img/team/TM_0219.webp',
            name: '哪吒',
            id: 'no.0219',
            src: '../html/team member/TM_0219.html'
        }, {
            img: '../img/team/TM_0220.webp',
            name: '杨戬',
            id: 'no.0220',
            src: '../html/team member/TM_0220.html'
        }, {
            img: '../img/team/TM_0221.webp',
            name: '祝融',
            id: 'no.0221',
            src: '../html/team member/TM_0221.html'
        }, {
            img: '../img/team/TM_0222.webp',
            name: '共工',
            id: 'no.0222',
            src: '../html/team member/TM_0222.html'
        }, {
            img: '../img/team/TM_0223.webp',
            name: '炎帝',
            id: 'no.0223',
            src: '../html/team member/TM_0223.html'
        }, {
            img: '../img/team/TM_0224.webp',
            name: '风伯',
            id: 'no.0224',
            src: '../html/team member/TM_0224.html'
        },
    ],
    changedata: function () {
        d3.selectAll(".screenin-name div").text(TVdatas.screens[TVdatas.nowscreen].name)
            .attr("data-text", TVdatas.screens[TVdatas.nowscreen].name);
        d3.selectAll(".screenin-id div").text(TVdatas.screens[TVdatas.nowscreen].id)
            .attr("data-text", TVdatas.screens[TVdatas.nowscreen].id);
        d3.selectAll(".screenin-portrait").attr("src", TVdatas.screens[TVdatas.nowscreen].img)
        d3.selectAll(".faulttext").text(TVdatas.screens[TVdatas.nowscreen].id)
            .attr("data-text", TVdatas.screens[TVdatas.nowscreen].id);
    }
}
function restart_screen() {
    clearInterval(TVanimate.animate_timer);
    for (i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    d3.select(".faulttext-box").style("display", "none");
    d3.select(".nosign").style("display", "none");
    d3.select(".faultlinebox").style("display", "none");
    TVanimate._teamc.style("display", "flex")
    TVanimate._teamc.style("transform", "").style("filter", "");
}
function screen_change(e) {
    TVdatas.nowscreen += e;
    if (TVdatas.nowscreen >= TVdatas.screens.length) {
        TVdatas.nowscreen = 0;
    }
    if (TVdatas.nowscreen < 0) {
        TVdatas.nowscreen = TVdatas.screens.length - 1;
    }
    let classblock;
    if (e == 1) { classblock = 'up'; }
    else { classblock = 'down'; }
    d3.select(`.tvbotton-knob-${classblock}`)
        .transition().duration(100).ease(d3.easeCubicInOut)
        .attr("transform", "translate(-5,5)")
        .transition().duration(100).ease(d3.easeCubicInOut)
        .attr("transform", "")
    d3.select(`.tvbotton-knobchassis-${classblock}`)
        .transition().duration(100).ease(d3.easeCubicInOut)
        .attr("transform", "scale(0.9)")
        .transition().duration(100).ease(d3.easeCubicInOut)
        .attr("transform", "")
    restart_screen();
    animate_player()
}
const TVcontroler = {
    zoom_timer: '',
    wave_timer: '',
    scroll_timer: '',
    scroll_distance: 0,
    ori_distance: 0,
    if_inscreen: false,
    if_scroll_timer: false,
    if_inout_screen: true,
    scroll_speed: '',
    into_screenview: function () {
        TVcontroler.scroll_distance = 0;
        TVcontroler.if_inscreen = true;
        d3.select('.menucolmun').classed('menucolmun-whitebackg', true);
        d3.select(".scrolltext").classed("scrolltext-inscreen", true);
        d3.select(".tvb-screen").transition().duration(100).ease(d3.easeLinear).style("opacity", "0")
            .transition(0).style("display", "none");
        d3.select("#tvbox").transition().duration(1000).ease(d3.easeLinear).style("transform", `scale(5)`)
            .transition(0).style("display", "none");
        d3.select("#teamcards_page").style("display", "flex")
            .transition().duration(1000).ease(d3.easeLinear).style("opacity", "1");
        d3.selectAll(".teamcard-linebox-line")
            .transition().duration(800).ease(d3.easeCubicInOut)
            .delay(function (d, i) { return i * 200; })
            .style("transform", "scale(1)").style("opacity", "1");
        setTimeout(function () { TVcontroler.if_inout_screen = true; }, 2000)
    },
    out_screenview: function () {
        TVcontroler.scroll_distance = 0;
        TVcontroler.ori_distance = 0;
        TVcontroler.if_inscreen = false;
        d3.select('.menucolmun').classed('menucolmun-whitebackg', false);
        d3.select(".scrolltext").classed("scrolltext-inscreen", false);
        d3.select("#tvbox").style("display", "flex")
            .transition().duration(800).ease(d3.easeCubicInOut)
            .style("transform", `scale(1)`)
        d3.select("#teamcards_page")
            .transition().duration(500).ease(d3.easeCubicInOut).style("opacity", "0")
            .transition(0).style("display", "none");
        setTimeout(function () {
            animate_player();
            d3.select(".tvb-screen").style("display", "flex").style("opacity", "1");
            d3.selectAll(".teamcard-linebox-line").style("transform", "").style("opacity", "");
            d3.select("#teamcard-linebox").style("transform", "");
            d3.selectAll(".teamcard-linebox-line").style("top", "")
            clearInterval(TVcontroler.scroll_timer)
        }, 900);
        setTimeout(function () { TVcontroler.if_inout_screen = true; }, 1200)
    },
    zoom_tv: function () {
        if (event.wheelDelta > 0 && !TVcontroler.if_inscreen) {
            TVcontroler.scroll_distance += 0.05;
            if (TVcontroler.scroll_distance >= 0.15 && TVcontroler.if_inout_screen) {
                d3.select("#tvbox").style("filter", "");
                clearTimeout(TVcontroler.zoom_timer);
                clearInterval(TVcontroler.wave_timer);
                TVcontroler.if_inout_screen = false;
                TVcontroler.into_screenview()
            }
            else {
                clearTimeout(TVcontroler.zoom_timer);
                d3.select("#backg img").transition().duration(300).ease(d3.easeLinear)
                    .style("transform", `scale(${1 + TVcontroler.scroll_distance / 2})`);
                d3.select("#platform").transition().duration(300).ease(d3.easeLinear)
                    .style("transform", `scale(${1 + TVcontroler.scroll_distance / 3})`);
                d3.select("#tvbox").transition().duration(300).ease(d3.easeLinear)
                    .style("transform", `scale(${1 + TVcontroler.scroll_distance / 3})`);
                d3.select("#tvbox").style("filter", "url('#wave2')");
                TVcontroler.wave_timer = setInterval(function () {
                    d3.select("#wave2 feTurbulence").attr("seed", `${d3.randomUniform(0, 100)()}`)
                }, 30)
                TVcontroler.zoom_timer = setTimeout(function () {
                    TVcontroler.scroll_distance = 0;
                    d3.select("#backg img").transition().duration(500).ease(d3.easeLinear).style("transform", "");
                    d3.select("#platform").transition().duration(500).ease(d3.easeLinear).style("transform", "");
                    d3.select("#tvbox").transition().duration(500).ease(d3.easeLinear).style("transform", "");
                    clearInterval(TVcontroler.wave_timer);
                    d3.select("#tvbox").style("filter", "");
                }, 500)
            }
        }
    },
    zoom_screen: function () {
        if (event.wheelDelta < 0 && TVcontroler.if_inscreen) {
            clearInterval(TVcontroler.scroll_timer);
            if (TVcontroler.scroll_distance <= -0.2) { TVcontroler.scroll_distance = -0.4 }
            else { TVcontroler.scroll_distance -= 0.08; }
            if (TVcontroler.scroll_distance == -0.4 && TVcontroler.if_inout_screen) {
                d3.select("#teamcard-linebox").style("filter", "");
                clearTimeout(TVcontroler.zoom_timer);
                clearInterval(TVcontroler.wave_timer);
                TVcontroler.out_screenview();
                TVcontroler.if_inout_screen = false;
            }
            else {
                d3.select("#teamcard-linebox").style("filter", "url(#wave3)")
                    .transition().duration(100).ease(d3.easeLinear)
                    .style("transform", `scale(${1 + TVcontroler.scroll_distance / 1.5})`);
                TVcontroler.wave_timer = setInterval(function () {
                    d3.select("#wave3 feTurbulence").attr("seed", `${d3.randomUniform(0, 100)()}`)
                }, 30)
                clearTimeout(TVcontroler.zoom_timer);
                TVcontroler.zoom_timer = setTimeout(function () {
                    clearInterval(TVcontroler.wave_timer)
                    TVcontroler.scroll_distance = 0;
                    d3.select("#teamcard-linebox").style("filter", "")
                        .transition().duration(500).ease(d3.easeLinear).style("transform", "");
                }, 500)
            }
        }
    },
    screen_scroll: function () {
        let maxdistance = document.getElementById("teamcard-linebox").offsetHeight - window.innerHeight
        if (event.clientY >= 0 && event.clientY <= window.innerHeight / 6) {
            TVcontroler.scroll_speed = 6;
        }
        else if (event.clientY >= window.innerHeight / 6 && event.clientY <= window.innerHeight / 6 * 2) {
            TVcontroler.scroll_speed = 3;
        }
        else if (event.clientY >= window.innerHeight / 6 * 4 && event.clientY <= window.innerHeight / 6 * 5) {
            TVcontroler.scroll_speed = -3;
        }
        else if (event.clientY >= window.innerHeight / 6 * 5 && event.clientY <= window.innerHeight) {
            TVcontroler.scroll_speed = -6;
        }
        else { TVcontroler.scroll_speed = 0; clearInterval(TVcontroler.scroll_timer); TVcontroler.if_scroll_timer = false }
        if (TVcontroler.scroll_speed != 0 && !TVcontroler.if_scroll_timer) {
            TVcontroler.if_scroll_timer = true;
            TVcontroler.scroll_timer = setInterval(function () {
                TVcontroler.ori_distance += TVcontroler.scroll_speed;
                if (TVcontroler.ori_distance > 0) { TVcontroler.ori_distance = 0; }
                else if (TVcontroler.ori_distance <= -maxdistance) { TVcontroler.ori_distance = -maxdistance; }
                console.log(TVcontroler.ori_distance);
                d3.selectAll(".teamcard-linebox-line").style("top", `${TVcontroler.ori_distance}px`)
            }, 30)
        }
    }
};
const tvicon = {
    tips_old: '',
    tips_now: 0,
    timer: '',
    tips: [
        {
            class: ".tvicon-tipline-buttonup",
            text: "点击按钮到上一个频道",
            fill: ".tvicon-buttonup path:nth-child(2)"
        },
        {
            class: ".tvicon-tipline-buttondown",
            text: "点击按钮到下一个频道",
            fill: ".tvicon-buttondown path:nth-child(2)"
        },
        {
            class: ".tvicon-tipline-screen",
            text: "点击屏幕查看队员资料",
        },
    ],
    tipline_show: function (e) {
        let trans = d3.transition().duration(200).ease(d3.easeCubicInOut);
        d3.select(`${e} circle:nth-child(1)`)
            .transition(trans)
            .attr("r", "13.2");
        d3.select(`${e} polyline`)
            .transition(trans)
            .delay(100)
            .style("stroke-dashoffset", "0");
        d3.select(`${e} circle:nth-child(2)`)
            .transition(trans)
            .delay(200)
            .attr("r", "13.2");
    },
    tipline_disapper: function (e) {
        let trans = d3.transition().duration(200).ease(d3.easeCubicInOut);
        d3.select(`${e} circle:nth-child(2)`)
            .transition(trans)
            .attr("r", "0");
        d3.select(`${e} polyline`)
            .transition(trans)
            .delay(100)
            .style("stroke-dashoffset", "200");
        d3.select(`${e} circle:nth-child(1)`)
            .transition(trans)
            .delay(100)
            .attr("r", "0");
    },
    tip_show: function (e = -1) {
        if (tvicon.tips_now != e) {
            tvicon.tips_old = tvicon.tips_now;
            if (e == -1) { tvicon.tips_now++; }
            else { tvicon.tips_now = e; }
            if (tvicon.tips_now >= 3) { tvicon.tips_now = 0; }
            let obj_old = tvicon.tips[tvicon.tips_old];
            let obj_now = tvicon.tips[tvicon.tips_now];
            tvicon.tipline_disapper(obj_old.class);
            if (obj_old.fill) {
                d3.select(obj_old.fill)
                    .transition(300)
                    .style("fill", "rgba(255, 255, 255, 0)");
            };
            tvicon.tipline_show(obj_now.class);
            if (obj_now.fill) {
                d3.select(obj_now.fill)
                    .transition(300)
                    .style("fill", "white");
            };
            d3.select(".tvicon text").text(obj_now.text);
        }
    },
    timer_on() {
        tvicon.timer = setInterval(function () {
            tvicon.tip_show();
        }, 3000)
    },
    timer_off() { clearInterval(tvicon.timer); }
};
function init_animate() {
    let trans = d3.transition().duration(50).ease(d3.easeLinear);
    d3.select("#backg")
        .transition(trans).style("opacity", "1")
        .transition(trans).style("opacity", "0")
        .transition(trans).style("opacity", "1")
        .transition(trans).style("opacity", "0")
        .transition(trans).style("opacity", "1")
    d3.select(".tviconbox").transition().duration(1000).ease(d3.easeLinear)
        .style("opacity", "1");
    setTimeout(function () {
        d3.select("#platform").transition().duration(1000).ease(d3.easeLinear)
            .style("transform", "scale(1)");
        d3.select("#backg").transition().duration(1000).ease(d3.easeLinear)
            .style("transform", "scale(1)").style("background-color", "#14001f");
        d3.select("#backg img").transition().duration(1000).ease(d3.easeLinear)
            .style("transform", "scale(1)").style("opacity", "0.15");
        d3.select("#tvbox").transition().duration(1000).ease(d3.easeLinear)
            .style("transform", "translateY(0)")
        d3.selectAll("#platform div").style("transform", "rotateX(90deg)")
    }, 800)
    setTimeout(function () {
        window.addEventListener("wheel", TVcontroler.zoom_tv);
        window.addEventListener("wheel", TVcontroler.zoom_screen);
        animate_player();
    }, 2000)
}
function jumppage_tv(e) {
    d3.select(".tvb-screen").transition().duration(50).ease(d3.easeCubicInOut)
        .style("transform", "scaleY(0.01) scaleX(1.5)")
        .transition().duration(50).ease(d3.easeCubicInOut)
        .style("opacity", "0").style("transform", "scaleY(0) scaleX(1.6)");
    d3.select(".blackscreen").style("display", "flex")
        .transition().duration(400).ease(d3.easeLinear)
        .style("opacity", "1").style("background-color", "#1b012a")
        .transition().duration(600).ease(d3.easeLinear)
        .style("background-color", "#2d0245");
    menucontrol.menucolmun_diasapp();
    setTimeout(function () {
        let url;
        if (e != -1) { url = TVdatas.screens[e].src }
        else { url = '../MAA_home.html' }
        location.href = url;
    }, 1000)
}
function jumppage_screen(e) {
    d3.selectAll(".teamcard-linebox-line")
        .transition().duration(300).ease(d3.easeCubicInOut)
        .delay(function (d, i) { return i * 100; })
        .style("transform", "scale(0.8)").style("opacity", "0");
    d3.select("#teamcards_page")
        .transition().duration(800).ease(d3.easeLinear).delay(200)
        .style("background-color", "#2d0245");
    menucontrol.menucolmun_diasapp();
    setTimeout(function () {
        let url;
        if (e != -1) { url = TVdatas.screens[e].src }
        else { url = '../MAA_home.html' }
        location.href = url;
    }, 1200)
}
function logojump_judge() {
    if (menucontrol.if_pageshow) { menucontrol.jumppage(4); }
    else {
        if (TVcontroler.if_inout_screen) {
            jumppage_tv(-1);
        }
        else {
            jumppage_screen(-1);
        }
    }
};
function update_screenscale() {
    let reference_width = document.querySelector(".tvb-tvbody img").offsetWidth;
    let scale = 1.041;
    let comput_width = reference_width * scale;
    let actually_width = document.querySelector(".tvb-scr-main").offsetWidth;
    scale_nums = parseFloat(comput_width / actually_width);
    d3.select(".tvb-scr-main").style("transform", `scale(${scale_nums})`);
    d3.select(".click_judgebox").style("transform", `scale(${scale_nums})`);
    d3.select(".faultlinebox").style("transform", `scale(${1/scale_nums })`);
};
window.addEventListener("resize", update_screenscale);
window.addEventListener("mousemove", function () {
    d3.select(".scrolltext")
        .style("display", "flex")
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .style("left", `${event.clientX}px`)
        .style("top", `${event.clientY}px`)
})
init_animate();
tvicon.timer_on();
menucontrol.menucolmun_show();