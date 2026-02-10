let myWorld = document.getElementById("world");

//Array of objects
let map = [
    ["square01", "red", 200, 200],
    ["square02", "blueviolet", 200, 200],
    ["square03", "rgb(131, 226, 43)", 200, 200],
];

for (let i = 0; i < 3; i++) {
    myS = document.createElement("div");
    // myS.id = `square0${i+1}`;
    myS.id = map[i][0];
    myS.style.backgroundColor = map[i][1];
    myS.style.width = map[i][2] + "px";
    myS.style.height = map[i][3] + "px";
    myS.style.opacity = 0.5;
    myWorld.appendChild(myS);
}
