const card_datas = [
    {
        src: '../img/handbook/MA_1284.webp',
        id: 'NO.1284',
        name: '凤凰',
        text: '凤凰是鸟类始祖,能在一定程度上驾驭其他鸟类。凤凰寿命极长,,,,',
        url: 'mythical animals/MA_1284.html',
    },
    {
        src: '../img/handbook/MA_4632.webp',
        id: 'NO.4632',
        name: '玄武',
        text: '神兽图鉴中的天之四灵之一,又名龟蛇。是一种由龟和蛇组成的一种灵物,,,,',
        url: 'mythical animals/MA_4632.html',
    },
    {
        src: '../img/handbook/MA_8653.webp',
        id: 'NO.8653',
        name: '腾蛇',
        text: '因为腾蛇庞大的体型与翅膀，每次腾蛇驾风而起的时候，都会带来巨大风暴,,,,',
        url: 'mythical animals/MA_8653.html',
    },
    {
        src: '../img/handbook/MA_2695.webp',
        id: 'NO.2695',
        name: '饕餮',
        text: '饕餮的肚子就像一个无底洞，只要是能吃的便全部吞到肚子里,,,,',
        url: 'mythical animals/MA_2695.html',
    },
    {
        src: '../img/handbook/MA_3819.webp',
        id: 'NO.3819',
        name: '朱厌',
        text: '神兽图鉴中记载的四大恶兽之一，身形像猿猴，白头红脚，全身毛发鲜红如火，双臂强健有力,,,,',
        url: 'mythical animals/MA_3819.html',
    },
    {
        src: '../img/handbook/MA_4327.webp',
        id: 'NO.4327',
        name: '金乌',
        text: '形态为体型巨大的三足乌鸦，平时全身被通红羽毛覆盖，尾部长毛泛着金光,,,,',
        url: 'mythical animals/MA_4327.html',
    },
    {
        src: '../img/handbook/MA_5710.webp',
        id: 'NO.5710',
        name: '梼杌',
        text: '傲狠难训，喜欢按照自己的心意为所欲为，因此有别名傲狠和难训,,,,',
        url: 'mythical animals/MA_5710.html',
    },
    {
        src: '../img/handbook/MA_7194.webp',
        id: 'NO.7194',
        name: '蜚',
        text: '蜚是疾病的源头，身体周围散发着黑色雾气，当它进入水中时，水会立即干涸,,,,',
        url: 'mythical animals/MA_7194.html',
    },
    {
        src: '../img/handbook/MA_0545.webp',
        id: 'NO.0545',
        name: '梦蝶',
        text: '梦蝶天生可以自由开启维度通道，它是神兽图鉴记录中极少具有跨纬度能力的神兽,,,,',
        url: 'mythical animals/MA_0545.html',
    },
    {
        src: '../img/handbook/MA_9326.webp',
        id: 'NO.9326',
        name: '穷奇',
        text: '形状如虎身人面,虎齿人爪,头上有一对像羊角一样的坚硬犄角全身毛发坚硬如刺,,,,',
        url: 'mythical animals/MA_9326.html',
    },
    {
        src: '../img/handbook/MA_5813.webp',
        id: 'NO.5813',
        name: '鲲鹏',
        text: '体型巨大的神兽，在水中时为鲲，鲲体宽体长均有千里，离开水后化身为鹏,,,,',
        url: 'mythical animals/MA_5813.html',
    },
    {
        src: '../img/handbook/MA_0895.webp',
        id: 'NO.0895',
        name: '混沌',
        text: '混沌所到之处人畜无影。混沌每到一个地方，便利用歌舞吸引人类和猎物到它身边,,,,',
        url: 'mythical animals/MA_0895.html',
    },
]
const handbook = {
    timer: '',
    // wave_speed: 10,
    wave_speed: -18,
    // wave_nums: 0,
    wave_nums: 300,
    show_card: document.getElementsByClassName("showbox-card")[0],
    cards: document.getElementsByClassName("card"),
    card_height: document.getElementsByClassName("card")[1].offsetTop - document.getElementsByClassName("card")[0].offsetTop,
    ifcan_scroll: false,
    scroll_distance: '',
    card_old: '',
    card_now: 0,
    card_scroll: function () {
        if (handbook.ifcan_scroll) {
            handbook.card_old = handbook.card_now;
            console.log(handbook.card_now);
            if (event.wheelDeltaY > 0) {
                handbook.scroll_distance += handbook.card_height;
                handbook.card_now--;
            }
            else {
                handbook.scroll_distance -= handbook.card_height;
                handbook.card_now++;
            }

            if (handbook.card_now < 0) { handbook.scroll_distance = handbook.card_now = 0; }
            else if (handbook.card_now > handbook.cards.length - 1) {
                handbook.card_now = handbook.cards.length - 1;
                handbook.scroll_distance = -(handbook.cards.length - 1) * handbook.card_height;
            }
            else {
                handbook.ifcan_scroll = false;
                d3.select(handbook.cards[handbook.card_now]).classed("card-checked", true)
                d3.select(handbook.cards[handbook.card_old]).classed("card-checked", false);
                handbook.showcard_change();
                console.log(handbook.card_now);
                d3.selectAll(".card")
                    .transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .style("transform", `translateY(${handbook.scroll_distance}px)`);
            }
        }
    },
    wave_animate: function () {
        handbook.wave_nums += handbook.wave_speed;
        if (handbook.wave_nums < 0) {
            cancelAnimationFrame(handbook.timer);
            handbook.wave_nums = 0;
            handbook.wave_speed = 10;
            handbook.ifcan_scroll = true
        }
        else {
            handbook.timer = window.requestAnimationFrame(handbook.wave_animate);
        }
        d3.select("#wave feDisplacementMap").attr("scale", handbook.wave_nums);

    },
    showcard_change: function () {
        window.requestAnimationFrame(handbook.wave_animate)
        d3.select(".showbox-card")
            .transition()
            .duration(200)
            .ease(d3.easeCubicInOut)
            .style("filter", "url(#wave) grayscale(1)")
            .transition()
            .on("end", function () {
                handbook.wave_speed = -18;
                let obj = card_datas[handbook.card_now];
                d3.select(handbook.show_card).select(".card-img img").attr("src", obj.src);
                d3.select(handbook.show_card).select(".card-text-head p:nth-child(1)").text(obj.name);
                d3.select(handbook.show_card).select(".card-text-head p:nth-child(2)").text(obj.id);
                d3.select(handbook.show_card).select(".card-text-body").text(obj.text);
            })
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "0")
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "1")
            .style("filter", "url(#wave) grayscale(0)")
    },
    show: function () {
        d3.select(".scroll-tips")
            .transition(300)
            .style("opacity", "1");
        d3.select(".handbook")
            .transition(1000)
            .style("transform", "scaleY(1)")
        setTimeout(function () {
            d3.select(".handbook")
                .style("transform", "rotateX(70deg) scale(0.6)")
        }, 1000)
        setTimeout(function () {
            d3.select(handbook.show_card)
                .style("display", "flex")
                .transition()
                .duration(1000)
                // .delay(500)
                .ease(d3.easeCubicInOut)
                .style("opacity", "1")
                .style("filter", "url(#wave) grayscale(0)");
            window.requestAnimationFrame(handbook.wave_animate)
            d3.select(handbook.cards[handbook.card_now]).classed("card-checked", true)
        }, 2000)
    },
    disapper: function () {
        d3.select(".scroll-tips")
            .transition(300)
            .style("opacity", "0");
        d3.select(handbook.show_card)
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .style("opacity", "0")
        d3.select(".handbook")
            .style("transform", "rotateX(90deg) scale(0)");
        d3.select(".mouseicon")
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style("opacity", "0")
    },
    jumppage: function (e = card_datas[handbook.card_now].url) {
        handbook.disapper();
        menucontrol.menucolmun_diasapp();
        setTimeout(function () {
            location.href = e;
        }, 1200);
    },
};
function logojump_judge() {
    if (menucontrol.if_pageshow) { menucontrol.jumppage(4); }
    else { handbook.jumppage('../MAA_home.html') };
}
function mouseicon_show() {
    d3.select(".mouseicon")
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .style("transform", "scale(1)")
}
function mouseicon_disapper() {
    d3.select(".mouseicon")
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .style("transform", "scale(0)")
}
menucontrol.menucolmun_show();
window.addEventListener("mousemove", function () {
    d3.select(".mouseicon")
        .style("left", `${event.clientX}px`)
        .style("top", `${event.clientY}px`)
})
window.addEventListener("wheel", handbook.card_scroll);
window.onload = function () {
    d3.select(".handbook")
        .style("height", `${document.getElementsByClassName("cardbox")[0].offsetHeight}px`)
        .style("transform", "scaleY(0)")
        .transition(100)
        .on("end", function () {
            handbook.show()
        })
        .style("transition", "1s ease");
};