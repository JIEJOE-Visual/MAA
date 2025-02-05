var td_canvas, td_stage, td_exportRoot, td_anim_container, td_overlay_container, td_fnStartAnimation;
function td_animateinit() {
    td_canvas = document.getElementById("jp-animatebox-canvas");
    td_anim_container = document.getElementById("jp-animatebox");
    td_overlay_container = document.getElementById("jp-animatebox_container");
    var comp = AdobeAn.getComposition("E4CA4655CA5C5541AC1CC60631A170E5");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { td_handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { td_handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function td_handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function td_handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    td_exportRoot = new lib.Templedoor();
    td_stage = new lib.Stage(td_canvas);
    //Registers the "tick" event listener.
    td_fnStartAnimation = function () {
        td_stage.addChild(td_exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", td_stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.td_makeResponsive(false, 'both', false, 1, [td_canvas, td_anim_container, td_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    td_fnStartAnimation();
}
(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [
        { name: "Temple door_atlas_", frames: [[0, 0, 1230, 1663]] },
        { name: "Temple door_atlas_2", frames: [[0, 0, 1230, 1470]] },
        { name: "Temple door_atlas_3", frames: [[0, 0, 1111, 1169], [1113, 0, 872, 1105]] },
        { name: "Temple door_atlas_4", frames: [[892, 977, 798, 969], [0, 0, 975, 975], [0, 977, 890, 890], [977, 0, 807, 807]] },
        { name: "Temple door_atlas_5", frames: [[0, 607, 1307, 478], [0, 1087, 1307, 478], [0, 0, 1043, 605]] },
        { name: "Temple door_atlas_6", frames: [[0, 0, 1029, 566], [0, 568, 1029, 566], [0, 1136, 1121, 518]] },
        { name: "Temple door_atlas_7", frames: [[0, 0, 1121, 518], [0, 1067, 1221, 451], [0, 1520, 1221, 451], [1223, 0, 724, 724], [0, 520, 1056, 545]] },
        { name: "Temple door_atlas_8", frames: [[0, 828, 1075, 460], [0, 1290, 1075, 460], [0, 0, 1254, 412], [0, 414, 1254, 412], [1256, 0, 615, 797], [1077, 828, 889, 536]] },
        { name: "Temple door_atlas_9", frames: [[1143, 0, 847, 546], [1143, 548, 847, 546], [0, 1351, 890, 509], [0, 0, 1141, 417], [0, 419, 1141, 417], [0, 838, 908, 511], [910, 1096, 1006, 459]] },
        { name: "Temple door_atlas_10", frames: [[782, 582, 842, 516], [0, 1100, 842, 516], [892, 0, 780, 580], [0, 511, 780, 580], [0, 0, 890, 509], [0, 1618, 1138, 379], [844, 1100, 1138, 379]] },
        { name: "Temple door_atlas_11", frames: [[1078, 1347, 807, 481], [0, 696, 809, 521], [618, 0, 809, 521], [0, 1219, 878, 455], [811, 523, 878, 455], [0, 1676, 1076, 365], [880, 980, 1076, 365], [0, 0, 616, 694]] },
        { name: "Temple door_atlas_12", frames: [[0, 0, 807, 481], [0, 483, 764, 499], [0, 984, 764, 499], [809, 0, 1078, 344], [809, 346, 1078, 344], [1367, 692, 592, 601], [766, 692, 599, 599], [777, 1295, 802, 424], [0, 1485, 775, 449]] },
        { name: "Temple door_atlas_13", frames: [[1084, 1478, 632, 470], [804, 765, 999, 337], [804, 426, 1000, 337], [0, 1104, 450, 698], [452, 1478, 630, 473], [0, 0, 802, 424], [452, 1104, 802, 372], [804, 0, 802, 424], [0, 426, 802, 424]] },
        { name: "Temple door_atlas_14", frames: [[1438, 0, 601, 458], [556, 1054, 601, 458], [0, 0, 632, 470], [724, 1514, 620, 408], [1346, 1425, 620, 408], [995, 460, 893, 295], [995, 757, 893, 295], [0, 472, 993, 289], [0, 763, 993, 289], [0, 1054, 554, 501], [0, 1557, 722, 382], [634, 0, 802, 370], [1159, 1054, 713, 369]] },
        { name: "Temple door_atlas_15", frames: [[0, 266, 565, 419], [567, 266, 565, 419], [833, 1534, 584, 337], [1419, 1534, 584, 337], [0, 1502, 831, 258], [0, 1762, 831, 258], [0, 0, 919, 264], [921, 0, 919, 264], [1048, 1052, 830, 239], [1048, 1293, 830, 239], [499, 1052, 547, 378], [0, 1052, 497, 448], [1134, 576, 474, 474], [0, 687, 642, 339], [1134, 266, 753, 308]] },
        { name: "Temple door_atlas_16", frames: [[0, 1404, 437, 374], [439, 1404, 437, 374], [1440, 935, 496, 332], [0, 1070, 496, 332], [0, 0, 528, 365], [530, 0, 528, 365], [1060, 0, 597, 316], [1060, 318, 597, 316], [878, 1269, 415, 380], [1295, 1269, 415, 380], [1340, 1651, 455, 335], [0, 367, 788, 229], [0, 598, 788, 229], [0, 829, 718, 239], [720, 931, 718, 239], [0, 1780, 668, 241], [670, 1780, 668, 241], [1659, 0, 330, 523], [1440, 636, 561, 297], [790, 636, 606, 293]] },
        { name: "Temple door_atlas_17", frames: [[1516, 788, 386, 308], [681, 969, 386, 308], [1210, 438, 716, 173], [0, 0, 455, 335], [1210, 613, 716, 173], [1428, 1098, 336, 268], [0, 1182, 336, 268], [0, 438, 603, 209], [605, 438, 603, 209], [338, 1293, 830, 106], [1170, 1368, 830, 106], [0, 1931, 736, 106], [577, 1555, 736, 106], [1229, 1872, 665, 110], [457, 0, 765, 190], [1315, 1476, 665, 110], [1224, 0, 765, 190], [338, 1401, 575, 152], [835, 788, 679, 179], [0, 1555, 575, 152], [0, 1001, 679, 179], [730, 1663, 489, 158], [738, 1823, 489, 158], [0, 1709, 363, 220], [457, 192, 553, 244], [365, 1709, 363, 220], [1012, 192, 553, 244], [1069, 969, 357, 322], [0, 649, 350, 350], [352, 649, 481, 254], [1567, 192, 401, 213], [1229, 1663, 358, 207]] },
        { name: "Temple door_atlas_18", frames: [[2043, 0, 3, 385], [1756, 641, 10, 574], [1949, 849, 16, 764], [2019, 0, 22, 954], [1769, 189, 28, 1144], [1972, 0, 45, 989], [1907, 0, 63, 847], [1824, 0, 81, 748], [1046, 0, 98, 700], [1146, 681, 98, 397], [1799, 750, 98, 95], [922, 139, 116, 112], [501, 896, 133, 129], [740, 890, 151, 146], [331, 887, 168, 163], [143, 719, 186, 180], [1546, 641, 203, 197], [1546, 425, 221, 214], [0, 786, 134, 108], [893, 1015, 134, 108], [1450, 681, 87, 100], [636, 896, 87, 100], [740, 720, 197, 168], [939, 720, 197, 168], [350, 1060, 173, 11], [1799, 849, 148, 189], [525, 1071, 173, 11], [1246, 865, 148, 189], [175, 1052, 173, 20], [348, 487, 203, 220], [0, 1058, 173, 20], [771, 498, 203, 220], [143, 451, 173, 31], [566, 486, 203, 230], [0, 1025, 173, 31], [143, 487, 203, 230], [501, 1027, 173, 31], [348, 709, 194, 176], [676, 1038, 173, 31], [544, 718, 194, 176], [0, 0, 521, 137], [523, 0, 521, 137], [1146, 425, 198, 254], [1346, 425, 198, 254], [0, 901, 310, 60], [0, 963, 310, 60], [0, 139, 459, 130], [461, 139, 459, 130], [1146, 0, 337, 187], [1485, 0, 337, 187], [1558, 979, 107, 77], [323, 271, 241, 214], [1146, 189, 254, 234], [1029, 1015, 107, 77], [566, 271, 241, 213], [1402, 189, 254, 234], [0, 451, 141, 333], [1693, 840, 61, 253], [1658, 189, 70, 204], [1246, 681, 202, 182], [809, 271, 225, 225], [976, 498, 43, 44], [1039, 890, 102, 102], [1396, 979, 160, 93], [0, 271, 321, 178], [1450, 840, 241, 137], [893, 890, 144, 123]] }
    ];


    // symbols:



    (lib.CachedBmp_1007 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1006 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1005 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1004 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1003 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1002 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1001 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1000 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_999 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_998 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_997 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_994 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_993 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_992 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_991 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_990 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_989 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_988 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_987 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_986 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_985 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_984 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_983 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_982 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_981 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_980 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_979 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_978 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_977 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_976 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_975 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_974 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_973 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_972 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_971 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_970 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_969 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_968 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_967 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_966 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_965 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_964 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_963 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_962 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_961 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_960 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_959 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_958 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_957 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_956 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_955 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_954 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_953 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_952 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_951 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_950 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_949 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_948 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_947 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_946 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_945 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_944 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_943 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_942 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_941 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_940 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_939 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_938 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_937 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_936 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_935 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_934 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_933 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_932 = function () {
        this.initialize(ss["Temple door_atlas_6"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_931 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_930 = function () {
        this.initialize(ss["Temple door_atlas_6"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_929 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_928 = function () {
        this.initialize(ss["Temple door_atlas_6"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_927 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_926 = function () {
        this.initialize(ss["Temple door_atlas_7"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_925 = function () {
        this.initialize(ss["Temple door_atlas_8"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_924 = function () {
        this.initialize(ss["Temple door_atlas_5"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_923 = function () {
        this.initialize(ss["Temple door_atlas_8"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_922 = function () {
        this.initialize(ss["Temple door_atlas_5"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_921 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_920 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_919 = function () {
        this.initialize(ss["Temple door_atlas_8"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_918 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_917 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_916 = function () {
        this.initialize(ss["Temple door_atlas_8"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_915 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_914 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_913 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_912 = function () {
        this.initialize(ss["Temple door_atlas_7"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_911 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_910 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_909 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_908 = function () {
        this.initialize(ss["Temple door_atlas_7"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_907 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_906 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_905 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_904 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_903 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_902 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_901 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_900 = function () {
        this.initialize(ss["Temple door_atlas_10"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_899 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_898 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_897 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_896 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_895 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_894 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_893 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_892 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_891 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_890 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_889 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_888 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_887 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_886 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_885 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_884 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_883 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_882 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_881 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_880 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_879 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_878 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_877 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_876 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_875 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_874 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_873 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_872 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_871 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_870 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_869 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_868 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_867 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_866 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_865 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_864 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_863 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_862 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_861 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_860 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_859 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_858 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_857 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_856 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_855 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_854 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_853 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_852 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_851 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_850 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_849 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_848 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(55);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_847 = function () {
        this.initialize(img.CachedBmp_847);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 295, 2302);


    (lib.CachedBmp_846 = function () {
        this.initialize(img.CachedBmp_846);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 295, 2302);


    (lib.CachedBmp_845 = function () {
        this.initialize(img.CachedBmp_845);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 295, 2302);


    (lib.CachedBmp_844 = function () {
        this.initialize(img.CachedBmp_844);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 295, 2302);


    (lib.CachedBmp_843 = function () {
        this.initialize(img.CachedBmp_843);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 295, 2302);


    (lib.CachedBmp_842 = function () {
        this.initialize(img.CachedBmp_842);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 295, 2302);


    (lib.CachedBmp_841 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(56);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_840 = function () {
        this.initialize(img.CachedBmp_840);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1230, 2148);


    (lib.CachedBmp_838 = function () {
        this.initialize(ss["Temple door_atlas_"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_836 = function () {
        this.initialize(ss["Temple door_atlas_2"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_834 = function () {
        this.initialize(ss["Temple door_atlas_3"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_832 = function () {
        this.initialize(ss["Temple door_atlas_3"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_830 = function () {
        this.initialize(ss["Temple door_atlas_4"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_828 = function () {
        this.initialize(ss["Temple door_atlas_8"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_826 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_839 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(57);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_824 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_823 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(58);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_822 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_821 = function () {
        this.initialize(ss["Temple door_atlas_4"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_820 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_819 = function () {
        this.initialize(ss["Temple door_atlas_4"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_818 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_817 = function () {
        this.initialize(ss["Temple door_atlas_4"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_816 = function () {
        this.initialize(ss["Temple door_atlas_11"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_815 = function () {
        this.initialize(ss["Temple door_atlas_7"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_814 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_813 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_812 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_811 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_810 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_809 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_808 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(59);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_807 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(60);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_806 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(61);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_805 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(62);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap1 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(63);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover1 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover3 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover4 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover5 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover6 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover7 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover8 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(64);
    }).prototype = p = new cjs.Sprite();



    (lib.tdoorover9 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(65);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door1 = function () {
        this.initialize(ss["Temple door_atlas_18"]);
        this.gotoAndStop(66);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door10 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door11 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door12 = function () {
        this.initialize(ss["Temple door_atlas_15"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door13 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door14 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door15 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door16 = function () {
        this.initialize(ss["Temple door_atlas_13"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door2 = function () {
        this.initialize(ss["Temple door_atlas_17"]);
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door3 = function () {
        this.initialize(ss["Temple door_atlas_16"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door4 = function () {
        this.initialize(ss["Temple door_atlas_14"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door5 = function () {
        this.initialize(ss["Temple door_atlas_12"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door6 = function () {
        this.initialize(ss["Temple door_atlas_8"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door7 = function () {
        this.initialize(ss["Temple door_atlas_5"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door8 = function () {
        this.initialize(ss["Temple door_atlas_7"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.temple_door9 = function () {
        this.initialize(ss["Temple door_atlas_9"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.元件1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.Bitmap1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0, 0, 160, 93), null);


    // stage content:
    (lib.Templedoor = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
            for (i = 0; i < mline_text_tbox.length; i++) {
                mline_text_tbox[i].addEventListener("click", function () {
                    if (nextpage == 3 && current_page != nextpage) {
                        setTimeout(function () {
                            this.play();
                        }.bind(this), mainpages[current_page].disappeartime)
                    }
                    else if ((current_page == 3 && current_page != nextpage)||if_jumppage) {
                        this.play();
                    }
                }.bind(this))
            }
        }
        this.frame_42 = function () {
            this.stop();
        }
        this.frame_71 = function () {
            // this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(29).call(this.frame_71).wait(1));

        // star
        this.instance = new lib.CachedBmp_806();
        this.instance.setTransform(909.85, 1125.9, 0.5, 0.5);

        this.instance_1 = new lib.CachedBmp_805();
        this.instance_1.setTransform(893.7, 1112.4, 0.5, 0.5);

        this.instance_2 = new lib.CachedBmp_808();
        this.instance_2.setTransform(878.65, 1084.35, 0.5, 0.5);

        this.instance_3 = new lib.CachedBmp_807();
        this.instance_3.setTransform(869.55, 1074.4, 0.5, 0.5);

        this.instance_4 = new lib.CachedBmp_810();
        this.instance_4.setTransform(845.85, 1042.4, 0.5, 0.5);

        this.instance_5 = new lib.CachedBmp_809();
        this.instance_5.setTransform(844.9, 1035.9, 0.5, 0.5);

        this.instance_6 = new lib.CachedBmp_812();
        this.instance_6.setTransform(817.45, 1003.7, 0.5, 0.5);

        this.instance_7 = new lib.CachedBmp_811();
        this.instance_7.setTransform(820.25, 997.45, 0.5, 0.5);

        this.instance_8 = new lib.CachedBmp_814();
        this.instance_8.setTransform(810.3, 982.65, 0.5, 0.5);

        this.instance_9 = new lib.CachedBmp_813();
        this.instance_9.setTransform(795.65, 959, 0.5, 0.5);

        this.instance_10 = new lib.CachedBmp_816();
        this.instance_10.setTransform(803.25, 934.85, 0.5, 0.5);

        this.instance_11 = new lib.CachedBmp_815();
        this.instance_11.setTransform(770.95, 920.45, 0.5, 0.5);

        this.instance_12 = new lib.CachedBmp_818();
        this.instance_12.setTransform(787.65, 928.45, 0.5, 0.5);

        this.instance_13 = new lib.CachedBmp_817();
        this.instance_13.setTransform(750.25, 899.7, 0.5, 0.5);

        this.instance_14 = new lib.CachedBmp_820();
        this.instance_14.setTransform(740.5, 913.35, 0.5, 0.5);

        this.instance_15 = new lib.CachedBmp_819();
        this.instance_15.setTransform(729.45, 878.95, 0.5, 0.5);

        this.instance_16 = new lib.CachedBmp_822();
        this.instance_16.setTransform(730.55, 898.95, 0.5, 0.5);

        this.instance_17 = new lib.CachedBmp_821();
        this.instance_17.setTransform(708.3, 857.75, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }, 10).to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }] }, 1).to({ state: [{ t: this.instance_5 }, { t: this.instance_4 }] }, 1).to({ state: [{ t: this.instance_7 }, { t: this.instance_6 }] }, 1).to({ state: [{ t: this.instance_9 }, { t: this.instance_8 }] }, 1).to({ state: [{ t: this.instance_11 }, { t: this.instance_10 }] }, 1).to({ state: [{ t: this.instance_13 }, { t: this.instance_12 }] }, 1).to({ state: [{ t: this.instance_15 }, { t: this.instance_14 }] }, 1).to({ state: [{ t: this.instance_17 }, { t: this.instance_16 }] }, 1).to({ state: [] }, 1).wait(53));

        // flash
        this.instance_18 = new lib.CachedBmp_824();
        this.instance_18.setTransform(900.3, 1.3, 0.5, 0.5);

        this.instance_19 = new lib.CachedBmp_823();
        this.instance_19.setTransform(933.7, -4, 0.5, 0.5);

        this.instance_20 = new lib.CachedBmp_826();
        this.instance_20.setTransform(863.4, 1.3, 0.5, 0.5);

        this.instance_21 = new lib.CachedBmp_839();
        this.instance_21.setTransform(938.5, -4, 0.5, 0.5);

        this.instance_22 = new lib.CachedBmp_828();
        this.instance_22.setTransform(826.5, 1.3, 0.5, 0.5);

        this.instance_23 = new lib.CachedBmp_830();
        this.instance_23.setTransform(761.5, 1.3, 0.5, 0.5);

        this.instance_24 = new lib.CachedBmp_832();
        this.instance_24.setTransform(761.5, 1.3, 0.5, 0.5);

        this.instance_25 = new lib.CachedBmp_834();
        this.instance_25.setTransform(693, 1.3, 0.5, 0.5);

        this.instance_26 = new lib.CachedBmp_836();
        this.instance_26.setTransform(693, 1.3, 0.5, 0.5);

        this.instance_27 = new lib.CachedBmp_838();
        this.instance_27.setTransform(693, 1.3, 0.5, 0.5);

        this.instance_28 = new lib.CachedBmp_841();
        this.instance_28.setTransform(975.9, 817.15, 0.5, 0.5);

        this.instance_29 = new lib.CachedBmp_840();
        this.instance_29.setTransform(693, 1.3, 0.5, 0.5);

        this.instance_30 = new lib.CachedBmp_842();
        this.instance_30.setTransform(916.15, -4, 0.5, 0.5);

        this.instance_31 = new lib.CachedBmp_843();
        this.instance_31.setTransform(916.15, -4, 0.5, 0.5);

        this.instance_32 = new lib.CachedBmp_844();
        this.instance_32.setTransform(916.15, -4, 0.5, 0.5);

        this.instance_33 = new lib.CachedBmp_845();
        this.instance_33.setTransform(916.15, -4, 0.5, 0.5);

        this.instance_34 = new lib.CachedBmp_846();
        this.instance_34.setTransform(916.15, -4, 0.5, 0.5);

        this.instance_35 = new lib.CachedBmp_847();
        this.instance_35.setTransform(916.15, -4, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_19 }, { t: this.instance_18 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_20 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_22 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_23 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_24 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_25 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_26 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_27 }] }, 1).to({ state: [{ t: this.instance_21 }, { t: this.instance_29 }, { t: this.instance_28 }] }, 1).to({ state: [{ t: this.instance_30 }] }, 1).to({ state: [{ t: this.instance_31 }] }, 1).to({ state: [{ t: this.instance_32 }] }, 1).to({ state: [{ t: this.instance_33 }] }, 1).to({ state: [{ t: this.instance_34 }] }, 1).to({ state: [{ t: this.instance_35 }] }, 1).to({ state: [] }, 1).wait(56));

        // smoke
        this.instance_36 = new lib.CachedBmp_853();
        this.instance_36.setTransform(782.5, 1100.55, 0.5, 0.5);

        this.instance_37 = new lib.CachedBmp_852();
        this.instance_37.setTransform(781, 1068.2, 0.5, 0.5);

        this.instance_38 = new lib.CachedBmp_851();
        this.instance_38.setTransform(776.65, 1061.9, 0.5, 0.5);

        this.instance_39 = new lib.CachedBmp_850();
        this.instance_39.setTransform(1082.65, 1100.55, 0.5, 0.5);

        this.instance_40 = new lib.CachedBmp_849();
        this.instance_40.setTransform(1017.15, 1068.25, 0.5, 0.5);

        this.instance_41 = new lib.CachedBmp_848();
        this.instance_41.setTransform(1015.1, 1061.9, 0.5, 0.5);

        this.instance_42 = new lib.CachedBmp_859();
        this.instance_42.setTransform(700.95, 1087.9, 0.5, 0.5);

        this.instance_43 = new lib.CachedBmp_858();
        this.instance_43.setTransform(706.35, 1073.2, 0.5, 0.5);

        this.instance_44 = new lib.CachedBmp_857();
        this.instance_44.setTransform(680.1, 1064.9, 0.5, 0.5);

        this.instance_45 = new lib.CachedBmp_856();
        this.instance_45.setTransform(1049.1, 1087.9, 0.5, 0.5);

        this.instance_46 = new lib.CachedBmp_855();
        this.instance_46.setTransform(1030.95, 1073.2, 0.5, 0.5);

        this.instance_47 = new lib.CachedBmp_854();
        this.instance_47.setTransform(961.95, 1064.9, 0.5, 0.5);

        this.instance_48 = new lib.CachedBmp_865();
        this.instance_48.setTransform(638.7, 1115.9, 0.5, 0.5);

        this.instance_49 = new lib.CachedBmp_864();
        this.instance_49.setTransform(641.45, 1104.3, 0.5, 0.5);

        this.instance_50 = new lib.CachedBmp_863();
        this.instance_50.setTransform(616, 1065.45, 0.5, 0.5);

        this.instance_51 = new lib.CachedBmp_862();
        this.instance_51.setTransform(1050.6, 1115.9, 0.5, 0.5);

        this.instance_52 = new lib.CachedBmp_861();
        this.instance_52.setTransform(1032.9, 1104.3, 0.5, 0.5);

        this.instance_53 = new lib.CachedBmp_860();
        this.instance_53.setTransform(968.7, 1065.45, 0.5, 0.5);

        this.instance_54 = new lib.CachedBmp_873();
        this.instance_54.setTransform(726.4, 1120.7, 0.5, 0.5);

        this.instance_55 = new lib.CachedBmp_872();
        this.instance_55.setTransform(574.95, 1104.75, 0.5, 0.5);

        this.instance_56 = new lib.CachedBmp_871();
        this.instance_56.setTransform(550.95, 1098.6, 0.5, 0.5);

        this.instance_57 = new lib.CachedBmp_870();
        this.instance_57.setTransform(546.95, 1067.1, 0.5, 0.5);

        this.instance_58 = new lib.CachedBmp_869();
        this.instance_58.setTransform(1037.25, 1120.75, 0.5, 0.5);

        this.instance_59 = new lib.CachedBmp_868();
        this.instance_59.setTransform(1056.05, 1104.75, 0.5, 0.5);

        this.instance_60 = new lib.CachedBmp_867();
        this.instance_60.setTransform(1028.35, 1098.6, 0.5, 0.5);

        this.instance_61 = new lib.CachedBmp_866();
        this.instance_61.setTransform(1012.95, 1067.15, 0.5, 0.5);

        this.instance_62 = new lib.CachedBmp_879();
        this.instance_62.setTransform(512.4, 1130.9, 0.5, 0.5);

        this.instance_63 = new lib.CachedBmp_878();
        this.instance_63.setTransform(496.35, 1093.25, 0.5, 0.5);

        this.instance_64 = new lib.CachedBmp_877();
        this.instance_64.setTransform(484.4, 1069.55, 0.5, 0.5);

        this.instance_65 = new lib.CachedBmp_876();
        this.instance_65.setTransform(1073.8, 1130.95, 0.5, 0.5);

        this.instance_66 = new lib.CachedBmp_875();
        this.instance_66.setTransform(1039.95, 1093.25, 0.5, 0.5);

        this.instance_67 = new lib.CachedBmp_874();
        this.instance_67.setTransform(1019.3, 1069.6, 0.5, 0.5);

        this.instance_68 = new lib.CachedBmp_885();
        this.instance_68.setTransform(465.75, 1135.25, 0.5, 0.5);

        this.instance_69 = new lib.CachedBmp_884();
        this.instance_69.setTransform(470.8, 1073.4, 0.5, 0.5);

        this.instance_70 = new lib.CachedBmp_883();
        this.instance_70.setTransform(439.85, 1069.25, 0.5, 0.5);

        this.instance_71 = new lib.CachedBmp_882();
        this.instance_71.setTransform(1084.85, 1135.25, 0.5, 0.5);

        this.instance_72 = new lib.CachedBmp_881();
        this.instance_72.setTransform(1053.85, 1073.4, 0.5, 0.5);

        this.instance_73 = new lib.CachedBmp_880();
        this.instance_73.setTransform(1019.55, 1069.3, 0.5, 0.5);

        this.instance_74 = new lib.CachedBmp_891();
        this.instance_74.setTransform(428.6, 1142.4, 0.5, 0.5);

        this.instance_75 = new lib.CachedBmp_890();
        this.instance_75.setTransform(427.35, 1060.5, 0.5, 0.5);

        this.instance_76 = new lib.CachedBmp_889();
        this.instance_76.setTransform(402.7, 1051.65, 0.5, 0.5);

        this.instance_77 = new lib.CachedBmp_888();
        this.instance_77.setTransform(1074.9, 1142.4, 0.5, 0.5);

        this.instance_78 = new lib.CachedBmp_887();
        this.instance_78.setTransform(1076, 1060.5, 0.5, 0.5);

        this.instance_79 = new lib.CachedBmp_886();
        this.instance_79.setTransform(1019.55, 1051.65, 0.5, 0.5);

        this.instance_80 = new lib.CachedBmp_899();
        this.instance_80.setTransform(468.2, 1069.1, 0.5, 0.5);

        this.instance_81 = new lib.CachedBmp_898();
        this.instance_81.setTransform(419.15, 1041.7, 0.5, 0.5);

        this.instance_82 = new lib.CachedBmp_897();
        this.instance_82.setTransform(397.35, 1041.6, 0.5, 0.5);

        this.instance_83 = new lib.CachedBmp_896();
        this.instance_83.setTransform(360.15, 1024.7, 0.5, 0.5);

        this.instance_84 = new lib.CachedBmp_895();
        this.instance_84.setTransform(1149.05, 1069.1, 0.5, 0.5);

        this.instance_85 = new lib.CachedBmp_894();
        this.instance_85.setTransform(1400.7, 1041.7, 0.5, 0.5);

        this.instance_86 = new lib.CachedBmp_893();
        this.instance_86.setTransform(1074.9, 1041.6, 0.5, 0.5);

        this.instance_87 = new lib.CachedBmp_892();
        this.instance_87.setTransform(1019.55, 1024.7, 0.5, 0.5);

        this.instance_88 = new lib.CachedBmp_907();
        this.instance_88.setTransform(354.8, 1032.05, 0.5, 0.5);

        this.instance_89 = new lib.CachedBmp_906();
        this.instance_89.setTransform(475, 1105.8, 0.5, 0.5);

        this.instance_90 = new lib.CachedBmp_905();
        this.instance_90.setTransform(356.25, 1029.45, 0.5, 0.5);

        this.instance_91 = new lib.CachedBmp_904();
        this.instance_91.setTransform(330.3, 1007, 0.5, 0.5);

        this.instance_92 = new lib.CachedBmp_903();
        this.instance_92.setTransform(1395.95, 1032.1, 0.5, 0.5);

        this.instance_93 = new lib.CachedBmp_902();
        this.instance_93.setTransform(1183.4, 1105.8, 0.5, 0.5);

        this.instance_94 = new lib.CachedBmp_901();
        this.instance_94.setTransform(1062.7, 1029.45, 0.5, 0.5);

        this.instance_95 = new lib.CachedBmp_900();
        this.instance_95.setTransform(1019.55, 1007, 0.5, 0.5);

        this.instance_96 = new lib.CachedBmp_915();
        this.instance_96.setTransform(318.5, 1019.35, 0.5, 0.5);

        this.instance_97 = new lib.CachedBmp_914();
        this.instance_97.setTransform(467.95, 1105.85, 0.5, 0.5);

        this.instance_98 = new lib.CachedBmp_913();
        this.instance_98.setTransform(317.85, 1015.35, 0.5, 0.5);

        this.instance_99 = new lib.CachedBmp_912();
        this.instance_99.setTransform(288.45, 971, 0.5, 0.5);

        this.instance_100 = new lib.CachedBmp_911();
        this.instance_100.setTransform(1372.5, 1019.35, 0.5, 0.5);

        this.instance_101 = new lib.CachedBmp_910();
        this.instance_101.setTransform(1092.6, 1105.85, 0.5, 0.5);

        this.instance_102 = new lib.CachedBmp_909();
        this.instance_102.setTransform(1062.7, 1015.35, 0.5, 0.5);

        this.instance_103 = new lib.CachedBmp_908();
        this.instance_103.setTransform(1019.55, 971, 0.5, 0.5);

        this.instance_104 = new lib.CachedBmp_921();
        this.instance_104.setTransform(285.35, 989.35, 0.5, 0.5);

        this.instance_105 = new lib.CachedBmp_920();
        this.instance_105.setTransform(409.55, 979.55, 0.5, 0.5);

        this.instance_106 = new lib.CachedBmp_919();
        this.instance_106.setTransform(272.2, 990.55, 0.5, 0.5);

        this.instance_107 = new lib.CachedBmp_918();
        this.instance_107.setTransform(1062.7, 989.35, 0.5, 0.5);

        this.instance_108 = new lib.CachedBmp_917();
        this.instance_108.setTransform(1301.8, 979.55, 0.5, 0.5);

        this.instance_109 = new lib.CachedBmp_916();
        this.instance_109.setTransform(1019.55, 990.55, 0.5, 0.5);

        this.instance_110 = new lib.CachedBmp_925();
        this.instance_110.setTransform(257.3, 972.4, 0.5, 0.5);

        this.instance_111 = new lib.CachedBmp_924();
        this.instance_111.setTransform(245.55, 966, 0.5, 0.5);

        this.instance_112 = new lib.CachedBmp_923();
        this.instance_112.setTransform(1123.9, 972.4, 0.5, 0.5);

        this.instance_113 = new lib.CachedBmp_922();
        this.instance_113.setTransform(1019.55, 966, 0.5, 0.5);

        this.instance_114 = new lib.CachedBmp_929();
        this.instance_114.setTransform(256.55, 975.75, 0.5, 0.5);

        this.instance_115 = new lib.CachedBmp_928();
        this.instance_115.setTransform(217.45, 946.2, 0.5, 0.5);

        this.instance_116 = new lib.CachedBmp_927();
        this.instance_116.setTransform(1223.25, 975.75, 0.5, 0.5);

        this.instance_117 = new lib.CachedBmp_926();
        this.instance_117.setTransform(1140.7, 946.2, 0.5, 0.5);

        this.instance_118 = new lib.CachedBmp_933();
        this.instance_118.setTransform(200.55, 948.2, 0.5, 0.5);

        this.instance_119 = new lib.CachedBmp_932();
        this.instance_119.setTransform(193.25, 925.05, 0.5, 0.5);

        this.instance_120 = new lib.CachedBmp_931();
        this.instance_120.setTransform(1273.1, 948.2, 0.5, 0.5);

        this.instance_121 = new lib.CachedBmp_930();
        this.instance_121.setTransform(1210.8, 925.05, 0.5, 0.5);

        this.instance_122 = new lib.CachedBmp_941();
        this.instance_122.setTransform(585.75, 1197.3, 0.5, 0.5);

        this.instance_123 = new lib.CachedBmp_940();
        this.instance_123.setTransform(191.1, 931.6, 0.5, 0.5);

        this.instance_124 = new lib.CachedBmp_939();
        this.instance_124.setTransform(160.7, 954.3, 0.5, 0.5);

        this.instance_125 = new lib.CachedBmp_938();
        this.instance_125.setTransform(139.55, 914.3, 0.5, 0.5);

        this.instance_126 = new lib.CachedBmp_937();
        this.instance_126.setTransform(1246.5, 1197.3, 0.5, 0.5);

        this.instance_127 = new lib.CachedBmp_936();
        this.instance_127.setTransform(1630.6, 931.65, 0.5, 0.5);

        this.instance_128 = new lib.CachedBmp_935();
        this.instance_128.setTransform(1376.05, 954.3, 0.5, 0.5);

        this.instance_129 = new lib.CachedBmp_934();
        this.instance_129.setTransform(1388.95, 914.3, 0.5, 0.5);

        this.instance_130 = new lib.CachedBmp_949();
        this.instance_130.setTransform(579.15, 1197.3, 0.5, 0.5);

        this.instance_131 = new lib.CachedBmp_948();
        this.instance_131.setTransform(120.7, 992.8, 0.5, 0.5);

        this.instance_132 = new lib.CachedBmp_947();
        this.instance_132.setTransform(173.45, 915.45, 0.5, 0.5);

        this.instance_133 = new lib.CachedBmp_946();
        this.instance_133.setTransform(112.7, 935.95, 0.5, 0.5);

        this.instance_134 = new lib.CachedBmp_945();
        this.instance_134.setTransform(1253.15, 1197.3, 0.5, 0.5);

        this.instance_135 = new lib.CachedBmp_944();
        this.instance_135.setTransform(1488.05, 992.8, 0.5, 0.5);

        this.instance_136 = new lib.CachedBmp_943();
        this.instance_136.setTransform(1643.9, 915.45, 0.5, 0.5);

        this.instance_137 = new lib.CachedBmp_942();
        this.instance_137.setTransform(1401.55, 935.95, 0.5, 0.5);

        this.instance_138 = new lib.CachedBmp_957();
        this.instance_138.setTransform(561.5, 1202.65, 0.5, 0.5);

        this.instance_139 = new lib.CachedBmp_956();
        this.instance_139.setTransform(120.7, 1032.25, 0.5, 0.5);

        this.instance_140 = new lib.CachedBmp_955();
        this.instance_140.setTransform(166.85, 903.85, 0.5, 0.5);

        this.instance_141 = new lib.CachedBmp_954();
        this.instance_141.setTransform(77.8, 921.2, 0.5, 0.5);

        this.instance_142 = new lib.CachedBmp_953();
        this.instance_142.setTransform(1270.85, 1202.65, 0.5, 0.5);

        this.instance_143 = new lib.CachedBmp_952();
        this.instance_143.setTransform(1499.55, 1032.25, 0.5, 0.5);

        this.instance_144 = new lib.CachedBmp_951();
        this.instance_144.setTransform(1650.25, 903.9, 0.5, 0.5);

        this.instance_145 = new lib.CachedBmp_950();
        this.instance_145.setTransform(1417.2, 921.2, 0.5, 0.5);

        this.instance_146 = new lib.CachedBmp_965();
        this.instance_146.setTransform(548.2, 1206.9, 0.5, 0.5);

        this.instance_147 = new lib.CachedBmp_964();
        this.instance_147.setTransform(77.7, 1028.3, 0.5, 0.5);

        this.instance_148 = new lib.CachedBmp_963();
        this.instance_148.setTransform(182, 895.25, 0.5, 0.5);

        this.instance_149 = new lib.CachedBmp_962();
        this.instance_149.setTransform(47.2, 940.1, 0.5, 0.5);

        this.instance_150 = new lib.CachedBmp_961();
        this.instance_150.setTransform(1284.15, 1206.9, 0.5, 0.5);

        this.instance_151 = new lib.CachedBmp_960();
        this.instance_151.setTransform(1549.05, 1028.35, 0.5, 0.5);

        this.instance_152 = new lib.CachedBmp_959();
        this.instance_152.setTransform(1662.55, 895.25, 0.5, 0.5);

        this.instance_153 = new lib.CachedBmp_958();
        this.instance_153.setTransform(1450.55, 940.1, 0.5, 0.5);

        this.instance_154 = new lib.CachedBmp_969();
        this.instance_154.setTransform(67.2, 1013.1, 0.5, 0.5);

        this.instance_155 = new lib.CachedBmp_968();
        this.instance_155.setTransform(22.5, 957.1, 0.5, 0.5);

        this.instance_156 = new lib.CachedBmp_967();
        this.instance_156.setTransform(1587.65, 1013.1, 0.5, 0.5);

        this.instance_157 = new lib.CachedBmp_966();
        this.instance_157.setTransform(1492.65, 957.1, 0.5, 0.5);

        this.instance_158 = new lib.CachedBmp_973();
        this.instance_158.setTransform(90.3, 1024.75, 0.5, 0.5);

        this.instance_159 = new lib.CachedBmp_972();
        this.instance_159.setTransform(26.5, 967.35, 0.5, 0.5);

        this.instance_160 = new lib.CachedBmp_971();
        this.instance_160.setTransform(1580.45, 1024.75, 0.5, 0.5);

        this.instance_161 = new lib.CachedBmp_970();
        this.instance_161.setTransform(1576.3, 967.35, 0.5, 0.5);

        this.instance_162 = new lib.CachedBmp_975();
        this.instance_162.setTransform(28.7, 972.15, 0.5, 0.5);

        this.instance_163 = new lib.CachedBmp_974();
        this.instance_163.setTransform(1589.35, 972.15, 0.5, 0.5);

        this.instance_164 = new lib.CachedBmp_977();
        this.instance_164.setTransform(30.85, 999.7, 0.5, 0.5);

        this.instance_165 = new lib.CachedBmp_976();
        this.instance_165.setTransform(1605.4, 999.7, 0.5, 0.5);

        this.instance_166 = new lib.CachedBmp_979();
        this.instance_166.setTransform(23.1, 1020.75, 0.5, 0.5);

        this.instance_167 = new lib.CachedBmp_978();
        this.instance_167.setTransform(1677.25, 1020.75, 0.5, 0.5);

        this.instance_168 = new lib.CachedBmp_981();
        this.instance_168.setTransform(38.1, 1032.2, 0.5, 0.5);

        this.instance_169 = new lib.CachedBmp_980();
        this.instance_169.setTransform(1687.8, 1032.2, 0.5, 0.5);

        this.instance_170 = new lib.CachedBmp_983();
        this.instance_170.setTransform(3.85, 1082.7, 0.5, 0.5);

        this.instance_171 = new lib.CachedBmp_982();
        this.instance_171.setTransform(1816.45, 1082.7, 0.5, 0.5);

        this.instance_172 = new lib.CachedBmp_985();
        this.instance_172.setTransform(20.95, 1101.8, 0.5, 0.5);

        this.instance_173 = new lib.CachedBmp_984();
        this.instance_173.setTransform(1854.45, 1101.8, 0.5, 0.5);

        this.instance_174 = new lib.CachedBmp_987();
        this.instance_174.setTransform(66.8, 1102.7, 0.5, 0.5);

        this.instance_175 = new lib.CachedBmp_986();
        this.instance_175.setTransform(1784.9, 1102.7, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_41 }, { t: this.instance_40 }, { t: this.instance_39 }, { t: this.instance_38 }, { t: this.instance_37 }, { t: this.instance_36 }] }, 16).to({ state: [{ t: this.instance_47 }, { t: this.instance_46 }, { t: this.instance_45 }, { t: this.instance_44 }, { t: this.instance_43 }, { t: this.instance_42 }] }, 1).to({ state: [{ t: this.instance_53 }, { t: this.instance_52 }, { t: this.instance_51 }, { t: this.instance_50 }, { t: this.instance_49 }, { t: this.instance_48 }] }, 1).to({ state: [{ t: this.instance_61 }, { t: this.instance_60 }, { t: this.instance_59 }, { t: this.instance_58 }, { t: this.instance_57 }, { t: this.instance_56 }, { t: this.instance_55 }, { t: this.instance_54 }] }, 1).to({ state: [{ t: this.instance_67 }, { t: this.instance_66 }, { t: this.instance_65 }, { t: this.instance_64 }, { t: this.instance_63 }, { t: this.instance_62 }] }, 1).to({ state: [{ t: this.instance_73 }, { t: this.instance_72 }, { t: this.instance_71 }, { t: this.instance_70 }, { t: this.instance_69 }, { t: this.instance_68 }] }, 1).to({ state: [{ t: this.instance_79 }, { t: this.instance_78 }, { t: this.instance_77 }, { t: this.instance_76 }, { t: this.instance_75 }, { t: this.instance_74 }] }, 1).to({ state: [{ t: this.instance_87 }, { t: this.instance_86 }, { t: this.instance_85 }, { t: this.instance_84 }, { t: this.instance_83 }, { t: this.instance_82 }, { t: this.instance_81 }, { t: this.instance_80 }] }, 1).to({ state: [{ t: this.instance_95 }, { t: this.instance_94 }, { t: this.instance_93 }, { t: this.instance_92 }, { t: this.instance_91 }, { t: this.instance_90 }, { t: this.instance_89 }, { t: this.instance_88 }] }, 1).to({ state: [{ t: this.instance_103 }, { t: this.instance_102 }, { t: this.instance_101 }, { t: this.instance_100 }, { t: this.instance_99 }, { t: this.instance_98 }, { t: this.instance_97 }, { t: this.instance_96 }] }, 1).to({ state: [{ t: this.instance_109 }, { t: this.instance_108 }, { t: this.instance_107 }, { t: this.instance_106 }, { t: this.instance_105 }, { t: this.instance_104 }] }, 1).to({ state: [{ t: this.instance_113 }, { t: this.instance_112 }, { t: this.instance_111 }, { t: this.instance_110 }] }, 1).to({ state: [{ t: this.instance_117 }, { t: this.instance_116 }, { t: this.instance_115 }, { t: this.instance_114 }] }, 1).to({ state: [{ t: this.instance_121 }, { t: this.instance_120 }, { t: this.instance_119 }, { t: this.instance_118 }] }, 1).to({ state: [{ t: this.instance_129 }, { t: this.instance_128 }, { t: this.instance_127 }, { t: this.instance_126 }, { t: this.instance_125 }, { t: this.instance_124 }, { t: this.instance_123 }, { t: this.instance_122 }] }, 1).to({ state: [{ t: this.instance_137 }, { t: this.instance_136 }, { t: this.instance_135 }, { t: this.instance_134 }, { t: this.instance_133 }, { t: this.instance_132 }, { t: this.instance_131 }, { t: this.instance_130 }] }, 1).to({ state: [{ t: this.instance_145 }, { t: this.instance_144 }, { t: this.instance_143 }, { t: this.instance_142 }, { t: this.instance_141 }, { t: this.instance_140 }, { t: this.instance_139 }, { t: this.instance_138 }] }, 1).to({ state: [{ t: this.instance_153 }, { t: this.instance_152 }, { t: this.instance_151 }, { t: this.instance_150 }, { t: this.instance_149 }, { t: this.instance_148 }, { t: this.instance_147 }, { t: this.instance_146 }] }, 1).to({ state: [{ t: this.instance_157 }, { t: this.instance_156 }, { t: this.instance_155 }, { t: this.instance_154 }] }, 1).to({ state: [{ t: this.instance_161 }, { t: this.instance_160 }, { t: this.instance_159 }, { t: this.instance_158 }] }, 1).to({ state: [{ t: this.instance_163 }, { t: this.instance_162 }] }, 1).to({ state: [{ t: this.instance_165 }, { t: this.instance_164 }] }, 1).to({ state: [{ t: this.instance_167 }, { t: this.instance_166 }] }, 1).to({ state: [{ t: this.instance_169 }, { t: this.instance_168 }] }, 1).to({ state: [{ t: this.instance_171 }, { t: this.instance_170 }] }, 1).to({ state: [{ t: this.instance_173 }, { t: this.instance_172 }] }, 1).to({ state: [{ t: this.instance_175 }, { t: this.instance_174 }] }, 1).to({ state: [] }, 1).wait(29));

        // ball
        this.instance_176 = new lib.CachedBmp_988();
        this.instance_176.setTransform(894.95, 936.25, 0.5, 0.5);

        this.instance_177 = new lib.CachedBmp_989();
        this.instance_177.setTransform(899.35, 940.5, 0.5, 0.5);

        this.instance_178 = new lib.CachedBmp_990();
        this.instance_178.setTransform(903.7, 944.75, 0.5, 0.5);

        this.instance_179 = new lib.CachedBmp_991();
        this.instance_179.setTransform(908.1, 949, 0.5, 0.5);

        this.instance_180 = new lib.CachedBmp_992();
        this.instance_180.setTransform(912.5, 953.25, 0.5, 0.5);

        this.instance_181 = new lib.CachedBmp_993();
        this.instance_181.setTransform(916.9, 957.5, 0.5, 0.5);

        this.instance_182 = new lib.CachedBmp_994();
        this.instance_182.setTransform(921.25, 961.75, 0.5, 0.5);

        this.instance_183 = new lib.CachedBmp_997();
        this.instance_183.setTransform(925.65, 966, 0.5, 0.5);

        this.instance_184 = new lib.CachedBmp_998();
        this.instance_184.setTransform(925.65, 828.65, 0.5, 0.5);

        this.instance_185 = new lib.CachedBmp_999();
        this.instance_185.setTransform(925.65, 691.3, 0.5, 0.5);

        this.instance_186 = new lib.CachedBmp_1000();
        this.instance_186.setTransform(930.7, 615.05, 0.5, 0.5);

        this.instance_187 = new lib.CachedBmp_1001();
        this.instance_187.setTransform(935.75, 538.85, 0.5, 0.5);

        this.instance_188 = new lib.CachedBmp_1002();
        this.instance_188.setTransform(940.75, 462.6, 0.5, 0.5);

        this.instance_189 = new lib.CachedBmp_1003();
        this.instance_189.setTransform(945.8, 386.3, 0.5, 0.5);

        this.instance_190 = new lib.CachedBmp_1004();
        this.instance_190.setTransform(947.2, 324.55, 0.5, 0.5);

        this.instance_191 = new lib.CachedBmp_1005();
        this.instance_191.setTransform(948.6, 262.75, 0.5, 0.5);

        this.instance_192 = new lib.CachedBmp_1006();
        this.instance_192.setTransform(949.95, 200.9, 0.5, 0.5);

        this.instance_193 = new lib.CachedBmp_1007();
        this.instance_193.setTransform(951.35, 139.05, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_176 }] }, 51).to({ state: [{ t: this.instance_177 }] }, 1).to({ state: [{ t: this.instance_178 }] }, 1).to({ state: [{ t: this.instance_179 }] }, 1).to({ state: [{ t: this.instance_180 }] }, 1).to({ state: [{ t: this.instance_181 }] }, 1).to({ state: [{ t: this.instance_182 }] }, 1).to({ state: [{ t: this.instance_183 }] }, 1).to({ state: [{ t: this.instance_183 }] }, 1).to({ state: [{ t: this.instance_183 }] }, 1).to({ state: [{ t: this.instance_184 }] }, 1).to({ state: [{ t: this.instance_185 }] }, 1).to({ state: [{ t: this.instance_186 }] }, 1).to({ state: [{ t: this.instance_187 }] }, 1).to({ state: [{ t: this.instance_188 }] }, 1).to({ state: [{ t: this.instance_189 }] }, 1).to({ state: [{ t: this.instance_190 }] }, 1).to({ state: [{ t: this.instance_191 }] }, 1).to({ state: [{ t: this.instance_192 }] }, 1).to({ state: [{ t: this.instance_193 }] }, 1).to({ state: [] }, 1).wait(1));

        // tdoor_over
        this.instance_194 = new lib.tdoorover1();
        this.instance_194.setTransform(548, 774);

        this.instance_195 = new lib.tdoorover3();
        this.instance_195.setTransform(588, 795);

        this.instance_196 = new lib.tdoorover4();
        this.instance_196.setTransform(628, 817);

        this.instance_197 = new lib.tdoorover5();
        this.instance_197.setTransform(668, 838);

        this.instance_198 = new lib.tdoorover6();
        this.instance_198.setTransform(708, 859);

        this.instance_199 = new lib.tdoorover7();
        this.instance_199.setTransform(748, 880);

        this.instance_200 = new lib.tdoorover8();
        this.instance_200.setTransform(788, 897);

        this.instance_201 = new lib.tdoorover9();
        this.instance_201.setTransform(828, 918);

        this.instance_202 = new lib.元件1();
        this.instance_202.setTransform(949, 986.5, 1, 1, 0, 0, 0, 80, 46.5);
        this.instance_202._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_194 }] }, 43).to({ state: [{ t: this.instance_195 }] }, 1).to({ state: [{ t: this.instance_196 }] }, 1).to({ state: [{ t: this.instance_197 }] }, 1).to({ state: [{ t: this.instance_198 }] }, 1).to({ state: [{ t: this.instance_199 }] }, 1).to({ state: [{ t: this.instance_200 }] }, 1).to({ state: [{ t: this.instance_201 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [{ t: this.instance_202 }] }, 1).to({ state: [] }, 1).wait(13));
        this.timeline.addTween(cjs.Tween.get(this.instance_202).wait(51).to({ _off: false }, 0).wait(1).to({ scaleX: 0.873, scaleY: 0.8838, rotation: 25.713, x: 949.05, y: 986.55 }, 0).wait(1).to({ regY: 46.6, scaleX: 0.746, scaleY: 0.7675, rotation: 51.4304, x: 948.9 }, 0).wait(1).to({ regY: 46.5, scaleX: 0.6191, scaleY: 0.6513, rotation: 77.1446, y: 986.6 }, 0).wait(1).to({ regX: 80.1, scaleX: 0.4921, scaleY: 0.5351, rotation: 102.8561, x: 949.05 }, 0).wait(1).to({ regX: 80, regY: 46.4, scaleX: 0.3652, scaleY: 0.4189, rotation: 128.5695, x: 949 }, 0).wait(1).to({ regY: 46.3, scaleX: 0.2382, scaleY: 0.3027, rotation: 154.2863, y: 986.55 }, 0).wait(1).to({ regY: 46.4, scaleX: 0.1113, scaleY: 0.1865, rotation: 180, x: 949.05, y: 986.6 }, 0).to({ _off: true }, 1).wait(13));

        // temple_door
        this.instance_203 = new lib.temple_door1();
        this.instance_203.setTransform(886, 1079);

        this.instance_204 = new lib.temple_door2();
        this.instance_204.setTransform(778, 994);

        this.instance_205 = new lib.temple_door3();
        this.instance_205.setTransform(653, 909);

        this.instance_206 = new lib.temple_door4();
        this.instance_206.setTransform(591, 828);

        this.instance_207 = new lib.temple_door5();
        this.instance_207.setTransform(556, 753);

        this.instance_208 = new lib.temple_door6();
        this.instance_208.setTransform(492, 662);

        this.instance_209 = new lib.temple_door7();
        this.instance_209.setTransform(415, 596);

        this.instance_210 = new lib.temple_door8();
        this.instance_210.setTransform(390, 655);

        this.instance_211 = new lib.temple_door9();
        this.instance_211.setTransform(419, 739);

        this.instance_212 = new lib.temple_door10();
        this.instance_212.setTransform(548, 770);

        this.instance_213 = new lib.temple_door11();
        this.instance_213.setTransform(548, 824);

        this.instance_214 = new lib.temple_door12();
        this.instance_214.setTransform(574, 886);

        this.instance_215 = new lib.temple_door13();
        this.instance_215.setTransform(550, 825);

        this.instance_216 = new lib.temple_door14();
        this.instance_216.setTransform(549, 771);

        this.instance_217 = new lib.temple_door15();
        this.instance_217.setTransform(513, 701);

        this.instance_218 = new lib.temple_door16();
        this.instance_218.setTransform(549, 772);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_203 }] }, 15).to({ state: [{ t: this.instance_204 }] }, 1).to({ state: [{ t: this.instance_205 }] }, 1).to({ state: [{ t: this.instance_206 }] }, 1).to({ state: [{ t: this.instance_207 }] }, 1).to({ state: [{ t: this.instance_208 }] }, 1).to({ state: [{ t: this.instance_209 }] }, 1).to({ state: [{ t: this.instance_210 }] }, 1).to({ state: [{ t: this.instance_211 }] }, 1).to({ state: [{ t: this.instance_212 }] }, 1).to({ state: [{ t: this.instance_213 }] }, 1).to({ state: [{ t: this.instance_214 }] }, 1).to({ state: [{ t: this.instance_215 }] }, 1).to({ state: [{ t: this.instance_216 }] }, 1).to({ state: [{ t: this.instance_217 }] }, 1).to({ state: [{ t: this.instance_218 }] }, 1).to({ state: [{ t: this.instance_218 }] }, 12).to({ state: [] }, 1).wait(29));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1915, 1345.3);
    // library properties:
    lib.properties = {
        id: 'E4CA4655CA5C5541AC1CC60631A170E5',
        width: 1920,
        height: 1200,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            { src: "img/welcome/templedoor animate/CachedBmp_847.png", id: "CachedBmp_847" },
            { src: "img/welcome/templedoor animate/CachedBmp_846.png", id: "CachedBmp_846" },
            { src: "img/welcome/templedoor animate/CachedBmp_845.png", id: "CachedBmp_845" },
            { src: "img/welcome/templedoor animate/CachedBmp_844.png", id: "CachedBmp_844" },
            { src: "img/welcome/templedoor animate/CachedBmp_843.png", id: "CachedBmp_843" },
            { src: "img/welcome/templedoor animate/CachedBmp_842.png", id: "CachedBmp_842" },
            { src: "img/welcome/templedoor animate/CachedBmp_840.png", id: "CachedBmp_840" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_.png", id: "Temple door_atlas_" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_2.png", id: "Temple door_atlas_2" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_3.png", id: "Temple door_atlas_3" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_4.png", id: "Temple door_atlas_4" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_5.png", id: "Temple door_atlas_5" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_6.png", id: "Temple door_atlas_6" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_7.png", id: "Temple door_atlas_7" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_8.png", id: "Temple door_atlas_8" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_9.png", id: "Temple door_atlas_9" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_10.png", id: "Temple door_atlas_10" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_11.png", id: "Temple door_atlas_11" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_12.png", id: "Temple door_atlas_12" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_13.png", id: "Temple door_atlas_13" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_14.png", id: "Temple door_atlas_14" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_15.png", id: "Temple door_atlas_15" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_16.png", id: "Temple door_atlas_16" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_17.png", id: "Temple door_atlas_17" },
            { src: "img/welcome/templedoor animate/Temple door_atlas_18.png", id: "Temple door_atlas_18" }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (td_canvas) {
        createjs.Stage.call(this, td_canvas);
    }).prototype = p = new createjs.StageGL();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['E4CA4655CA5C5541AC1CC60631A170E5'] = {
        getStage: function () { return td_td_exportRoot.td_stage; },
        getLibrary: function () { return lib; },
        getSpriteSheet: function () { return ss; },
        getImages: function () { return img; }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


    an.td_makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', td_resizeCanvas);
        td_resizeCanvas();
        function td_resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            td_stage.scaleX = pRatio * sRatio;
            td_stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            td_stage.tickOnUpdate = false;
            td_stage.update();
            td_stage.tickOnUpdate = true;
        }
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;