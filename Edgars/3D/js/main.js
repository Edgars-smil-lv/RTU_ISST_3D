let myW = document.getElementById("world");
let map = [
    ["#3437db", 1200, 800, 0.1],
    ["#400147", 1200, 800, 1],
    ["#34db9b", 1200, 800, 1],
    ["#ca34db", 1500, 800, 1],
    ["#180e4c", 1200, 800, 0.5],
    ["#461010", 800, 1400, 0.3],
]
for (let i = 0; i < 6; i++) {
    let square = document.createElement("div");
    square.id = "square0" + (i + 1);

    square.style.backgroundColor = map[i][0];
    square.style.width = map[i][1] + "px";
    square.style.height = map[i][2] + "px";
    square.style.opacity = map[i][3];
    myW.appendChild(square);
}
let map2 = [
    ["#7c96ec", 200, 200, 0.1],
    ["#4a0404", 250, 500, 1],
    ["#000000", 10, 10, 1],
];
for (let n = 0; n < 3; n++) {
    let myWindow = document.createElement("div");
    myWindow.id = "window0" + (n + 1);

    myWindow.style.backgroundColor = map2[n][0];
    myWindow.style.width = map2[n][1] + "px";
    myWindow.style.height = map2[n][2] + "px";

    myW.appendChild(myWindow);
}