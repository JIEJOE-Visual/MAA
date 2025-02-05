const feettext = {
    alltexts: document.querySelectorAll("#feettext p"),
    tbox: [
        document.querySelectorAll(".ft-tbox0 p"),
        document.querySelectorAll(".ft-tbox1 p"),
        document.querySelectorAll(".ft-tbox2 p"),
    ],
    tbox_conter: [
        [0, 1],
        [0, 1],
        [0, 1],
    ],
    changetext: function (e) {
        for (i = 0; i < this.alltexts.length; i++) {
            this.alltexts[i].textContent = e.feettexts[i];
        }
    },
    show: function () {
        d3.select("#feettext").transition().duration(1000).ease(d3.easeCubicInOut)
            .style("bottom", "0%").style("opacity", "1");
    },
    disappear: function () {
        d3.select("#feettext").transition().duration(1000).ease(d3.easeCubicInOut)
            .style("bottom", "-1%").style("opacity", "0");
    },
}
const pageh = {
    selfpage: d3.select("#homepage"),
    href: 'html/MAA_aboutus.html',
    showtime: 4000,
    disappeartime: 1200,
    feettexts: [
        "hi! here is",
        "你好，这里是",
        "Mythical Animals Authority",
        "神兽管理局·中国分局",
        "IN CHINA.",
        "欢迎你的到来",
    ],
    show: function () {
        var trans_time = d3.transition(1).duration(4000).ease(d3.easeLinear);
        d3.select(".hp-backg img ").transition(trans_time).style("opacity", "0.15");
        d3.select(".hp-sun-in").transition(trans_time)
            .style("opacity", "1").style("transform", "scale(1)");
        d3.select(".hp-sun-middle").transition(trans_time)
            .style("opacity", "0.4").style("transform", "scale(1)");
        d3.select(".hp-sun-out").transition().duration(800).ease(d3.easeLinear).style("opacity", "0.6")
            .transition().duration(3200).ease(d3.easeLinear).style("opacity", "0.5");
        d3.select(".hp-sun-edge").transition(trans_time).style("opacity", "0.05");
        d3.selectAll(".hp-cloud svg").transition().duration(2400).ease(d3.easeLinear).style("stroke-dashoffset", "0")
            .transition().duration(600).ease(d3.easeLinear).style("fill", "rgba(255, 255, 255, 1)");
        d3.selectAll(".hp-text-up p").style("transform", "translateY(0)");
        setTimeout(function () {
            d3.selectAll(".hp-text-up p").style("transform", "translateY(-100%)");
            d3.selectAll(".hp-text-up>div").style("transform", "translateY(-100%)");
            setTimeout(function () {
                d3.select(".hp-text").style("transform", "scale(2)");
                d3.selectAll(".hp-text-up>div div").style("width", "0");
                d3.selectAll(".hp-text-down p").style("transform", "translateY(0)");
                d3.selectAll(".hp-cloudline svg").transition().duration(2000).ease(d3.easeLinear).style("opacity", "0.8");
                setTimeout(function () {
                    d3.selectAll(".hp-text-up p").style("transform", "translateY(-200%)");
                    d3.selectAll(".hp-text-up>div").style("transform", "translateY(-200%)");
                    d3.selectAll(".hp-text-down p").style("transform", "translateY(-100%)");
                    // d3.selectAll(".hp-cloud svg:nth-child(1)").style("animation", "cloud_mov1 8s linear infinite");
                    // d3.selectAll(".hp-cloud svg:nth-child(2)").style("animation", "cloud_mov2 8s linear infinite");
                }, 1000)
            }, 1000)
        }, 1000)
    },
    disappear: function () {
        var trans_time = d3.transition(2).duration(1000).ease(d3.easeCubicInOut);
        d3.select(".hp-backg img ").transition().duration(1000).ease(d3.easeLinear).style("opacity", "0");
        d3.select(".hp-sun-in").transition(trans_time).style("opacity", "0").style("transform", "scale(0.8)").style("filter", "blur(5rem)");
        d3.select(".hp-sun-middle").transition(trans_time)
            .style("opacity", "0").style("transform", "scale(0.8)");
        d3.select(".hp-sun-out").transition(trans_time).style("opacity", "0").style("transform", "scale(0.8)");
        d3.select(".hp-sun-edge").transition(trans_time).style("opacity", "0").style("transform", "scale(1.2)");
        d3.selectAll(".hp-cloud svg").transition().duration(600).ease(d3.easeLinear).style("opacity", "0").style("filter", "blur(5rem)");
        d3.selectAll(".hp-text-up p").style("transform", "translateY(-300%)");
        d3.selectAll(".hp-text-up>div").style("transform", "translateY(-300%)");
        d3.selectAll(".hp-text-down p").style("transform", "translateY(-300%)");
        d3.selectAll(".hp-cloudline svg").transition(trans_time).style("stroke-width", "0");
    },
    removestyle: function () {
        d3.select(".hp-backg img ").style("opacity", "");
        d3.select(".hp-sun-in").style("transform", "").style("filter", "").style("opacity", "");
        d3.select(".hp-sun-middle").style("opacity", "").style("transform", "");
        d3.select(".hp-sun-out").style("transform", "").style("opacity", "");
        d3.select(".hp-sun-edge").style("opacity", "").style("transform", "");
        d3.selectAll(".hp-cloud svg").style("opacity", "").style("filter", "")
            .style("stroke-dashoffset", "").style("fill", "")
        // .style("animation", "");
        d3.select(".hp-text").style("transform", "");
        d3.selectAll(".hp-text-up p").style("transform", "");
        d3.selectAll(".hp-text-up>div").style("transform", "");
        d3.selectAll(".hp-text-up>div div").style("width", "");
        d3.selectAll(".hp-text-down p").style("transform", "");
        d3.selectAll(".hp-cloudline svg").style("stroke-width", "").style("opacity", "");
    }
}
const pagehb = {
    href: 'html/MAA_handbook.html',
    showtime: 3000,
    disappeartime: 1000,
    selfpage: d3.select("#handbookpage"),
    background: d3.select(".hbp-background"),
    back_movx: 0,
    back_movy: 0,
    backmovable: true,
    feettexts: [
        "Enter the handbook",
        "进入图鉴",
        "to check all kinds of  Mythical",
        "查阅我们所收录的",
        "animals we caught",
        "惊奇异兽",
    ],
    t_changetimer: "",
    tbox: [
        document.querySelectorAll(".hbp-text-up p"),
        document.querySelectorAll(".hbp-text-down p"),
    ],
    tbox_conter: [
        [1, 0],
        [1, 0],
    ],
    show: function () {
        pagehb.update_scale()
        d3.selectAll(".hbp-text-up p").style("transform", "translateY(0)");
        d3.selectAll(".hbp-text-down p").style("transform", "translateY(0)");
        setTimeout(function () {
            d3.selectAll(".hbp-text-up p").style("transform", "translateY(-100%)");
            d3.selectAll(".hbp-text-down p").style("transform", "translateY(-100%)");
            d3.select("#hbp-animatebox-canvas").transition().duration(800).ease(d3.easeCubicInOut)
                .style("opacity", "1").style("bottom", "0%");
            setTimeout(function () {
                d3.selectAll(".hbp-background-imgbox img").transition().duration(500).ease(d3.easeCubicInOut)
                    .delay(function (d, i) { return i * 50; }).style("transform", "translateY(0)");
            }, 1500)
        }, 800);
    },
    disappear: function () {
        d3.selectAll(".hbp-text-up p").style("transform", "translateY(-200%)");
        d3.selectAll(".hbp-text-down p").style("transform", "translateY(-200%)");
        d3.selectAll(".hbp-background-imgbox img").transition().duration(500).ease(d3.easeCubicInOut)
            .style("opacity", "0").style("top", "-20%");
        d3.select("#hbp-animatebox-canvas").transition().duration(500).ease(d3.easeCubicInOut)
            .style("opacity", "0").style("bottom", "-10%");
    },
    removestyle: function () {
        d3.selectAll(".hbp-text-up p").style("transform", "");
        d3.selectAll(".hbp-text-down p").style("transform", "");
        d3.selectAll(".hbp-background-imgbox img").style("opacity", "").style("top", "").style("transform", "");
        d3.select("#hbp-animatebox-canvas").style("opacity", "").style("bottom", "");
    },
    update_scale() {
        let actual_width = document.querySelector("#hbp-animatebox").offsetWidth;
        let reference_width = document.querySelector(".hbp-text").offsetWidth;
        let scale = 0.789;
        let comput_width = reference_width * scale;
        let scale_nums = comput_width / actual_width
        d3.select("#hbp-animatebox").style("transform", `scale(${scale_nums})`);
    },
    backmov: function () {
        this.back_movx += event.clientX - mousex_old;
        this.back_movy += event.clientY - mousey_old;
        if (this.backmovable) {
            this.background.style("transform",
                `translate(${-this.back_movx / 4}px,${-this.back_movy / 4}px`);
            setTimeout(function () { pagehb.backmovable = true; }, 2000);
            this.backmovable = false;
        }
    },
}
const paget = {
    href: 'html/MAA_team.html',
    showtime: 3000,
    disappeartime: 1000,
    selfpage: d3.select("#teampage"),
    feettexts: [
        "Open the projector",
        "打开档案",
        "to view the team member files",
        "查阅神兽管理局的",
        "of the MAA",
        "队员资料",
    ],
    t_changetimer: "",
    tbox: [
        document.querySelectorAll(".tp-text-up p"),
        document.querySelectorAll(".tp-text-down p"),
    ],
    tbox_conter: [
        [1, 0],
        [1, 0],
    ],
    init: function () {
        d3.selectAll(".membercard").style("transform", "scale(1)").style("top", "50%")
            .style("left", "45%").style("opacity", "0");
    },
    show: function () {
        d3.select(".tp-back img").transition().duration(1500).ease(d3.easeLinear).style("opacity", "0.1");
        d3.selectAll(".tp-text div p").style("transform", "translateY(0)");
        setTimeout(function () {
            d3.selectAll(".tp-text div p").style("transform", "translateY(-100%)");
            d3.select(".tp-card-box img").transition().duration(500).ease(d3.easeLinear)
                .style("opacity", "1").style("transform", "translateY(0)");
            setTimeout(function () {
                d3.selectAll(".membercard").transition().duration(300).ease(d3.easeLinear).delay(function (d, i) {
                    return i * 50;
                }).style("top", "20%").style("opacity", "1");
                setTimeout(function () {
                    d3.selectAll(".membercard").style("transition", "0.5s ease").style("left", "").style("top", "").style("transform", "")
                }, 1000)
            }, 500)
        }, 800)
    },
    disappear: function () {
        d3.select(".tp-back img").transition().duration(800).ease(d3.easeLinear).style("opacity", "0");
        d3.selectAll(".tp-text div p").style("transform", "translateY(-200%)");
        d3.selectAll(".membercard").style("transform", "").style("top", "50%")
            .style("left", "45%").style("opacity", "0");
        d3.select(".tp-card-box img").style("transition", "0.5s ease 0.2s")
            .style("opacity", "0").style("transform", "translateY(50%)");
    },
    removestyle: function () {
        d3.select(".tp-back img").style("opacity", "");
        d3.selectAll(".tp-text div p").style("transform", "");
        d3.select(".tp-card-box img").style("opacity", "").style("transform", "").style("transition", "");
        d3.selectAll(".membercard").style("transform", "scale(1)").style("top", "50%")
            .style("left", "45%").style("opacity", "0").style("transition", "");
    },
}
const pagej = {
    href: 'html/MAA_joinus.html',
    showtime: 3000,
    disappeartime: 1300,
    selfpage: d3.select("#joinpage"),
    feettexts: [
        "We are recruiting",
        "神兽管理局",
        "tramers for maa to expand",
        "从未停止对外征召",
        "our team",
        "期待你的加入",
    ],
    t_changetimer: "",
    tbox: [
        document.querySelectorAll(".jp-text-up p"),
        document.querySelectorAll(".jp-text-down p"),
    ],
    tbox_conter: [
        [1, 0],
        [1, 0],
    ],
    web_direction: "https://www.bilibili.com/",
    show: function () {
        pagej.update_scale();
        d3.select(".jp-back img").transition().duration(2000).ease(d3.easeLinear)
            .style("opacity", "0.3");
        setTimeout(function () {
            d3.selectAll(".jp-text div p").style("transform", "translateY(0)");
            setTimeout(function () {
                d3.selectAll(".jp-text div p").style("transform", "translateY(-100%)");
            }, 1000)
        }, 1500)

    },
    disappear: function () {
        mline_text_tbox[3].click();
        d3.select(".jp-back img").transition().duration(1000).ease(d3.easeLinear)
            .style("opacity", "0");
        d3.selectAll(".jp-text div p").style("transform", "translateY(100%)");
    },
    removestyle: function () {
        d3.select(".jp-back img").style("opacity", "");
        d3.selectAll(".jp-text div p").style("transform", "");
    },
    update_scale() {
        let actual_width = document.querySelector("#jp-animatebox").offsetWidth;
        let reference_width = document.querySelector(".jp-text").offsetWidth;
        let scale = 4.374;
        let comput_width = reference_width * scale;
        let scale_nums = comput_width / actual_width
        d3.select("#jp-animatebox").style("transform", `scale(${scale_nums}) translateY(-35%)`);
    }
}
/////////////////////////////////////////////////////////////////
let current_page = 0;
let _mouseicon = d3.select(".mouseicon");
let _mouseicon_text = d3.select(".mouseicon p");
let _mouseicon_ring = d3.select(".click_ring");
let mousex_old = mousey_old = 0;
window.onmousemove = function () {
    _mouseicon.style("display", "flex");
    _mouseicon.style("left", `${event.clientX}px`);
    _mouseicon.style("top", `${event.clientY}px`);
    if (current_page == 2) { mainpages[current_page].backmov(); };
    mousex_old = event.clientX;
    mousey_old = event.clientY;
}
function click_show() {
    _mouseicon_text.transition().duration(500).ease(d3.easeCubicInOut).style("opacity", "1");
    _mouseicon.style("animation", "mcion-anim0 0.5s ease forwards");
    _mouseicon_ring.transition().duration(500).ease(d3.easeCubicInOut).style("width", "10rem")
        .style("animation", "micon-ring-rotate 5s linear infinite");
}
function click_disapp() {
    _mouseicon_text.transition().duration(500).ease(d3.easeCubicInOut).style("opacity", "0");
    _mouseicon.style("animation", "mcion-anim1 0.5s ease forwards");
    _mouseicon_ring.transition().duration(500).ease(d3.easeCubicInOut).style("width", "0rem")
        .style("animation", "");
}
function menubar_show() {
    d3.select(".maalogo img").transition().duration(500).ease(d3.easeCubicIn).style("top", "0%");
    d3.select(".mline-icon svg").transition().duration(1000).ease(d3.easeCubicInOut).style("transform", "rotate(0)");
    d3.select(".mline-scrollline").transition().duration(500).ease(d3.easeCubicIn).style("opacity", "1");
    d3.selectAll(".mline-icon-text p").style("top", "0");
    d3.selectAll(".micon-svg-ringup,.micon-svg-ringdown").transition()
        .duration(1000).ease(d3.easeCubicOut).style("stroke-dashoffset", "0");
    d3.selectAll(".micon-svg-ball").transition().duration(1000).ease(d3.easeCubicIn).style("opacity", "1")
    d3.selectAll(".mline-text-tbox p").transition().delay(function (d, i) {
        return i * 50;
    }).style("top", "0px");
}
function menubar_disapp() {
    d3.select(".maalogo img").transition().duration(500).ease(d3.easeCubicIn).style("top", "100%");
    d3.select(".mline-scrollline").transition().duration(500).ease(d3.easeCubicIn).style("opacity", "0");
    d3.selectAll(".mline-icon-text p").style("top", "100%");
    d3.selectAll(".micon-svg-ringup,.micon-svg-ringdown").transition()
        .duration(500).ease(d3.easeCubicOut).style("stroke-width", "0");
    d3.selectAll(".micon-svg-ball").transition().duration(300).ease(d3.easeCubicIn).style("opacity", "0")
    d3.selectAll(".mline-text-tbox p").transition().delay(function (d, i) {
        return i * 50;
    }).style("top", "100%");
}
function t_exchanger(text, textconter) {
    if (text) {
        for (j = 0; j < text.length; j++) {
            for (i = 0; i < text[j].length; i++) {
                textconter[j][i] == 0 ? textconter[j][i] = 1 : textconter[j][i]--;
                text[j][i].style.transition = `0.5s ease ${0.2 * j}s`;
                text[j][i].style.transform = `translateY(${(textconter[j][i] - i) * 100}%)`;
            }
        }
    }
}
let ft_timer;
window.addEventListener("load", function () {
    td_animateinit();
    hb_animateinit();
    paget.init();
    pageh.show();
    setTimeout(function () {
        if_pconvert = true;
        menubar_show();
        feettext.show();
        window.addEventListener("wheel", function (e) {
            if (e.wheelDelta < 0) {
                var wheelpage = current_page == 3 ? 0 : current_page + 1;
            }
            else {
                var wheelpage = current_page == 0 ? 3 : current_page - 1;
            }
            mline_text_tbox[wheelpage].click();
        });
    }, pageh.showtime);
    ft_timer = setInterval(function () {
        t_exchanger(feettext.tbox, feettext.tbox_conter)
    }, 4000);
});
window.addEventListener("resize", function () {
    pagej.update_scale();
    pagehb.update_scale();
})
let mainpages = new Array();
mainpages[0] = pageh;
mainpages[1] = paget;
mainpages[2] = pagehb;
mainpages[3] = pagej;
let nextpage = 0;
let if_pconvert = false;
let mline_text_tbox = document.getElementsByClassName("mline-text-tbox");
function pageconvert(next_page) {
    if (current_page != next_page && if_pconvert) {
        advance_currentpage = next_page
        if_pconvert = !if_pconvert;
        nextpage = next_page;
        if (mainpages[next_page].tbox_conter) {
            mainpages[next_page].tbox_conter = [[1, 0], [1, 0]];
        }
        clearInterval(mainpages[current_page].t_changetimer);
        feettext.disappear();
        mainpages[current_page].disappear();
        mainpages[next_page].selfpage.style("display", "flex");
        setTimeout(function () {
            feettext.show();
            feettext.changetext(mainpages[next_page]);
            mainpages[current_page].removestyle();
            mainpages[current_page].selfpage.style("display", "none");
            mainpages[next_page].show();
            mainpages[next_page].t_changetimer = setInterval(function () {
                t_exchanger(mainpages[next_page].tbox, mainpages[next_page].tbox_conter)
            }, 4000);
            setTimeout(function () { if_pconvert = !if_pconvert }, mainpages[next_page].showtime);
            current_page = next_page;
        }, mainpages[current_page].disappeartime)
    }
}
const menucontrol = {
    if_pageshow: false,
    url_pointer: 0,
    urls: [
        "html/MAA_aboutus.html",
        "html/MAA_team.html",
        "html/MAA_handbook.html",
        "html/MAA_joinus.html",
        "MAA_home.html"
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
        let trans = d3.transition().duration(300).ease(d3.easeCubicInOut);
        d3.select(".menucolmun-button-linebox circle")
            .transition(trans).style("opacity", "1");
        d3.select(".menucolmun-button-linebox rect:nth-child(2)")
            .transition(trans).style("transform", "scaleY(0)");
        d3.select(".menucolmun-button-linebox rect:nth-child(5)")
            .transition(trans).style("transform", "scaleY(0)");
        d3.select(".menucolmun-button-linebox rect:nth-child(3)")
            .transition(trans).style("transform", "rotate(45deg) scale(0.8)");
        d3.select(".menucolmun-button-linebox rect:nth-child(4)")
            .transition(trans).style("transform", "rotate(-45deg) scale(0.8)");
    },
    disapp: function () {
        menucontrol.change(0);
        d3.select(".menupage-window").style("transform", "");
        d3.select("#menupage").transition().duration(1000).ease(d3.easeCubicInOut)
            .style("width", "0%");
        d3.select(".menupage-textbox").transition().duration(500).ease(d3.easeCubicInOut)
            .style("opacity", "0");
        let trans = d3.transition().duration(300).ease(d3.easeCubicInOut);
        d3.select(".menucolmun-button-linebox circle")
            .transition(trans).style("opacity", "0");
        d3.select(".menucolmun-button-linebox rect:nth-child(2)")
            .transition(trans).style("transform", "scaleY(1)");
        d3.select(".menucolmun-button-linebox rect:nth-child(5)")
            .transition(trans).style("transform", "scaleY(1)");
        d3.select(".menucolmun-button-linebox rect:nth-child(3)")
            .transition(trans).style("transform", "rotate(0deg) scale(1");
        d3.select(".menucolmun-button-linebox rect:nth-child(4)")
            .transition(trans).style("transform", "rotate(0deg) scale(1)");
    },
    switch: function () {
        if (this.if_pageshow) { menucontrol.disapp(); }
        else { menucontrol.show(); }
        this.if_pageshow = !this.if_pageshow;
    },
    jumppage: function (e = this.url_pointer) {
        menubar_disapp();
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
let if_jumppage = false;
function jumppage_main(e) {
    if (if_pconvert) {
        d3.select(".mouseicon").transition(500).style("transform", "scale(0)")
        if_jumppage = true;
        clearInterval(mainpages[current_page].t_changetimer);
        menubar_disapp();
        feettext.disappear();
        mainpages[current_page].disappear();
        setTimeout(function () {
            location.href = mainpages[current_page].href;
        }, mainpages[current_page].disappeartime)
    }
}