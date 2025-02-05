var hb_canvas, hb_stage, hb_exportRoot, hb_anim_container, hb_overlay_container, hb_fnStartAnimation;
function hb_animateinit() {
    hb_canvas = document.getElementById("hbp-animatebox-canvas");
    hb_anim_container = document.getElementById("hbp-animatebox");
    hb_overlay_container = document.getElementById("hbp-animatebox_container");
    var comp = AdobeAn.getComposition("960B165A93374C4E84C2B3856697DA32");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { hb_handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { hb_handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function hb_handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function hb_handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    hb_exportRoot = new lib.handbookanimate();
    hb_stage = new lib.Stage(hb_canvas);
    //Registers the "tick" event listener.
    hb_fnStartAnimation = function () {
        hb_stage.addChild(hb_exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", hb_stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.hb_makeResponsive(false, 'both', false, 1, [hb_canvas, hb_anim_container, hb_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    hb_fnStartAnimation();
}

(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [
        { name: "handbook animate_atlas_", frames: [[0, 1410, 1638, 110], [0, 0, 1590, 270], [0, 1880, 1344, 81], [1366, 953, 266, 261], [1346, 1654, 284, 267], [0, 1522, 1236, 110], [0, 1963, 935, 80], [0, 272, 1193, 285], [0, 1634, 1169, 110], [937, 1963, 884, 80], [0, 559, 1128, 285], [0, 1746, 846, 132], [0, 846, 817, 280], [1238, 1522, 739, 130], [0, 1128, 736, 280], [1590, 635, 252, 261], [1632, 1654, 268, 267], [1640, 0, 408, 306], [1634, 898, 212, 286], [1590, 308, 211, 325], [1803, 308, 194, 321], [1640, 1186, 185, 325], [1113, 908, 251, 277], [1195, 272, 337, 290], [819, 846, 292, 310], [1130, 564, 247, 342], [1379, 564, 209, 387], [738, 1158, 262, 240]] },
        { name: "handbook animate_atlas_2", frames: [[977, 1623, 147, 71], [1736, 1663, 100, 58], [1783, 1967, 104, 46], [1815, 1140, 142, 83], [1284, 0, 241, 219], [753, 1901, 102, 56], [1891, 1918, 104, 42], [1908, 1318, 140, 81], [0, 1805, 228, 219], [1365, 233, 553, 80], [1527, 0, 228, 231], [505, 365, 471, 80], [1063, 1938, 139, 71], [1616, 1932, 95, 58], [1901, 1700, 98, 46], [864, 1748, 134, 83], [1757, 0, 228, 230], [1582, 1992, 97, 56], [1891, 1962, 99, 42], [952, 1346, 132, 81], [1365, 315, 387, 110], [1269, 1517, 107, 80], [1000, 1777, 151, 68], [1798, 1538, 104, 64], [1712, 1723, 106, 51], [1694, 906, 147, 91], [316, 226, 187, 254], [1692, 1520, 104, 65], [1530, 1605, 105, 61], [1694, 999, 142, 93], [1250, 938, 187, 104], [857, 1980, 132, 68], [0, 938, 185, 286], [1473, 1817, 91, 64], [1901, 1647, 93, 51], [1815, 1225, 129, 91], [1754, 315, 164, 254], [1619, 1673, 91, 65], [1640, 1869, 92, 61], [1801, 1443, 124, 93], [1250, 1044, 164, 104], [0, 615, 170, 321], [1439, 947, 153, 90], [304, 538, 146, 318], [1153, 1768, 109, 72], [1536, 1489, 109, 66], [1719, 571, 155, 102], [187, 914, 141, 304], [0, 239, 147, 374], [1133, 1692, 108, 74], [1927, 1522, 112, 74], [1719, 675, 149, 104], [1838, 1048, 136, 90], [318, 1412, 129, 318], [1594, 965, 97, 72], [1637, 1605, 97, 66], [1411, 1313, 137, 102], [1920, 232, 124, 304], [172, 538, 130, 374], [1295, 1960, 96, 74], [474, 1970, 99, 74], [1504, 1117, 132, 104], [952, 1429, 118, 90], [748, 1341, 112, 318], [1442, 1737, 84, 72], [1530, 1899, 84, 66], [1694, 1181, 119, 102], [473, 1570, 108, 304], [330, 858, 113, 374], [1497, 1974, 83, 74], [1442, 1585, 86, 74], [1684, 1414, 115, 104], [1681, 2015, 110, 33], [1305, 1452, 71, 60], [1536, 1557, 154, 46], [1442, 1661, 83, 74], [952, 1286, 198, 58], [1269, 1599, 96, 89], [1876, 571, 39, 142], [230, 1976, 242, 72], [864, 1643, 111, 103], [1976, 1048, 49, 174], [1162, 851, 286, 85], [473, 1876, 105, 92], [1987, 0, 58, 206], [1261, 427, 330, 98], [1216, 1355, 100, 95], [1341, 1150, 68, 238], [1280, 653, 308, 101], [1715, 1285, 95, 127], [1963, 1810, 83, 51], [1891, 1748, 75, 60], [824, 1019, 103, 231], [452, 738, 287, 111], [1411, 1150, 91, 161], [1393, 1974, 102, 63], [1809, 1833, 75, 68], [594, 1341, 152, 235], [1008, 538, 270, 125], [1133, 1069, 88, 195], [1069, 1543, 120, 74], [1528, 1737, 77, 78], [0, 1226, 201, 253], [1008, 395, 251, 141], [776, 1661, 86, 228], [1504, 1223, 188, 73], [1264, 1741, 80, 87], [505, 447, 234, 160], [1920, 538, 128, 177], [959, 665, 272, 119], [1378, 1477, 83, 97], [253, 0, 265, 224], [929, 1083, 202, 104], [774, 883, 180, 134], [452, 609, 283, 127], [1072, 1433, 85, 108], [782, 0, 279, 197], [580, 1901, 171, 56], [520, 221, 232, 100], [445, 858, 294, 135], [1927, 1401, 86, 119], [1378, 1417, 142, 58], [1233, 756, 275, 93], [1058, 247, 305, 146], [862, 1390, 88, 131], [1843, 930, 114, 116], [445, 995, 327, 121], [0, 1481, 316, 160], [1599, 820, 90, 143], [1946, 1225, 102, 90], [449, 1314, 143, 254], [741, 447, 265, 139], [1063, 0, 219, 245], [1527, 1668, 90, 67], [650, 1118, 172, 221], [741, 740, 213, 141], [0, 0, 251, 237], [149, 239, 165, 297], [1809, 1903, 80, 62], [445, 1118, 203, 194], [583, 1578, 161, 175], [1593, 427, 121, 208], [1566, 1817, 72, 80], [203, 1234, 236, 176], [956, 924, 138, 157], [520, 0, 260, 219], [983, 1847, 78, 131], [1405, 1817, 66, 100], [782, 199, 274, 164], [1223, 1150, 116, 140], [230, 1805, 241, 169], [1378, 1576, 62, 105], [1510, 756, 75, 86], [0, 1643, 316, 160], [1812, 1318, 94, 123], [741, 588, 216, 150], [774, 1019, 46, 78], [1346, 1741, 94, 74], [1280, 527, 253, 124], [1463, 1477, 71, 106], [583, 1755, 191, 144], [1176, 1842, 118, 65], [929, 1189, 194, 95], [1744, 1833, 63, 81], [1845, 815, 124, 113], [1640, 1811, 102, 56], [1838, 1663, 61, 78], [961, 1521, 106, 100], [862, 1333, 86, 48], [1535, 527, 41, 111], [1971, 815, 69, 113], [862, 1523, 97, 118], [1719, 781, 124, 123], [1096, 938, 152, 129], [1891, 1872, 101, 44], [1550, 1298, 163, 84], [505, 323, 112, 38], [857, 1927, 122, 45], [1439, 1039, 181, 76], [1904, 1598, 139, 47], [1716, 427, 29, 127], [1266, 1690, 143, 49], [956, 786, 204, 136], [689, 1959, 166, 56], [2001, 1647, 47, 84], [1204, 1909, 149, 49], [1590, 637, 127, 181], [1159, 1452, 144, 63], [1968, 1748, 78, 56], [316, 482, 159, 52], [1959, 930, 85, 116], [1086, 1355, 128, 76], [203, 1412, 111, 67], [1152, 1292, 171, 61], [864, 1833, 117, 92], [1355, 1817, 48, 141], [318, 1732, 151, 70], [1744, 1776, 97, 55], [1191, 1517, 76, 113], [1000, 1696, 131, 79], [580, 1959, 107, 89], [1063, 1847, 111, 89], [1550, 1384, 132, 103], [1296, 1830, 57, 67], [824, 1252, 96, 79], [1204, 1960, 89, 80], [1450, 851, 147, 94], [1607, 1740, 85, 69], [1713, 1932, 68, 71], [1870, 717, 154, 96], [1886, 1810, 75, 60], [1638, 1094, 153, 85], [1126, 1632, 138, 58], [1405, 1919, 123, 53], [1736, 1604, 108, 57], [1162, 786, 68, 52]] },
        { name: "handbook animate_atlas_3", frames: [[33, 169, 74, 29], [400, 258, 52, 30], [33, 100, 18, 27], [295, 284, 53, 29], [230, 177, 70, 29], [243, 286, 49, 30], [248, 112, 17, 27], [350, 290, 50, 29], [123, 136, 79, 29], [355, 219, 54, 33], [302, 186, 23, 24], [299, 216, 54, 34], [479, 0, 30, 90], [0, 200, 69, 29], [81, 265, 47, 33], [108, 327, 20, 24], [351, 254, 47, 34], [479, 92, 27, 90], [150, 0, 84, 40], [172, 177, 56, 37], [34, 331, 27, 20], [387, 138, 56, 39], [508, 92, 4, 55], [505, 244, 4, 136], [336, 105, 3, 41], [300, 0, 74, 40], [158, 216, 50, 37], [0, 336, 24, 20], [71, 206, 50, 39], [63, 331, 3, 55], [497, 298, 3, 136], [341, 105, 3, 41], [56, 96, 65, 40], [35, 247, 44, 37], [338, 343, 21, 20], [210, 238, 44, 39], [488, 333, 3, 55], [276, 318, 3, 136], [493, 333, 2, 41], [376, 179, 52, 38], [230, 208, 67, 28], [415, 0, 61, 47], [387, 81, 17, 10], [281, 346, 24, 14], [305, 105, 29, 79], [0, 179, 30, 18], [236, 0, 30, 110], [69, 327, 37, 22], [35, 231, 31, 14], [196, 324, 43, 25], [402, 290, 49, 29], [387, 96, 65, 40], [472, 244, 31, 52], [69, 300, 51, 25], [294, 315, 42, 29], [210, 216, 17, 16], [56, 55, 70, 39], [307, 346, 22, 15], [295, 252, 54, 30], [454, 96, 17, 37], [128, 55, 20, 32], [56, 46, 8, 7], [445, 138, 29, 71], [248, 141, 18, 21], [411, 219, 15, 14], [248, 164, 14, 11], [349, 42, 24, 33], [130, 265, 23, 21], [130, 292, 31, 45], [453, 298, 42, 33], [81, 247, 33, 16], [336, 157, 38, 57], [415, 49, 62, 45], [338, 321, 59, 20], [476, 184, 33, 58], [0, 0, 80, 44], [243, 318, 31, 39], [123, 105, 86, 29], [0, 100, 31, 77], [163, 292, 31, 44], [268, 0, 30, 102], [0, 286, 32, 48], [0, 231, 33, 53], [199, 42, 35, 58], [211, 112, 35, 63], [268, 105, 35, 68], [150, 42, 47, 61], [349, 81, 36, 74], [34, 286, 33, 43], [376, 0, 37, 79], [130, 339, 19, 24], [33, 138, 76, 29], [444, 333, 42, 15], [123, 206, 33, 57], [300, 42, 47, 61], [205, 279, 36, 43], [82, 0, 66, 53], [430, 211, 40, 45], [158, 255, 45, 35], [128, 89, 17, 14], [256, 238, 37, 46], [111, 167, 59, 37], [361, 343, 20, 20], [399, 321, 43, 27], [111, 138, 10, 10], [163, 338, 27, 17], [0, 46, 54, 52], [111, 150, 9, 9]] }
    ];


    // symbols:



    (lib.CachedBmp_1450 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1449 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1448 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1430 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1429 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1428 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1427 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1426 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1425 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1424 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1423 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1422 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1421 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1420 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1419 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1418 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1417 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1416 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1415 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1414 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1457 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1399 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1398 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1397 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1382 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1381 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1380 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1389 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1365 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1364 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1363 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1464 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1463 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1462 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1461 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1460 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1459 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1458 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1355 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1456 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1455 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1454 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1453 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1452 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1451 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1348 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1347 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1346 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1345 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1344 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1343 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1342 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1341 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1340 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1339 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1338 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1337 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1336 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1335 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1334 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1333 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1332 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1331 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1330 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1329 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1328 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1327 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1326 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1325 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1324 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1323 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1322 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1321 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1320 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1319 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1318 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1317 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1316 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1315 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1314 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1313 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1312 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1311 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1310 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1309 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1308 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1307 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1306 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1305 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1304 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1303 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1302 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1301 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1300 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1299 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1298 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1297 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1296 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1295 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1294 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1293 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1292 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1291 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1290 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1289 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(55);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1288 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(56);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1287 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(57);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1286 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(58);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1285 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1284 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1283 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(59);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1282 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(60);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1281 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(61);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1280 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1279 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1278 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1277 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1276 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(62);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1275 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(63);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1274 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1273 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(64);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1272 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(65);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1271 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(66);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1270 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(67);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1269 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(68);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1268 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1267 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1266 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(69);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1265 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(70);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1264 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(71);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1263 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1262 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1261 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1260 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1259 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1258 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1257 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1256 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(72);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1255 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(73);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1254 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1253 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1252 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(74);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1251 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(75);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1250 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1249 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1248 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(76);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1247 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(77);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1246 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1245 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1244 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(78);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1243 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(79);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1242 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(80);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1241 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1239 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(81);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1238 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(82);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1237 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(83);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1236 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1234 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(84);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1233 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(85);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1232 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(86);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1231 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1229 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(87);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1228 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(88);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1227 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(89);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1226 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(90);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1240 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(91);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1224 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(92);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1223 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(93);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1222 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(94);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1221 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(95);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1220 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(96);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1219 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(97);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1218 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(98);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1217 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(99);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1216 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(100);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1215 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(101);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1214 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(102);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1213 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(103);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1212 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(104);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1211 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(105);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1210 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(106);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1209 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1208 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(107);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1207 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(108);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1206 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(109);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1205 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(110);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1204 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(111);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1203 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(112);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1202 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(113);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1201 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(114);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1200 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(115);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1199 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(116);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1198 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(117);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1197 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(118);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1196 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(119);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1195 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(120);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1194 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1193 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(121);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1192 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(122);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1191 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(123);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1190 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(124);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1189 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1188 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(125);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1187 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(126);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1186 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(127);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1185 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(128);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1184 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1183 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(129);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1182 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(130);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1181 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(131);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1180 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(132);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1179 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1178 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(133);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1177 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(134);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1176 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(135);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1175 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(136);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1174 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(137);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1173 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(138);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1172 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(139);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1171 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(140);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1167 = function () {
        this.initialize(ss["handbook animate_atlas_"]);
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1166 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(141);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1165 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(142);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1164 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(143);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1163 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(144);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1162 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(145);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1161 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(146);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1160 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(147);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1159 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(148);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1158 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(149);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1157 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(150);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1156 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(151);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1155 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(152);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1154 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(153);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1153 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(154);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1152 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(155);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1151 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(156);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1150 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(157);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1149 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(158);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1148 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(159);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1146 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(160);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1145 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1144 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(161);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1143 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(162);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1142 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(163);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1141 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(164);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1140 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(165);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1139 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1138 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(166);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1137 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(167);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1136 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(168);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1135 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1134 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(55);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1133 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(56);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1132 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(57);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1131 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(58);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1130 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(59);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1128 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(60);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1127 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(61);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1126 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(62);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1125 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(63);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1124 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(64);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1123 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(65);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1122 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(169);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1121 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(66);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1120 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(67);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1118 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(170);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1117 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(68);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1116 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(69);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1114 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(171);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1113 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(70);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1112 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(71);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1111 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(72);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1109 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(172);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1108 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(73);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1107 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(74);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1106 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(75);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1119 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(76);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1104 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(173);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1103 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(77);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1102 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(78);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1101 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(174);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1100 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(79);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1099 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(175);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1098 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(176);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1097 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(80);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1096 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(177);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1095 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(81);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1094 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(178);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1093 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(179);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1092 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(180);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1091 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(181);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1090 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(82);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1089 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(182);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1088 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(183);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1087 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(184);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1086 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(185);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1085 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(83);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1084 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(186);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1083 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(187);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1082 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(188);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1081 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(189);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1080 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(84);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1079 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(190);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1078 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(191);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1077 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(192);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1076 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(193);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1075 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(85);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1074 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(86);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1073 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(194);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1072 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(195);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1071 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(196);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1070 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(87);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1069 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(88);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1068 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(197);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1067 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(198);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1066 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(199);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1065 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(89);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1064 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(90);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1063 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(91);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1062 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(200);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1061 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(201);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1060 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(202);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1059 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(203);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1058 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(204);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1057 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(205);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1056 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(206);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1055 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(92);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1054 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(207);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1053 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(208);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1052 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(209);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1051 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(93);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1050 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(210);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1049 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(94);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1048 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(211);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1047 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(95);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1046 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(96);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1045 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(97);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1044 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(212);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1043 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(98);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1042 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(99);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1041 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(100);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1040 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(213);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1039 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(101);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1038 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(102);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1037 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(214);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1036 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(103);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1035 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(104);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1034 = function () {
        this.initialize(ss["handbook animate_atlas_2"]);
        this.gotoAndStop(215);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1033 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(105);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1032 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(106);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_1031 = function () {
        this.initialize(ss["handbook animate_atlas_3"]);
        this.gotoAndStop(107);
    }).prototype = p = new cjs.Sprite();



    // stage content:
    (lib.handbookanimate = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
            for (i = 0; i < mline_text_tbox.length; i++) {
                mline_text_tbox[i].addEventListener("click", function () {
                    if (nextpage == 2 && current_page != nextpage) {
                        setTimeout(function () {
                            this.play()
                        }.bind(this), 3000)
                    }
                    else if (current_page == 2 && current_page != nextpage) {
                        setTimeout(function () {
                            this.gotoAndStop(0);
                        }.bind(this), mainpages[2].disappeartime)
                    }
                }.bind(this))
            }
        }
        this.frame_32 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(1));

        // small_blacks
        this.instance = new lib.CachedBmp_1031();
        this.instance.setTransform(498.3, 606.55, 0.5, 0.5);

        this.instance_1 = new lib.CachedBmp_1033();
        this.instance_1.setTransform(455.2, 567.65, 0.5, 0.5);

        this.instance_2 = new lib.CachedBmp_1032();
        this.instance_2.setTransform(487, 595.7, 0.5, 0.5);

        this.instance_3 = new lib.CachedBmp_1036();
        this.instance_3.setTransform(451.2, 565.15, 0.5, 0.5);

        this.instance_4 = new lib.CachedBmp_1035();
        this.instance_4.setTransform(491.75, 556.25, 0.5, 0.5);

        this.instance_5 = new lib.CachedBmp_1034();
        this.instance_5.setTransform(491.95, 585.45, 0.5, 0.5);

        this.instance_6 = new lib.CachedBmp_1039();
        this.instance_6.setTransform(447.2, 562.65, 0.5, 0.5);

        this.instance_7 = new lib.CachedBmp_1038();
        this.instance_7.setTransform(483.85, 541.2, 0.5, 0.5);

        this.instance_8 = new lib.CachedBmp_1037();
        this.instance_8.setTransform(504.5, 559.25, 0.5, 0.5);

        this.instance_9 = new lib.CachedBmp_1043();
        this.instance_9.setTransform(451.4, 553.5, 0.5, 0.5);

        this.instance_10 = new lib.CachedBmp_1042();
        this.instance_10.setTransform(671.1, 600, 0.5, 0.5);

        this.instance_11 = new lib.CachedBmp_1041();
        this.instance_11.setTransform(475.85, 530.25, 0.5, 0.5);

        this.instance_12 = new lib.CachedBmp_1040();
        this.instance_12.setTransform(506.3, 553.8, 0.5, 0.5);

        this.instance_13 = new lib.CachedBmp_1047();
        this.instance_13.setTransform(454.7, 542.2, 0.5, 0.5);

        this.instance_14 = new lib.CachedBmp_1046();
        this.instance_14.setTransform(659, 590.25, 0.5, 0.5);

        this.instance_15 = new lib.CachedBmp_1045();
        this.instance_15.setTransform(465.55, 523.75, 0.5, 0.5);

        this.instance_16 = new lib.CachedBmp_1044();
        this.instance_16.setTransform(508, 547.8, 0.5, 0.5);

        this.instance_17 = new lib.CachedBmp_1051();
        this.instance_17.setTransform(456.95, 528.8, 0.5, 0.5);

        this.instance_18 = new lib.CachedBmp_1050();
        this.instance_18.setTransform(660.7, 582.75, 0.5, 0.5);

        this.instance_19 = new lib.CachedBmp_1049();
        this.instance_19.setTransform(453.5, 510.95, 0.5, 0.5);

        this.instance_20 = new lib.CachedBmp_1048();
        this.instance_20.setTransform(511.9, 535.4, 0.5, 0.5);

        this.instance_21 = new lib.CachedBmp_1055();
        this.instance_21.setTransform(433.1, 513.8, 0.5, 0.5);

        this.instance_22 = new lib.CachedBmp_1054();
        this.instance_22.setTransform(662.4, 574.15, 0.5, 0.5);

        this.instance_23 = new lib.CachedBmp_1053();
        this.instance_23.setTransform(435.15, 490.3, 0.5, 0.5);

        this.instance_24 = new lib.CachedBmp_1052();
        this.instance_24.setTransform(518, 529.2, 0.5, 0.5);

        this.instance_25 = new lib.CachedBmp_1059();
        this.instance_25.setTransform(409.1, 478.1, 0.5, 0.5);

        this.instance_26 = new lib.CachedBmp_1058();
        this.instance_26.setTransform(664.1, 565.4, 0.5, 0.5);

        this.instance_27 = new lib.CachedBmp_1057();
        this.instance_27.setTransform(416.8, 469.7, 0.5, 0.5);

        this.instance_28 = new lib.CachedBmp_1056();
        this.instance_28.setTransform(522.35, 529.05, 0.5, 0.5);

        this.instance_29 = new lib.CachedBmp_1064();
        this.instance_29.setTransform(547.7, 675.35, 0.5, 0.5);

        this.instance_30 = new lib.CachedBmp_1063();
        this.instance_30.setTransform(382.55, 494.3, 0.5, 0.5);

        this.instance_31 = new lib.CachedBmp_1062();
        this.instance_31.setTransform(665.75, 556.5, 0.5, 0.5);

        this.instance_32 = new lib.CachedBmp_1061();
        this.instance_32.setTransform(398.45, 449.05, 0.5, 0.5);

        this.instance_33 = new lib.CachedBmp_1060();
        this.instance_33.setTransform(534.85, 522.6, 0.5, 0.5);

        this.instance_34 = new lib.CachedBmp_1069();
        this.instance_34.setTransform(550.3, 665.7, 0.5, 0.5);

        this.instance_35 = new lib.CachedBmp_1068();
        this.instance_35.setTransform(355.65, 500.5, 0.5, 0.5);

        this.instance_36 = new lib.CachedBmp_1067();
        this.instance_36.setTransform(698.75, 520.15, 0.5, 0.5);

        this.instance_37 = new lib.CachedBmp_1066();
        this.instance_37.setTransform(372.9, 436, 0.5, 0.5);

        this.instance_38 = new lib.CachedBmp_1065();
        this.instance_38.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_39 = new lib.CachedBmp_1074();
        this.instance_39.setTransform(552.9, 655.95, 0.5, 0.5);

        this.instance_40 = new lib.CachedBmp_1073();
        this.instance_40.setTransform(328.7, 502.05, 0.5, 0.5);

        this.instance_41 = new lib.CachedBmp_1072();
        this.instance_41.setTransform(731.4, 482.2, 0.5, 0.5);

        this.instance_42 = new lib.CachedBmp_1071();
        this.instance_42.setTransform(347.3, 422.5, 0.5, 0.5);

        this.instance_43 = new lib.CachedBmp_1070();
        this.instance_43.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_44 = new lib.CachedBmp_1079();
        this.instance_44.setTransform(558.4, 636.65, 0.5, 0.5);

        this.instance_45 = new lib.CachedBmp_1078();
        this.instance_45.setTransform(305, 515.9, 0.5, 0.5);

        this.instance_46 = new lib.CachedBmp_1077();
        this.instance_46.setTransform(685.5, 403.6, 0.5, 0.5);

        this.instance_47 = new lib.CachedBmp_1076();
        this.instance_47.setTransform(321.7, 408.45, 0.5, 0.5);

        this.instance_48 = new lib.CachedBmp_1075();
        this.instance_48.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_49 = new lib.CachedBmp_1084();
        this.instance_49.setTransform(563.85, 613.55, 0.5, 0.5);

        this.instance_50 = new lib.CachedBmp_1083();
        this.instance_50.setTransform(281.25, 528.55, 0.5, 0.5);

        this.instance_51 = new lib.CachedBmp_1082();
        this.instance_51.setTransform(673.35, 401.6, 0.5, 0.5);

        this.instance_52 = new lib.CachedBmp_1081();
        this.instance_52.setTransform(303.7, 401.1, 0.5, 0.5);

        this.instance_53 = new lib.CachedBmp_1080();
        this.instance_53.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_54 = new lib.CachedBmp_1089();
        this.instance_54.setTransform(614.9, 564.6, 0.5, 0.5);

        this.instance_55 = new lib.CachedBmp_1088();
        this.instance_55.setTransform(257.55, 538.35, 0.5, 0.5);

        this.instance_56 = new lib.CachedBmp_1087();
        this.instance_56.setTransform(661.2, 387.25, 0.5, 0.5);

        this.instance_57 = new lib.CachedBmp_1086();
        this.instance_57.setTransform(285.55, 392.25, 0.5, 0.5);

        this.instance_58 = new lib.CachedBmp_1085();
        this.instance_58.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_59 = new lib.CachedBmp_1094();
        this.instance_59.setTransform(641.4, 586.55, 0.5, 0.5);

        this.instance_60 = new lib.CachedBmp_1093();
        this.instance_60.setTransform(247.65, 537.2, 0.5, 0.5);

        this.instance_61 = new lib.CachedBmp_1092();
        this.instance_61.setTransform(649, 369.65, 0.5, 0.5);

        this.instance_62 = new lib.CachedBmp_1091();
        this.instance_62.setTransform(267.25, 383, 0.5, 0.5);

        this.instance_63 = new lib.CachedBmp_1090();
        this.instance_63.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_64 = new lib.CachedBmp_1099();
        this.instance_64.setTransform(667.85, 602.35, 0.5, 0.5);

        this.instance_65 = new lib.CachedBmp_1098();
        this.instance_65.setTransform(237.75, 535.85, 0.5, 0.5);

        this.instance_66 = new lib.CachedBmp_1097();
        this.instance_66.setTransform(653.3, 361.25, 0.5, 0.5);

        this.instance_67 = new lib.CachedBmp_1096();
        this.instance_67.setTransform(260.2, 380.25, 0.5, 0.5);

        this.instance_68 = new lib.CachedBmp_1095();
        this.instance_68.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_69 = new lib.CachedBmp_1104();
        this.instance_69.setTransform(694.35, 607.65, 0.5, 0.5);

        this.instance_70 = new lib.CachedBmp_1103();
        this.instance_70.setTransform(227.85, 534.45, 0.5, 0.5);

        this.instance_71 = new lib.CachedBmp_1102();
        this.instance_71.setTransform(657.5, 352.9, 0.5, 0.5);

        this.instance_72 = new lib.CachedBmp_1101();
        this.instance_72.setTransform(253.2, 377.45, 0.5, 0.5);

        this.instance_73 = new lib.CachedBmp_1100();
        this.instance_73.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_74 = new lib.CachedBmp_1109();
        this.instance_74.setTransform(706.4, 624.75, 0.5, 0.5);

        this.instance_75 = new lib.CachedBmp_1108();
        this.instance_75.setTransform(217.9, 532.95, 0.5, 0.5);

        this.instance_76 = new lib.CachedBmp_1107();
        this.instance_76.setTransform(661.75, 343.55, 0.5, 0.5);

        this.instance_77 = new lib.CachedBmp_1106();
        this.instance_77.setTransform(246.1, 374.6, 0.5, 0.5);

        this.instance_78 = new lib.CachedBmp_1119();
        this.instance_78.setTransform(575.55, 514.55, 0.5, 0.5);

        this.instance_79 = new lib.CachedBmp_1114();
        this.instance_79.setTransform(718.4, 641.8, 0.5, 0.5);

        this.instance_80 = new lib.CachedBmp_1113();
        this.instance_80.setTransform(207.95, 531.45, 0.5, 0.5);

        this.instance_81 = new lib.CachedBmp_1112();
        this.instance_81.setTransform(665.9, 329.55, 0.5, 0.5);

        this.instance_82 = new lib.CachedBmp_1111();
        this.instance_82.setTransform(239, 371.65, 0.5, 0.5);

        this.instance_83 = new lib.CachedBmp_1118();
        this.instance_83.setTransform(730.45, 658.65, 0.5, 0.5);

        this.instance_84 = new lib.CachedBmp_1117();
        this.instance_84.setTransform(667.4, 330.2, 0.5, 0.5);

        this.instance_85 = new lib.CachedBmp_1116();
        this.instance_85.setTransform(232.1, 379, 0.5, 0.5);

        this.instance_86 = new lib.CachedBmp_1122();
        this.instance_86.setTransform(742.45, 675.15, 0.5, 0.5);

        this.instance_87 = new lib.CachedBmp_1121();
        this.instance_87.setTransform(668.9, 330.85, 0.5, 0.5);

        this.instance_88 = new lib.CachedBmp_1120();
        this.instance_88.setTransform(225.1, 386.35, 0.5, 0.5);

        this.instance_89 = new lib.CachedBmp_1126();
        this.instance_89.setTransform(745.35, 692.9, 0.5, 0.5);

        this.instance_90 = new lib.CachedBmp_1125();
        this.instance_90.setTransform(670.4, 331.35, 0.5, 0.5);

        this.instance_91 = new lib.CachedBmp_1124();
        this.instance_91.setTransform(225.4, 389.7, 0.5, 0.5);

        this.instance_92 = new lib.CachedBmp_1123();
        this.instance_92.setTransform(575.9, 514.65, 0.5, 0.5);

        this.instance_93 = new lib.CachedBmp_1128();
        this.instance_93.setTransform(748.3, 710.55, 0.5, 0.5);

        this.instance_94 = new lib.CachedBmp_1127();
        this.instance_94.setTransform(225.6, 393, 0.5, 0.5);

        this.instance_95 = new lib.CachedBmp_1130();
        this.instance_95.setTransform(751.2, 717.45, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance }] }, 2).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }] }, 1).to({ state: [{ t: this.instance_8 }, { t: this.instance_7 }, { t: this.instance_6 }] }, 1).to({ state: [{ t: this.instance_12 }, { t: this.instance_11 }, { t: this.instance_10 }, { t: this.instance_9 }] }, 1).to({ state: [{ t: this.instance_16 }, { t: this.instance_15 }, { t: this.instance_14 }, { t: this.instance_13 }] }, 1).to({ state: [{ t: this.instance_20 }, { t: this.instance_19 }, { t: this.instance_18 }, { t: this.instance_17 }] }, 1).to({ state: [{ t: this.instance_24 }, { t: this.instance_23 }, { t: this.instance_22 }, { t: this.instance_21 }] }, 1).to({ state: [{ t: this.instance_28 }, { t: this.instance_27 }, { t: this.instance_26 }, { t: this.instance_25 }] }, 1).to({ state: [{ t: this.instance_33 }, { t: this.instance_32 }, { t: this.instance_31 }, { t: this.instance_30 }, { t: this.instance_29 }] }, 1).to({ state: [{ t: this.instance_38 }, { t: this.instance_37 }, { t: this.instance_36 }, { t: this.instance_35 }, { t: this.instance_34 }] }, 1).to({ state: [{ t: this.instance_43 }, { t: this.instance_42 }, { t: this.instance_41 }, { t: this.instance_40 }, { t: this.instance_39 }] }, 1).to({ state: [{ t: this.instance_48 }, { t: this.instance_47 }, { t: this.instance_46 }, { t: this.instance_45 }, { t: this.instance_44 }] }, 1).to({ state: [{ t: this.instance_53 }, { t: this.instance_52 }, { t: this.instance_51 }, { t: this.instance_50 }, { t: this.instance_49 }] }, 1).to({ state: [{ t: this.instance_58 }, { t: this.instance_57 }, { t: this.instance_56 }, { t: this.instance_55 }, { t: this.instance_54 }] }, 1).to({ state: [{ t: this.instance_63 }, { t: this.instance_62 }, { t: this.instance_61 }, { t: this.instance_60 }, { t: this.instance_59 }] }, 1).to({ state: [{ t: this.instance_68 }, { t: this.instance_67 }, { t: this.instance_66 }, { t: this.instance_65 }, { t: this.instance_64 }] }, 1).to({ state: [{ t: this.instance_73 }, { t: this.instance_72 }, { t: this.instance_71 }, { t: this.instance_70 }, { t: this.instance_69 }] }, 1).to({ state: [{ t: this.instance_78 }, { t: this.instance_77 }, { t: this.instance_76 }, { t: this.instance_75 }, { t: this.instance_74 }] }, 1).to({ state: [{ t: this.instance_78 }, { t: this.instance_82 }, { t: this.instance_81 }, { t: this.instance_80 }, { t: this.instance_79 }] }, 1).to({ state: [{ t: this.instance_78 }, { t: this.instance_85 }, { t: this.instance_84 }, { t: this.instance_83 }] }, 1).to({ state: [{ t: this.instance_78 }, { t: this.instance_88 }, { t: this.instance_87 }, { t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_92 }, { t: this.instance_91 }, { t: this.instance_90 }, { t: this.instance_89 }] }, 1).to({ state: [{ t: this.instance_94 }, { t: this.instance_93 }] }, 1).to({ state: [{ t: this.instance_95 }] }, 1).to({ state: [{ t: this.instance_95 }] }, 1).to({ state: [] }, 1).wait(5));

        // big_blacks
        this.instance_96 = new lib.CachedBmp_1131();
        this.instance_96.setTransform(496, 641.75, 0.5, 0.5);

        this.instance_97 = new lib.CachedBmp_1133();
        this.instance_97.setTransform(492.05, 639.65, 0.5, 0.5);

        this.instance_98 = new lib.CachedBmp_1132();
        this.instance_98.setTransform(497.95, 681.35, 0.5, 0.5);

        this.instance_99 = new lib.CachedBmp_1136();
        this.instance_99.setTransform(488.1, 637.5, 0.5, 0.5);

        this.instance_100 = new lib.CachedBmp_1135();
        this.instance_100.setTransform(494.05, 657.5, 0.5, 0.5);

        this.instance_101 = new lib.CachedBmp_1134();
        this.instance_101.setTransform(468.95, 584.75, 0.5, 0.5);

        this.instance_102 = new lib.CachedBmp_1140();
        this.instance_102.setTransform(484.15, 635.35, 0.5, 0.5);

        this.instance_103 = new lib.CachedBmp_1139();
        this.instance_103.setTransform(447.25, 619.05, 0.5, 0.5);

        this.instance_104 = new lib.CachedBmp_1138();
        this.instance_104.setTransform(493.65, 637.65, 0.5, 0.5);

        this.instance_105 = new lib.CachedBmp_1137();
        this.instance_105.setTransform(445.85, 563.2, 0.5, 0.5);

        this.instance_106 = new lib.CachedBmp_1145();
        this.instance_106.setTransform(643.9, 604.6, 0.5, 0.5);

        this.instance_107 = new lib.CachedBmp_1144();
        this.instance_107.setTransform(480.2, 633.2, 0.5, 0.5);

        this.instance_108 = new lib.CachedBmp_1143();
        this.instance_108.setTransform(411.5, 601.55, 0.5, 0.5);

        this.instance_109 = new lib.CachedBmp_1142();
        this.instance_109.setTransform(505.3, 621.9, 0.5, 0.5);

        this.instance_110 = new lib.CachedBmp_1141();
        this.instance_110.setTransform(430.4, 538.5, 0.5, 0.5);

        this.instance_111 = new lib.CachedBmp_1151();
        this.instance_111.setTransform(633.2, 590.75, 0.5, 0.5);

        this.instance_112 = new lib.CachedBmp_1150();
        this.instance_112.setTransform(483.55, 614.45, 0.5, 0.5);

        this.instance_113 = new lib.CachedBmp_1149();
        this.instance_113.setTransform(371.75, 572.8, 0.5, 0.5);

        this.instance_114 = new lib.CachedBmp_1148();
        this.instance_114.setTransform(516.95, 598.45, 0.5, 0.5);

        this.instance_115 = new lib.CachedBmp_1148();
        this.instance_115.setTransform(516.95, 598.45, 0.5, 0.5);

        this.instance_116 = new lib.CachedBmp_1146();
        this.instance_116.setTransform(383.85, 473.2, 0.5, 0.5);

        this.instance_117 = new lib.CachedBmp_1156();
        this.instance_117.setTransform(622.55, 576.9, 0.5, 0.5);

        this.instance_118 = new lib.CachedBmp_1155();
        this.instance_118.setTransform(486.2, 594.85, 0.5, 0.5);

        this.instance_119 = new lib.CachedBmp_1154();
        this.instance_119.setTransform(330.4, 540.95, 0.5, 0.5);

        this.instance_120 = new lib.CachedBmp_1153();
        this.instance_120.setTransform(521.45, 570.15, 0.5, 0.5);

        this.instance_121 = new lib.CachedBmp_1152();
        this.instance_121.setTransform(369.8, 457.7, 0.5, 0.5);

        this.instance_122 = new lib.CachedBmp_1161();
        this.instance_122.setTransform(611.85, 563.05, 0.5, 0.5);

        this.instance_123 = new lib.CachedBmp_1160();
        this.instance_123.setTransform(486.75, 574.15, 0.5, 0.5);

        this.instance_124 = new lib.CachedBmp_1159();
        this.instance_124.setTransform(309, 520.05, 0.5, 0.5);

        this.instance_125 = new lib.CachedBmp_1158();
        this.instance_125.setTransform(525.95, 541.8, 0.5, 0.5);

        this.instance_126 = new lib.CachedBmp_1157();
        this.instance_126.setTransform(355.75, 440.95, 0.5, 0.5);

        this.instance_127 = new lib.CachedBmp_1166();
        this.instance_127.setTransform(584.25, 536.05, 0.5, 0.5);

        this.instance_128 = new lib.CachedBmp_1165();
        this.instance_128.setTransform(501.05, 560.85, 0.5, 0.5);

        this.instance_129 = new lib.CachedBmp_1164();
        this.instance_129.setTransform(287.55, 495.7, 0.5, 0.5);

        this.instance_130 = new lib.CachedBmp_1163();
        this.instance_130.setTransform(530.35, 513.45, 0.5, 0.5);

        this.instance_131 = new lib.CachedBmp_1162();
        this.instance_131.setTransform(337.5, 415.65, 0.5, 0.5);

        this.instance_132 = new lib.CachedBmp_1174();
        this.instance_132.setTransform(556.15, 504.75, 0.5, 0.5);

        this.instance_133 = new lib.CachedBmp_1173();
        this.instance_133.setTransform(515.3, 546.3, 0.5, 0.5);

        this.instance_134 = new lib.CachedBmp_1172();
        this.instance_134.setTransform(266.05, 468.6, 0.5, 0.5);

        this.instance_135 = new lib.CachedBmp_1171();
        this.instance_135.setTransform(534.7, 484.95, 0.5, 0.5);

        this.instance_136 = new lib.CachedBmp_1171();
        this.instance_136.setTransform(534.7, 484.95, 0.5, 0.5);

        this.instance_137 = new lib.CachedBmp_1171();
        this.instance_137.setTransform(534.7, 484.95, 0.5, 0.5);

        this.instance_138 = new lib.CachedBmp_1171();
        this.instance_138.setTransform(534.7, 484.95, 0.5, 0.5);

        this.instance_139 = new lib.CachedBmp_1167();
        this.instance_139.setTransform(325.45, 400.95, 0.5, 0.5);

        this.instance_140 = new lib.CachedBmp_1179();
        this.instance_140.setTransform(528.05, 472.3, 0.5, 0.5);

        this.instance_141 = new lib.CachedBmp_1178();
        this.instance_141.setTransform(529.5, 529.3, 0.5, 0.5);

        this.instance_142 = new lib.CachedBmp_1177();
        this.instance_142.setTransform(244.55, 438.15, 0.5, 0.5);

        this.instance_143 = new lib.CachedBmp_1176();
        this.instance_143.setTransform(551.6, 461.65, 0.5, 0.5);

        this.instance_144 = new lib.CachedBmp_1175();
        this.instance_144.setTransform(323.45, 398.25, 0.5, 0.5);

        this.instance_145 = new lib.CachedBmp_1184();
        this.instance_145.setTransform(478.6, 440.45, 0.5, 0.5);

        this.instance_146 = new lib.CachedBmp_1183();
        this.instance_146.setTransform(543.65, 508.2, 0.5, 0.5);

        this.instance_147 = new lib.CachedBmp_1182();
        this.instance_147.setTransform(223, 407.45, 0.5, 0.5);

        this.instance_148 = new lib.CachedBmp_1181();
        this.instance_148.setTransform(568.45, 430.2, 0.5, 0.5);

        this.instance_149 = new lib.CachedBmp_1180();
        this.instance_149.setTransform(317.3, 382.6, 0.5, 0.5);

        this.instance_150 = new lib.CachedBmp_1189();
        this.instance_150.setTransform(429.1, 405.85, 0.5, 0.5);

        this.instance_151 = new lib.CachedBmp_1188();
        this.instance_151.setTransform(557.7, 485.7, 0.5, 0.5);

        this.instance_152 = new lib.CachedBmp_1187();
        this.instance_152.setTransform(266.75, 266.25, 0.5, 0.5);

        this.instance_153 = new lib.CachedBmp_1186();
        this.instance_153.setTransform(585.35, 391.45, 0.5, 0.5);

        this.instance_154 = new lib.CachedBmp_1185();
        this.instance_154.setTransform(334.65, 374.1, 0.5, 0.5);

        this.instance_155 = new lib.CachedBmp_1194();
        this.instance_155.setTransform(379.65, 367.7, 0.5, 0.5);

        this.instance_156 = new lib.CachedBmp_1193();
        this.instance_156.setTransform(582.85, 511.25, 0.5, 0.5);

        this.instance_157 = new lib.CachedBmp_1192();
        this.instance_157.setTransform(309.3, 268.1, 0.5, 0.5);

        this.instance_158 = new lib.CachedBmp_1191();
        this.instance_158.setTransform(613.25, 378.45, 0.5, 0.5);

        this.instance_159 = new lib.CachedBmp_1190();
        this.instance_159.setTransform(335.75, 374.2, 0.5, 0.5);

        this.instance_160 = new lib.CachedBmp_1199();
        this.instance_160.setTransform(350.4, 404.25, 0.5, 0.5);

        this.instance_161 = new lib.CachedBmp_1198();
        this.instance_161.setTransform(607.95, 524.55, 0.5, 0.5);

        this.instance_162 = new lib.CachedBmp_1197();
        this.instance_162.setTransform(350.15, 262.65, 0.5, 0.5);

        this.instance_163 = new lib.CachedBmp_1196();
        this.instance_163.setTransform(641.1, 363.75, 0.5, 0.5);

        this.instance_164 = new lib.CachedBmp_1195();
        this.instance_164.setTransform(336.7, 374.2, 0.5, 0.5);

        this.instance_165 = new lib.CachedBmp_1204();
        this.instance_165.setTransform(321.05, 436.9, 0.5, 0.5);

        this.instance_166 = new lib.CachedBmp_1203();
        this.instance_166.setTransform(633.05, 528, 0.5, 0.5);

        this.instance_167 = new lib.CachedBmp_1202();
        this.instance_167.setTransform(398.55, 245, 0.5, 0.5);

        this.instance_168 = new lib.CachedBmp_1201();
        this.instance_168.setTransform(669, 347.75, 0.5, 0.5);

        this.instance_169 = new lib.CachedBmp_1200();
        this.instance_169.setTransform(337.5, 374.2, 0.5, 0.5);

        this.instance_170 = new lib.CachedBmp_1209();
        this.instance_170.setTransform(291.7, 459.75, 0.5, 0.5);

        this.instance_171 = new lib.CachedBmp_1208();
        this.instance_171.setTransform(658.1, 527.45, 0.5, 0.5);

        this.instance_172 = new lib.CachedBmp_1207();
        this.instance_172.setTransform(446.85, 225.1, 0.5, 0.5);

        this.instance_173 = new lib.CachedBmp_1206();
        this.instance_173.setTransform(696.9, 331.25, 0.5, 0.5);

        this.instance_174 = new lib.CachedBmp_1205();
        this.instance_174.setTransform(338.25, 374.1, 0.5, 0.5);

        this.instance_175 = new lib.CachedBmp_1214();
        this.instance_175.setTransform(295.15, 496.65, 0.5, 0.5);

        this.instance_176 = new lib.CachedBmp_1213();
        this.instance_176.setTransform(676.95, 543.2, 0.5, 0.5);

        this.instance_177 = new lib.CachedBmp_1212();
        this.instance_177.setTransform(494.7, 205.25, 0.5, 0.5);

        this.instance_178 = new lib.CachedBmp_1211();
        this.instance_178.setTransform(758.1, 324.45, 0.5, 0.5);

        this.instance_179 = new lib.CachedBmp_1210();
        this.instance_179.setTransform(339.9, 374.1, 0.5, 0.5);

        this.instance_180 = new lib.CachedBmp_1219();
        this.instance_180.setTransform(298.25, 533.2, 0.5, 0.5);

        this.instance_181 = new lib.CachedBmp_1218();
        this.instance_181.setTransform(695.7, 557.95, 0.5, 0.5);

        this.instance_182 = new lib.CachedBmp_1217();
        this.instance_182.setTransform(484.6, 196.25, 0.5, 0.5);

        this.instance_183 = new lib.CachedBmp_1216();
        this.instance_183.setTransform(819.35, 294.1, 0.5, 0.5);

        this.instance_184 = new lib.CachedBmp_1215();
        this.instance_184.setTransform(341.25, 374, 0.5, 0.5);

        this.instance_185 = new lib.CachedBmp_1224();
        this.instance_185.setTransform(301.1, 568.75, 0.5, 0.5);

        this.instance_186 = new lib.CachedBmp_1223();
        this.instance_186.setTransform(715.15, 571.2, 0.5, 0.5);

        this.instance_187 = new lib.CachedBmp_1222();
        this.instance_187.setTransform(474.4, 187.25, 0.5, 0.5);

        this.instance_188 = new lib.CachedBmp_1221();
        this.instance_188.setTransform(836.35, 296.45, 0.5, 0.5);

        this.instance_189 = new lib.CachedBmp_1220();
        this.instance_189.setTransform(342.1, 373.85, 0.5, 0.5);

        this.instance_190 = new lib.CachedBmp_1229();
        this.instance_190.setTransform(303.85, 604.15, 0.5, 0.5);

        this.instance_191 = new lib.CachedBmp_1228();
        this.instance_191.setTransform(733.25, 582.6, 0.5, 0.5);

        this.instance_192 = new lib.CachedBmp_1227();
        this.instance_192.setTransform(464.15, 178.25, 0.5, 0.5);

        this.instance_193 = new lib.CachedBmp_1226();
        this.instance_193.setTransform(853.35, 298.75, 0.5, 0.5);

        this.instance_194 = new lib.CachedBmp_1240();
        this.instance_194.setTransform(342.6, 373.45, 0.5, 0.5);

        this.instance_195 = new lib.CachedBmp_1234();
        this.instance_195.setTransform(305.05, 622.35, 0.5, 0.5);

        this.instance_196 = new lib.CachedBmp_1233();
        this.instance_196.setTransform(752, 590.8, 0.5, 0.5);

        this.instance_197 = new lib.CachedBmp_1232();
        this.instance_197.setTransform(453.75, 168.75, 0.5, 0.5);

        this.instance_198 = new lib.CachedBmp_1231();
        this.instance_198.setTransform(869.95, 301.1, 0.5, 0.5);

        this.instance_199 = new lib.CachedBmp_1239();
        this.instance_199.setTransform(306.2, 640.55, 0.5, 0.5);

        this.instance_200 = new lib.CachedBmp_1238();
        this.instance_200.setTransform(790.45, 588.8, 0.5, 0.5);

        this.instance_201 = new lib.CachedBmp_1237();
        this.instance_201.setTransform(443.2, 152.95, 0.5, 0.5);

        this.instance_202 = new lib.CachedBmp_1236();
        this.instance_202.setTransform(885.95, 303.35, 0.5, 0.5);

        this.instance_203 = new lib.CachedBmp_1244();
        this.instance_203.setTransform(307.3, 658.75, 0.5, 0.5);

        this.instance_204 = new lib.CachedBmp_1243();
        this.instance_204.setTransform(828.8, 586.85, 0.5, 0.5);

        this.instance_205 = new lib.CachedBmp_1242();
        this.instance_205.setTransform(432.6, 133.2, 0.5, 0.5);

        this.instance_206 = new lib.CachedBmp_1241();
        this.instance_206.setTransform(889.1, 305.05, 0.5, 0.5);

        this.instance_207 = new lib.CachedBmp_1249();
        this.instance_207.setTransform(308.3, 676.9, 0.5, 0.5);

        this.instance_208 = new lib.CachedBmp_1248();
        this.instance_208.setTransform(867.2, 584.8, 0.5, 0.5);

        this.instance_209 = new lib.CachedBmp_1247();
        this.instance_209.setTransform(436.55, 134.1, 0.5, 0.5);

        this.instance_210 = new lib.CachedBmp_1246();
        this.instance_210.setTransform(892.2, 306.75, 0.5, 0.5);

        this.instance_211 = new lib.CachedBmp_1245();
        this.instance_211.setTransform(363.7, 373.5, 0.5, 0.5);

        this.instance_212 = new lib.CachedBmp_1253();
        this.instance_212.setTransform(309.05, 694.65, 0.5, 0.5);

        this.instance_213 = new lib.CachedBmp_1252();
        this.instance_213.setTransform(905.55, 582.75, 0.5, 0.5);

        this.instance_214 = new lib.CachedBmp_1251();
        this.instance_214.setTransform(440.35, 134.9, 0.5, 0.5);

        this.instance_215 = new lib.CachedBmp_1250();
        this.instance_215.setTransform(895.3, 308.4, 0.5, 0.5);

        this.instance_216 = new lib.CachedBmp_1256();
        this.instance_216.setTransform(943.9, 580.7, 0.5, 0.5);

        this.instance_217 = new lib.CachedBmp_1255();
        this.instance_217.setTransform(443.5, 135.65, 0.5, 0.5);

        this.instance_218 = new lib.CachedBmp_1254();
        this.instance_218.setTransform(898.45, 310.05, 0.5, 0.5);

        this.instance_219 = new lib.CachedBmp_1259();
        this.instance_219.setTransform(982.3, 578.65, 0.5, 0.5);

        this.instance_220 = new lib.CachedBmp_1258();
        this.instance_220.setTransform(446.25, 136.3, 0.5, 0.5);

        this.instance_221 = new lib.CachedBmp_1257();
        this.instance_221.setTransform(901.55, 311.7, 0.5, 0.5);

        this.instance_222 = new lib.CachedBmp_1260();
        this.instance_222.setTransform(448.65, 136.5, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_96 }] }, 3).to({ state: [{ t: this.instance_98 }, { t: this.instance_97 }] }, 1).to({ state: [{ t: this.instance_101 }, { t: this.instance_100 }, { t: this.instance_99 }] }, 1).to({ state: [{ t: this.instance_105 }, { t: this.instance_104 }, { t: this.instance_103 }, { t: this.instance_102 }] }, 1).to({ state: [{ t: this.instance_110 }, { t: this.instance_109 }, { t: this.instance_108 }, { t: this.instance_107 }, { t: this.instance_106 }] }, 1).to({ state: [{ t: this.instance_116 }, { t: this.instance_115 }, { t: this.instance_114 }, { t: this.instance_113 }, { t: this.instance_112 }, { t: this.instance_111 }] }, 1).to({ state: [{ t: this.instance_121 }, { t: this.instance_120 }, { t: this.instance_119 }, { t: this.instance_118 }, { t: this.instance_117 }] }, 1).to({ state: [{ t: this.instance_126 }, { t: this.instance_125 }, { t: this.instance_124 }, { t: this.instance_123 }, { t: this.instance_122 }] }, 1).to({ state: [{ t: this.instance_131 }, { t: this.instance_130 }, { t: this.instance_129 }, { t: this.instance_128 }, { t: this.instance_127 }] }, 1).to({ state: [{ t: this.instance_139 }, { t: this.instance_138 }, { t: this.instance_137 }, { t: this.instance_136 }, { t: this.instance_135 }, { t: this.instance_134 }, { t: this.instance_133 }, { t: this.instance_132 }] }, 1).to({ state: [{ t: this.instance_144 }, { t: this.instance_143 }, { t: this.instance_142 }, { t: this.instance_141 }, { t: this.instance_140 }] }, 1).to({ state: [{ t: this.instance_149 }, { t: this.instance_148 }, { t: this.instance_147 }, { t: this.instance_146 }, { t: this.instance_145 }] }, 1).to({ state: [{ t: this.instance_154 }, { t: this.instance_153 }, { t: this.instance_152 }, { t: this.instance_151 }, { t: this.instance_150 }] }, 1).to({ state: [{ t: this.instance_159 }, { t: this.instance_158 }, { t: this.instance_157 }, { t: this.instance_156 }, { t: this.instance_155 }] }, 1).to({ state: [{ t: this.instance_164 }, { t: this.instance_163 }, { t: this.instance_162 }, { t: this.instance_161 }, { t: this.instance_160 }] }, 1).to({ state: [{ t: this.instance_169 }, { t: this.instance_168 }, { t: this.instance_167 }, { t: this.instance_166 }, { t: this.instance_165 }] }, 1).to({ state: [{ t: this.instance_174 }, { t: this.instance_173 }, { t: this.instance_172 }, { t: this.instance_171 }, { t: this.instance_170 }] }, 1).to({ state: [{ t: this.instance_179 }, { t: this.instance_178 }, { t: this.instance_177 }, { t: this.instance_176 }, { t: this.instance_175 }] }, 1).to({ state: [{ t: this.instance_184 }, { t: this.instance_183 }, { t: this.instance_182 }, { t: this.instance_181 }, { t: this.instance_180 }] }, 1).to({ state: [{ t: this.instance_189 }, { t: this.instance_188 }, { t: this.instance_187 }, { t: this.instance_186 }, { t: this.instance_185 }] }, 1).to({ state: [{ t: this.instance_194 }, { t: this.instance_193 }, { t: this.instance_192 }, { t: this.instance_191 }, { t: this.instance_190 }] }, 1).to({ state: [{ t: this.instance_194 }, { t: this.instance_198 }, { t: this.instance_197 }, { t: this.instance_196 }, { t: this.instance_195 }] }, 1).to({ state: [{ t: this.instance_194 }, { t: this.instance_202 }, { t: this.instance_201 }, { t: this.instance_200 }, { t: this.instance_199 }] }, 1).to({ state: [{ t: this.instance_194 }, { t: this.instance_206 }, { t: this.instance_205 }, { t: this.instance_204 }, { t: this.instance_203 }] }, 1).to({ state: [{ t: this.instance_211 }, { t: this.instance_210 }, { t: this.instance_209 }, { t: this.instance_208 }, { t: this.instance_207 }] }, 1).to({ state: [{ t: this.instance_215 }, { t: this.instance_214 }, { t: this.instance_213 }, { t: this.instance_212 }] }, 1).to({ state: [{ t: this.instance_218 }, { t: this.instance_217 }, { t: this.instance_216 }] }, 1).to({ state: [{ t: this.instance_221 }, { t: this.instance_220 }, { t: this.instance_219 }] }, 1).to({ state: [{ t: this.instance_222 }] }, 1).to({ state: [] }, 1).wait(1));

        // handbook
        this.instance_223 = new lib.CachedBmp_1277();
        this.instance_223.setTransform(472.15, 514.95, 0.5, 0.5);

        this.instance_224 = new lib.CachedBmp_1276();
        this.instance_224.setTransform(445.3, 655.3, 0.5, 0.5);

        this.instance_225 = new lib.CachedBmp_1275();
        this.instance_225.setTransform(448.5, 522.5, 0.5, 0.5);

        this.instance_226 = new lib.CachedBmp_1274();
        this.instance_226.setTransform(463.25, 691.05, 0.5, 0.5);

        this.instance_227 = new lib.CachedBmp_1273();
        this.instance_227.setTransform(453.35, 682.9, 0.5, 0.5);

        this.instance_228 = new lib.CachedBmp_1272();
        this.instance_228.setTransform(453.15, 675.8, 0.5, 0.5);

        this.instance_229 = new lib.CachedBmp_1271();
        this.instance_229.setTransform(444.7, 668.3, 0.5, 0.5);

        this.instance_230 = new lib.CachedBmp_1270();
        this.instance_230.setTransform(504.3, 530.55, 0.5, 0.5);

        this.instance_231 = new lib.CachedBmp_1269();
        this.instance_231.setTransform(504.3, 515, 0.5, 0.5);

        this.instance_232 = new lib.CachedBmp_1268();
        this.instance_232.setTransform(504.35, 668.75, 0.5, 0.5);

        this.instance_233 = new lib.CachedBmp_1267();
        this.instance_233.setTransform(521.75, 690.75, 0.5, 0.5);

        this.instance_234 = new lib.CachedBmp_1266();
        this.instance_234.setTransform(511.85, 682.65, 0.5, 0.5);

        this.instance_235 = new lib.CachedBmp_1265();
        this.instance_235.setTransform(512.35, 675.95, 0.5, 0.5);

        this.instance_236 = new lib.CachedBmp_1264();
        this.instance_236.setTransform(504.05, 668.05, 0.5, 0.5);

        this.instance_237 = new lib.CachedBmp_1263();
        this.instance_237.setTransform(501.45, 660.6, 0.5, 0.5);

        this.instance_238 = new lib.CachedBmp_1262();
        this.instance_238.setTransform(501.45, 610, 0.5, 0.5);

        this.instance_239 = new lib.CachedBmp_1261();
        this.instance_239.setTransform(501.55, 603.85, 0.5, 0.5);

        this.instance_240 = new lib.CachedBmp_1294();
        this.instance_240.setTransform(467.55, 514.95, 0.5, 0.5);

        this.instance_241 = new lib.CachedBmp_1293();
        this.instance_241.setTransform(436.75, 655.3, 0.5, 0.5);

        this.instance_242 = new lib.CachedBmp_1292();
        this.instance_242.setTransform(440.4, 522.5, 0.5, 0.5);

        this.instance_243 = new lib.CachedBmp_1291();
        this.instance_243.setTransform(457.35, 691.05, 0.5, 0.5);

        this.instance_244 = new lib.CachedBmp_1290();
        this.instance_244.setTransform(445.95, 682.9, 0.5, 0.5);

        this.instance_245 = new lib.CachedBmp_1289();
        this.instance_245.setTransform(445.75, 675.8, 0.5, 0.5);

        this.instance_246 = new lib.CachedBmp_1288();
        this.instance_246.setTransform(436.05, 668.3, 0.5, 0.5);

        this.instance_247 = new lib.CachedBmp_1287();
        this.instance_247.setTransform(504.55, 530.55, 0.5, 0.5);

        this.instance_248 = new lib.CachedBmp_1286();
        this.instance_248.setTransform(504.55, 515, 0.5, 0.5);

        this.instance_249 = new lib.CachedBmp_1285();
        this.instance_249.setTransform(504.6, 668.75, 0.5, 0.5);

        this.instance_250 = new lib.CachedBmp_1284();
        this.instance_250.setTransform(524.6, 690.75, 0.5, 0.5);

        this.instance_251 = new lib.CachedBmp_1283();
        this.instance_251.setTransform(513.25, 682.65, 0.5, 0.5);

        this.instance_252 = new lib.CachedBmp_1282();
        this.instance_252.setTransform(513.8, 675.95, 0.5, 0.5);

        this.instance_253 = new lib.CachedBmp_1281();
        this.instance_253.setTransform(504.25, 668.05, 0.5, 0.5);

        this.instance_254 = new lib.CachedBmp_1280();
        this.instance_254.setTransform(501.25, 660.6, 0.5, 0.5);

        this.instance_255 = new lib.CachedBmp_1279();
        this.instance_255.setTransform(501.25, 610, 0.5, 0.5);

        this.instance_256 = new lib.CachedBmp_1278();
        this.instance_256.setTransform(501.4, 603.85, 0.5, 0.5);

        this.instance_257 = new lib.CachedBmp_1311();
        this.instance_257.setTransform(462.95, 514.95, 0.5, 0.5);

        this.instance_258 = new lib.CachedBmp_1310();
        this.instance_258.setTransform(428.15, 655.3, 0.5, 0.5);

        this.instance_259 = new lib.CachedBmp_1309();
        this.instance_259.setTransform(432.25, 522.5, 0.5, 0.5);

        this.instance_260 = new lib.CachedBmp_1308();
        this.instance_260.setTransform(451.4, 691.05, 0.5, 0.5);

        this.instance_261 = new lib.CachedBmp_1307();
        this.instance_261.setTransform(438.55, 682.9, 0.5, 0.5);

        this.instance_262 = new lib.CachedBmp_1306();
        this.instance_262.setTransform(438.3, 675.8, 0.5, 0.5);

        this.instance_263 = new lib.CachedBmp_1305();
        this.instance_263.setTransform(427.3, 668.3, 0.5, 0.5);

        this.instance_264 = new lib.CachedBmp_1304();
        this.instance_264.setTransform(504.7, 530.55, 0.5, 0.5);

        this.instance_265 = new lib.CachedBmp_1303();
        this.instance_265.setTransform(504.7, 515, 0.5, 0.5);

        this.instance_266 = new lib.CachedBmp_1302();
        this.instance_266.setTransform(504.75, 668.75, 0.5, 0.5);

        this.instance_267 = new lib.CachedBmp_1301();
        this.instance_267.setTransform(527.3, 690.75, 0.5, 0.5);

        this.instance_268 = new lib.CachedBmp_1300();
        this.instance_268.setTransform(514.55, 682.65, 0.5, 0.5);

        this.instance_269 = new lib.CachedBmp_1299();
        this.instance_269.setTransform(515.1, 675.95, 0.5, 0.5);

        this.instance_270 = new lib.CachedBmp_1298();
        this.instance_270.setTransform(504.35, 668.05, 0.5, 0.5);

        this.instance_271 = new lib.CachedBmp_1297();
        this.instance_271.setTransform(500.95, 660.6, 0.5, 0.5);

        this.instance_272 = new lib.CachedBmp_1296();
        this.instance_272.setTransform(500.95, 610, 0.5, 0.5);

        this.instance_273 = new lib.CachedBmp_1295();
        this.instance_273.setTransform(501.1, 603.85, 0.5, 0.5);

        this.instance_274 = new lib.CachedBmp_1328();
        this.instance_274.setTransform(468.85, 528.65, 0.5, 0.5);

        this.instance_275 = new lib.CachedBmp_1327();
        this.instance_275.setTransform(402.8, 663.25, 0.5, 0.5);

        this.instance_276 = new lib.CachedBmp_1326();
        this.instance_276.setTransform(410.45, 537.2, 0.5, 0.5);

        this.instance_277 = new lib.CachedBmp_1325();
        this.instance_277.setTransform(419.05, 696.2, 0.5, 0.5);

        this.instance_278 = new lib.CachedBmp_1324();
        this.instance_278.setTransform(408.2, 689.1, 0.5, 0.5);

        this.instance_279 = new lib.CachedBmp_1323();
        this.instance_279.setTransform(408.6, 682.2, 0.5, 0.5);

        this.instance_280 = new lib.CachedBmp_1322();
        this.instance_280.setTransform(400.6, 675.6, 0.5, 0.5);

        this.instance_281 = new lib.CachedBmp_1321();
        this.instance_281.setTransform(513.65, 548.05, 0.5, 0.5);

        this.instance_282 = new lib.CachedBmp_1320();
        this.instance_282.setTransform(510.75, 535.6, 0.5, 0.5);

        this.instance_283 = new lib.CachedBmp_1319();
        this.instance_283.setTransform(541.1, 676.2, 0.5, 0.5);

        this.instance_284 = new lib.CachedBmp_1318();
        this.instance_284.setTransform(563.5, 694.7, 0.5, 0.5);

        this.instance_285 = new lib.CachedBmp_1317();
        this.instance_285.setTransform(552.9, 687.7, 0.5, 0.5);

        this.instance_286 = new lib.CachedBmp_1316();
        this.instance_286.setTransform(553, 680.75, 0.5, 0.5);

        this.instance_287 = new lib.CachedBmp_1315();
        this.instance_287.setTransform(542.95, 673.85, 0.5, 0.5);

        this.instance_288 = new lib.CachedBmp_1314();
        this.instance_288.setTransform(459.2, 667.6, 0.5, 0.5);

        this.instance_289 = new lib.CachedBmp_1313();
        this.instance_289.setTransform(500.5, 535.9, 0.5, 0.5);

        this.instance_290 = new lib.CachedBmp_1312();
        this.instance_290.setTransform(466.3, 545.2, 0.5, 0.5);

        this.instance_291 = new lib.CachedBmp_1345();
        this.instance_291.setTransform(464, 528.65, 0.5, 0.5);

        this.instance_292 = new lib.CachedBmp_1344();
        this.instance_292.setTransform(388.6, 663.25, 0.5, 0.5);

        this.instance_293 = new lib.CachedBmp_1343();
        this.instance_293.setTransform(397.3, 537.2, 0.5, 0.5);

        this.instance_294 = new lib.CachedBmp_1342();
        this.instance_294.setTransform(407.15, 696.2, 0.5, 0.5);

        this.instance_295 = new lib.CachedBmp_1341();
        this.instance_295.setTransform(394.75, 689.1, 0.5, 0.5);

        this.instance_296 = new lib.CachedBmp_1340();
        this.instance_296.setTransform(395.2, 682.2, 0.5, 0.5);

        this.instance_297 = new lib.CachedBmp_1339();
        this.instance_297.setTransform(386.05, 675.6, 0.5, 0.5);

        this.instance_298 = new lib.CachedBmp_1338();
        this.instance_298.setTransform(515.2, 548.05, 0.5, 0.5);

        this.instance_299 = new lib.CachedBmp_1337();
        this.instance_299.setTransform(511.9, 535.6, 0.5, 0.5);

        this.instance_300 = new lib.CachedBmp_1336();
        this.instance_300.setTransform(546.55, 676.2, 0.5, 0.5);

        this.instance_301 = new lib.CachedBmp_1335();
        this.instance_301.setTransform(572.15, 694.7, 0.5, 0.5);

        this.instance_302 = new lib.CachedBmp_1334();
        this.instance_302.setTransform(560.05, 687.7, 0.5, 0.5);

        this.instance_303 = new lib.CachedBmp_1333();
        this.instance_303.setTransform(560.15, 680.75, 0.5, 0.5);

        this.instance_304 = new lib.CachedBmp_1332();
        this.instance_304.setTransform(548.65, 673.85, 0.5, 0.5);

        this.instance_305 = new lib.CachedBmp_1331();
        this.instance_305.setTransform(453, 667.6, 0.5, 0.5);

        this.instance_306 = new lib.CachedBmp_1330();
        this.instance_306.setTransform(500.15, 535.9, 0.5, 0.5);

        this.instance_307 = new lib.CachedBmp_1329();
        this.instance_307.setTransform(461.1, 545.2, 0.5, 0.5);

        this.instance_308 = new lib.CachedBmp_1464();
        this.instance_308.setTransform(454.9, 549.15, 0.5, 0.5);

        this.instance_309 = new lib.CachedBmp_1463();
        this.instance_309.setTransform(351.2, 667.45, 0.5, 0.5);

        this.instance_310 = new lib.CachedBmp_1462();
        this.instance_310.setTransform(363.1, 557.05, 0.5, 0.5);

        this.instance_311 = new lib.CachedBmp_1461();
        this.instance_311.setTransform(364.25, 696.95, 0.5, 0.5);

        this.instance_312 = new lib.CachedBmp_1460();
        this.instance_312.setTransform(352.75, 690.6, 0.5, 0.5);

        this.instance_313 = new lib.CachedBmp_1459();
        this.instance_313.setTransform(354.2, 684.25, 0.5, 0.5);

        this.instance_314 = new lib.CachedBmp_1458();
        this.instance_314.setTransform(346.5, 678.3, 0.5, 0.5);

        this.instance_315 = new lib.CachedBmp_1355();
        this.instance_315.setTransform(536.35, 566.85, 0.5, 0.5);

        this.instance_316 = new lib.CachedBmp_1456();
        this.instance_316.setTransform(529.65, 559.05, 0.5, 0.5);

        this.instance_317 = new lib.CachedBmp_1455();
        this.instance_317.setTransform(598.95, 686, 0.5, 0.5);

        this.instance_318 = new lib.CachedBmp_1454();
        this.instance_318.setTransform(625.9, 697.8, 0.5, 0.5);

        this.instance_319 = new lib.CachedBmp_1453();
        this.instance_319.setTransform(614.85, 691.8, 0.5, 0.5);

        this.instance_320 = new lib.CachedBmp_1452();
        this.instance_320.setTransform(613.35, 684.95, 0.5, 0.5);

        this.instance_321 = new lib.CachedBmp_1451();
        this.instance_321.setTransform(602.5, 679.15, 0.5, 0.5);

        this.instance_322 = new lib.CachedBmp_1348();
        this.instance_322.setTransform(406.6, 674.95, 0.5, 0.5);

        this.instance_323 = new lib.CachedBmp_1347();
        this.instance_323.setTransform(482.9, 562.45, 0.5, 0.5);

        this.instance_324 = new lib.CachedBmp_1346();
        this.instance_324.setTransform(407.15, 568.7, 0.5, 0.5);

        this.instance_325 = new lib.CachedBmp_1389();
        this.instance_325.setTransform(628.7, 566.4, 0.5, 0.5);

        this.instance_326 = new lib.CachedBmp_1365();
        this.instance_326.setTransform(321.65, 665.15, 0.5, 0.5);

        this.instance_327 = new lib.CachedBmp_1364();
        this.instance_327.setTransform(393.35, 562.45, 0.5, 0.5);

        this.instance_328 = new lib.CachedBmp_1363();
        this.instance_328.setTransform(321, 569.3, 0.5, 0.5);

        this.instance_329 = new lib.CachedBmp_1382();
        this.instance_329.setTransform(288.95, 665.15, 0.5, 0.5);

        this.instance_330 = new lib.CachedBmp_1381();
        this.instance_330.setTransform(373.05, 562.45, 0.5, 0.5);

        this.instance_331 = new lib.CachedBmp_1380();
        this.instance_331.setTransform(299.75, 569.3, 0.5, 0.5);

        this.instance_332 = new lib.CachedBmp_1457();
        this.instance_332.setTransform(732, 572.45, 0.5, 0.5);

        this.instance_333 = new lib.CachedBmp_1399();
        this.instance_333.setTransform(209.9, 674.95, 0.5, 0.5);

        this.instance_334 = new lib.CachedBmp_1398();
        this.instance_334.setTransform(289.95, 562.45, 0.5, 0.5);

        this.instance_335 = new lib.CachedBmp_1397();
        this.instance_335.setTransform(227, 567.05, 0.5, 0.5);

        this.instance_336 = new lib.CachedBmp_1430();
        this.instance_336.setTransform(250.7, 548.55, 0.5, 0.5);

        this.instance_337 = new lib.CachedBmp_1429();
        this.instance_337.setTransform(141.05, 666.85, 0.5, 0.5);

        this.instance_338 = new lib.CachedBmp_1428();
        this.instance_338.setTransform(153.6, 556.45, 0.5, 0.5);

        this.instance_339 = new lib.CachedBmp_1427();
        this.instance_339.setTransform(154.85, 696.35, 0.5, 0.5);

        this.instance_340 = new lib.CachedBmp_1426();
        this.instance_340.setTransform(142.7, 690, 0.5, 0.5);

        this.instance_341 = new lib.CachedBmp_1425();
        this.instance_341.setTransform(144.2, 683.65, 0.5, 0.5);

        this.instance_342 = new lib.CachedBmp_1424();
        this.instance_342.setTransform(136.05, 677.7, 0.5, 0.5);

        this.instance_343 = new lib.CachedBmp_1423();
        this.instance_343.setTransform(744.75, 572.45, 0.5, 0.5);

        this.instance_344 = new lib.CachedBmp_1422();
        this.instance_344.setTransform(737.7, 559.05, 0.5, 0.5);

        this.instance_345 = new lib.CachedBmp_1421();
        this.instance_345.setTransform(810.95, 686, 0.5, 0.5);

        this.instance_346 = new lib.CachedBmp_1420();
        this.instance_346.setTransform(839.45, 697.8, 0.5, 0.5);

        this.instance_347 = new lib.CachedBmp_1419();
        this.instance_347.setTransform(827.8, 691.8, 0.5, 0.5);

        this.instance_348 = new lib.CachedBmp_1418();
        this.instance_348.setTransform(826.25, 684.95, 0.5, 0.5);

        this.instance_349 = new lib.CachedBmp_1417();
        this.instance_349.setTransform(814.75, 679.15, 0.5, 0.5);

        this.instance_350 = new lib.CachedBmp_1416();
        this.instance_350.setTransform(192.7, 674.95, 0.5, 0.5);

        this.instance_351 = new lib.CachedBmp_1415();
        this.instance_351.setTransform(277.3, 562.45, 0.5, 0.5);

        this.instance_352 = new lib.CachedBmp_1414();
        this.instance_352.setTransform(210.75, 567.05, 0.5, 0.5);

        this.instance_353 = new lib.CachedBmp_1450();
        this.instance_353.setTransform(93.65, 674.95, 0.5, 0.5);

        this.instance_354 = new lib.CachedBmp_1449();
        this.instance_354.setTransform(110.45, 574.5, 0.5, 0.5);

        this.instance_355 = new lib.CachedBmp_1448();
        this.instance_355.setTransform(177.4, 562.3, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_239 }, { t: this.instance_238 }, { t: this.instance_237 }, { t: this.instance_236 }, { t: this.instance_235 }, { t: this.instance_234 }, { t: this.instance_233 }, { t: this.instance_232 }, { t: this.instance_231 }, { t: this.instance_230 }, { t: this.instance_229 }, { t: this.instance_228 }, { t: this.instance_227 }, { t: this.instance_226 }, { t: this.instance_225 }, { t: this.instance_224 }, { t: this.instance_223 }] }).to({ state: [{ t: this.instance_256 }, { t: this.instance_255 }, { t: this.instance_254 }, { t: this.instance_253 }, { t: this.instance_252 }, { t: this.instance_251 }, { t: this.instance_250 }, { t: this.instance_249 }, { t: this.instance_248 }, { t: this.instance_247 }, { t: this.instance_246 }, { t: this.instance_245 }, { t: this.instance_244 }, { t: this.instance_243 }, { t: this.instance_242 }, { t: this.instance_241 }, { t: this.instance_240 }] }, 1).to({ state: [{ t: this.instance_273 }, { t: this.instance_272 }, { t: this.instance_271 }, { t: this.instance_270 }, { t: this.instance_269 }, { t: this.instance_268 }, { t: this.instance_267 }, { t: this.instance_266 }, { t: this.instance_265 }, { t: this.instance_264 }, { t: this.instance_263 }, { t: this.instance_262 }, { t: this.instance_261 }, { t: this.instance_260 }, { t: this.instance_259 }, { t: this.instance_258 }, { t: this.instance_257 }] }, 1).to({ state: [{ t: this.instance_290 }, { t: this.instance_289 }, { t: this.instance_288 }, { t: this.instance_287 }, { t: this.instance_286 }, { t: this.instance_285 }, { t: this.instance_284 }, { t: this.instance_283 }, { t: this.instance_282 }, { t: this.instance_281 }, { t: this.instance_280 }, { t: this.instance_279 }, { t: this.instance_278 }, { t: this.instance_277 }, { t: this.instance_276 }, { t: this.instance_275 }, { t: this.instance_274 }] }, 1).to({ state: [{ t: this.instance_307 }, { t: this.instance_306 }, { t: this.instance_305 }, { t: this.instance_304 }, { t: this.instance_303 }, { t: this.instance_302 }, { t: this.instance_301 }, { t: this.instance_300 }, { t: this.instance_299 }, { t: this.instance_298 }, { t: this.instance_297 }, { t: this.instance_296 }, { t: this.instance_295 }, { t: this.instance_294 }, { t: this.instance_293 }, { t: this.instance_292 }, { t: this.instance_291 }] }, 1).to({ state: [{ t: this.instance_324 }, { t: this.instance_323 }, { t: this.instance_322 }, { t: this.instance_321, p: { x: 602.5 } }, { t: this.instance_320, p: { x: 613.35 } }, { t: this.instance_319, p: { x: 614.85 } }, { t: this.instance_318, p: { x: 625.9 } }, { t: this.instance_317, p: { x: 598.95 } }, { t: this.instance_316, p: { x: 529.65 } }, { t: this.instance_315 }, { t: this.instance_314, p: { x: 346.5, y: 678.3 } }, { t: this.instance_313, p: { x: 354.2, y: 684.25 } }, { t: this.instance_312, p: { x: 352.75, y: 690.6 } }, { t: this.instance_311, p: { x: 364.25, y: 696.95 } }, { t: this.instance_310, p: { x: 363.1, y: 557.05 } }, { t: this.instance_309, p: { x: 351.2, y: 667.45 } }, { t: this.instance_308, p: { x: 454.9, y: 549.15 } }] }, 1).to({ state: [{ t: this.instance_328 }, { t: this.instance_327 }, { t: this.instance_326 }, { t: this.instance_321, p: { x: 694.85 } }, { t: this.instance_320, p: { x: 705.7 } }, { t: this.instance_319, p: { x: 707.2 } }, { t: this.instance_318, p: { x: 718.25 } }, { t: this.instance_317, p: { x: 691.3 } }, { t: this.instance_316, p: { x: 622 } }, { t: this.instance_325, p: { x: 628.7 } }, { t: this.instance_314, p: { x: 257.95, y: 677.7 } }, { t: this.instance_313, p: { x: 265.65, y: 683.65 } }, { t: this.instance_312, p: { x: 264.2, y: 690 } }, { t: this.instance_311, p: { x: 275.7, y: 696.35 } }, { t: this.instance_310, p: { x: 274.55, y: 556.45 } }, { t: this.instance_309, p: { x: 262.65, y: 666.85 } }, { t: this.instance_308, p: { x: 366.35, y: 548.55 } }] }, 1).to({ state: [{ t: this.instance_331 }, { t: this.instance_330 }, { t: this.instance_329 }, { t: this.instance_321, p: { x: 715.15 } }, { t: this.instance_320, p: { x: 726 } }, { t: this.instance_319, p: { x: 727.5 } }, { t: this.instance_318, p: { x: 738.55 } }, { t: this.instance_317, p: { x: 711.6 } }, { t: this.instance_316, p: { x: 642.3 } }, { t: this.instance_325, p: { x: 649 } }, { t: this.instance_314, p: { x: 240.55, y: 677.7 } }, { t: this.instance_313, p: { x: 248.25, y: 683.65 } }, { t: this.instance_312, p: { x: 246.8, y: 690 } }, { t: this.instance_311, p: { x: 258.3, y: 696.35 } }, { t: this.instance_310, p: { x: 257.15, y: 556.45 } }, { t: this.instance_309, p: { x: 245.25, y: 666.85 } }, { t: this.instance_308, p: { x: 348.95, y: 548.55 } }] }, 1).to({ state: [{ t: this.instance_335 }, { t: this.instance_334 }, { t: this.instance_333 }, { t: this.instance_321, p: { x: 798.2 } }, { t: this.instance_320, p: { x: 809.05 } }, { t: this.instance_319, p: { x: 810.55 } }, { t: this.instance_318, p: { x: 821.6 } }, { t: this.instance_317, p: { x: 794.65 } }, { t: this.instance_316, p: { x: 725.35 } }, { t: this.instance_332, p: { x: 732 } }, { t: this.instance_314, p: { x: 156.35, y: 677.7 } }, { t: this.instance_313, p: { x: 164.05, y: 683.65 } }, { t: this.instance_312, p: { x: 162.6, y: 690 } }, { t: this.instance_311, p: { x: 174.1, y: 696.35 } }, { t: this.instance_310, p: { x: 172.95, y: 556.45 } }, { t: this.instance_309, p: { x: 161.05, y: 666.85 } }, { t: this.instance_308, p: { x: 264.75, y: 548.55 } }] }, 1).to({ state: [{ t: this.instance_352 }, { t: this.instance_351 }, { t: this.instance_350 }, { t: this.instance_349 }, { t: this.instance_348 }, { t: this.instance_347 }, { t: this.instance_346 }, { t: this.instance_345 }, { t: this.instance_344 }, { t: this.instance_343 }, { t: this.instance_342 }, { t: this.instance_341 }, { t: this.instance_340 }, { t: this.instance_339 }, { t: this.instance_338 }, { t: this.instance_337 }, { t: this.instance_336 }] }, 1).to({ state: [{ t: this.instance_355 }, { t: this.instance_354 }, { t: this.instance_353 }, { t: this.instance_321, p: { x: 914.7 } }, { t: this.instance_320, p: { x: 925.55 } }, { t: this.instance_319, p: { x: 927.05 } }, { t: this.instance_318, p: { x: 938.1 } }, { t: this.instance_317, p: { x: 911.15 } }, { t: this.instance_316, p: { x: 841.85 } }, { t: this.instance_332, p: { x: 848.5 } }, { t: this.instance_314, p: { x: 41.25, y: 677.7 } }, { t: this.instance_313, p: { x: 48.95, y: 683.65 } }, { t: this.instance_312, p: { x: 47.5, y: 690 } }, { t: this.instance_311, p: { x: 59, y: 696.35 } }, { t: this.instance_310, p: { x: 57.85, y: 556.45 } }, { t: this.instance_309, p: { x: 45.95, y: 666.85 } }, { t: this.instance_308, p: { x: 149.65, y: 548.55 } }] }, 1).to({ state: [{ t: this.instance_355 }, { t: this.instance_354 }, { t: this.instance_353 }, { t: this.instance_321, p: { x: 914.7 } }, { t: this.instance_320, p: { x: 925.55 } }, { t: this.instance_319, p: { x: 927.05 } }, { t: this.instance_318, p: { x: 938.1 } }, { t: this.instance_317, p: { x: 911.15 } }, { t: this.instance_316, p: { x: 841.85 } }, { t: this.instance_332, p: { x: 848.5 } }, { t: this.instance_314, p: { x: 41.25, y: 677.7 } }, { t: this.instance_313, p: { x: 48.95, y: 683.65 } }, { t: this.instance_312, p: { x: 47.5, y: 690 } }, { t: this.instance_311, p: { x: 59, y: 696.35 } }, { t: this.instance_310, p: { x: 57.85, y: 556.45 } }, { t: this.instance_309, p: { x: 45.95, y: 666.85 } }, { t: this.instance_308, p: { x: 149.65, y: 548.55 } }] }, 22).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(553.3, 517.2, 462.5, 218.79999999999995);
    // library properties:
    lib.properties = {
        id: '960B165A93374C4E84C2B3856697DA32',
        width: 1024,
        height: 768,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            { src: "img/welcome/handbook animate/handbook animate_atlas_.png", id: "handbook animate_atlas_" },
            { src: "img/welcome/handbook animate/handbook animate_atlas_2.png", id: "handbook animate_atlas_2" },
            { src: "img/welcome/handbook animate/handbook animate_atlas_3.png", id: "handbook animate_atlas_3" }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (hb_canvas) {
        createjs.Stage.call(this, hb_canvas);
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
    an.compositions['960B165A93374C4E84C2B3856697DA32'] = {
        getStage: function () { return hb_exportRoot.hb_stage; },
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


    an.hb_makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', hb_resizeCanvas);
        hb_resizeCanvas();
        function hb_resizeCanvas() {
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
            hb_stage.scaleX = pRatio * sRatio;
            hb_stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            hb_stage.tickOnUpdate = false;
            hb_stage.update();
            hb_stage.tickOnUpdate = true;
        }
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;