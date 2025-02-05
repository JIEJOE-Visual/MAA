
// partOne
var wowLogo = new WOW({
  boxClass: "wowLogo",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});

// //partTwo
var wowPartTwo = new WOW({
  boxClass: "wowPartTwo",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});

wowLogo.init();
wowPartTwo.init();

function disapp() {
  d3.select(".pageall")
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .style("opacity", "0");
}
function show() {
  d3.select(".partOne-main-img")
    .transition()
    .duration(800)
    .ease(d3.easeLinear)
    .style("opacity", "1")
    .style("left", "0%");
  d3.selectAll(".partOne-main-text div:nth-child(1) p")
    .transition()
    .duration(800)
    .ease(d3.easeCubicInOut)
    .delay(function (d, i) {
      return i * 100
    })
    .style("top", "0rem");
  d3.select(".partOne-main-text div:nth-child(2)")
    .transition()
    .duration(1000)
    .ease(d3.easeCubicInOut)
    .style("transform", "scaleX(1)")
    .on("end", function () {
      d3.select(".partOne-scrolltip")
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .style("opacity", "1");
    });
}
window.onload = function () {

  // let maaLogoImg = document.getElementById('maaLogoImg');
  // let maaLogoClassName = maaLogoImg.className;
  // maaLogoImg.className = `wowLogo goOut ${maaLogoClassName}`
  // maaLogoImg.style.opacity = "1"
  setTimeout(function () {
    menucontrol.menucolmun_show();
    show();
  }, 500)

  var history = document.getElementById('history');
  var wide = document.getElementById('wide');
  var flod = document.getElementById('flod');
  var historyWord = document.getElementById("historyWord");
  var historyStory = document.getElementById("historyStory");
  var developPratOne = document.getElementById("developPratOne");
  var developPratTwo = document.getElementById("developPratTwo");
  var storyAboutUs = document.getElementById("storyAboutUs")
  // var develpopCloud = document.getElementById("develpopCloud")
  var hidecard1 = document.getElementById("hidecard1")
  var hidecard2 = document.getElementById("hidecard2")
  var hidecard3 = document.getElementById("hidecard3")
  var hidecard4 = document.getElementById("hidecard4")
  var hidecard5 = document.getElementById("hidecard5")
  var partTwoHe = document.getElementById('partTwoHe')
  var partFour = document.getElementById('partFour')
  var partFive = document.getElementById('partFive')
  var path1 = document.getElementById('path1')
  var path1a = document.getElementById('path1a')
  var path2 = document.getElementById('path2')
  var path2a = document.getElementById('path2a')
  var path3 = document.getElementById('path3')
  var path3a = document.getElementById('path3a')

  // wide div距离顶部的距离
  var wideTop = wide.offsetTop;
  var wideHeight = wide.offsetHeight;
  var wideWidth = wide.offsetWidth
  var historyHeight = history.offsetHeight;
  var percentage = wideWidth / historyHeight;


  // svg距离顶部的距离
  var pathTop1 = path1.offsetTop;



  //获取 storyAboutUs距离顶部的距离
  var storyAboutUsHeight = storyAboutUs.offsetHeight;

  //wdie div底部距离顶部的距离
  wideBottom = wideHeight + wideTop;


  var beforeScrollTop = document.body.scrollTop;
  window.onscroll = function () {

    //判断滑轮上滑还是下滑
    var afterScrollTop = document.documentElement.scrollTop;
    var pulley = (afterScrollTop - beforeScrollTop) > 0 ? "down" : "up";
    beforeScrollTop = afterScrollTop;

    //获取距离页面顶部的距离
    var toTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (toTop > partTwoHe.offsetTop / 2.5) {
      path1.style.animation = `dash 4s linear`
      path1a.style.animation = `dash 4s linear`
    }

    if (toTop > partFour.offsetTop - partFour.offsetTop * 0.17) {
      path2.style.animation = `dash 4s linear`
      path2a.style.animation = `dash 4s linear`
    }
    if (toTop > partFive.offsetTop) {
      path3.style.animation = `dash 4s linear`
      path3a.style.animation = `dash 4s linear`
    }



    //wide内滑动的距离  ，横屏比例
    var scHeight = toTop - wideTop;
    var distance = percentage * (scHeight - historyHeight * 2);


    //文字下滑    ，页面右移
    if (wideTop <= toTop && toTop <= wideBottom - historyHeight) {
      history.setAttribute("class", "historyChose");
      //翻文字
      if (scHeight <= historyHeight * 2 && scHeight > 0) {
        historyWord.style.transform = `translateY(-${scHeight}px)`;
        historyStory.style.transform = "";
        developPratOne.style.transform = "";
        developPratTwo.style.transform = "";
        flod.style.transform = `rotate(${scHeight / 10}deg)`;
        // console.log(`${scHeight/30}deg`);
      }
      // 翻页
      if (scHeight > historyHeight * 2 && scHeight <= historyHeight * 4) {
        historyStory.style.transform = `translateX(-${distance}px)`;
        developPratOne.style.transform = `translateX(-${distance}px)`;
        developPratTwo.style.transform = `translateX(-${distance}px)`;
        // develpopCloud.style.transform = `translateX(${distance}px)`;
        if (scHeight > historyHeight * 3 && scHeight <= historyHeight * 4) {
          // develpopCloud.style.transform = `translateX(${percentage * (scHeight - historyHeight * 3)}px)`;
        }
        if (scHeight >= historyHeight * 3 + wideWidth * 0.75 * percentage && scHeight < historyHeight * 5) {
          historyStory.style.transform = `translateX(-${percentage * historyHeight * 4}px)`;
          developPratOne.style.transform = `translateX(-${percentage * historyHeight * 4}px)`;
          developPratTwo.style.transform = `translateX(-${percentage * historyHeight * 4}px)`;
        }
      }
    } else {
      history.setAttribute("class", "history");
    }
    //developPratTwo淡入淡出
    if (scHeight > historyHeight * 4 && pulley == "down") {
      developPratTwo.style.opacity = 1 - (scHeight - historyHeight * 4) / historyHeight;
      // develpopCloud.style.opacity = 1 - (scHeight - historyHeight * 4) / historyHeight;
      // console.log( 1-(scHeight - historyHeight *4) / historyHeight )
    }
    if (scHeight > historyHeight * 4 && pulley == "up") {
      developPratTwo.style.opacity = 1 - (scHeight - historyHeight * 4) / historyHeight;
      // develpopCloud.style.opacity = 1 - (scHeight - historyHeight * 4) / historyHeight;
    }


    if (toTop - storyAboutUsHeight > 0 && pulley == "down") {
      hidecard1.style.transform = `rotateY(${(toTop - storyAboutUsHeight) / 14}deg) translate(${(toTop - storyAboutUsHeight) / 30}px,${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard2.style.transform = `rotateZ(${(toTop - storyAboutUsHeight) / 15}deg)  translate(${(toTop - storyAboutUsHeight) / 30}px,${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard3.style.transform = `rotateY(${(toTop - storyAboutUsHeight) / 14}deg) translate(${(toTop - storyAboutUsHeight) / 30}px,${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard4.style.transform = `rotateY(${(toTop - storyAboutUsHeight) / 16}deg) translate(${(toTop - storyAboutUsHeight) / 30}px,${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard5.style.transform = `rotateZ(${(toTop - storyAboutUsHeight) / 11}deg) translate(${(toTop - storyAboutUsHeight) / 30}px,-${(toTop - storyAboutUsHeight) / 30}px)`;
    }
    else if (toTop - storyAboutUsHeight > 0 && pulley == "up") {
      hidecard1.style.transform = `rotateY(-${(toTop - storyAboutUsHeight) / 14}deg) translate(-${(toTop - storyAboutUsHeight) / 30}px,-${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard2.style.transform = `rotateZ(-${(toTop - storyAboutUsHeight) / 15}deg) translate(-${(toTop - storyAboutUsHeight) / 30}px,-${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard3.style.transform = `rotateY(-${(toTop - storyAboutUsHeight) / 14}deg) translate(-${(toTop - storyAboutUsHeight) / 30}px,-${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard4.style.transform = `rotateY(-${(toTop - storyAboutUsHeight) / 16}deg) translate(-${(toTop - storyAboutUsHeight) / 30}px,-${(toTop - storyAboutUsHeight) / 30}px)`;
      hidecard5.style.transform = `rotateZ(-${(toTop - storyAboutUsHeight) / 11}deg) translate(-${(toTop - storyAboutUsHeight) / 30}px,-${(toTop - storyAboutUsHeight) / 30}px)`;
    }



  }
}
