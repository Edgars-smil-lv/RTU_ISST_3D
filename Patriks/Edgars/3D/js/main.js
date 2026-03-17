let myW = document.getElementById("world");

let map = [
    { background: "#3437db", width: 1200, height: 800, opacity: 0.1, name: "square" },
    { background: "#400147", width: 1200, height: 800, opacity: 1, name: "square" },
    { background: "#34db9b", width: 1200, height: 800, opacity: 1, name: "square" },
    { width: 1500, height: 800, opacity: 1, name: "square" },
    { background: "#180e4c", width: 1200, height: 800, opacity: 0.5, name: "square" },
    { background: "#461010", width: 800, height: 1400, opacity: 0.3, name: "square" }
];

function drawMap(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let square = document.createElement("div");
        square.id = `${myArray[i].name}0${i + 1}`;
        square.style.backgroundColor = myArray[i].background ? myArray[i].background : "orange";
        square.style.width = `${myArray[i].width}px`;
        square.style.height = `${myArray[i].height}px`;
        square.style.opacity = myArray[i].opacity;
        myW.appendChild(square);
    }
}

let map2 = [
    { background: "#7c96ec", width: 200, height: 200, opacity: 1, name: "window" },
    { background: "#4a0404", width: 250, height: 500, opacity: 1, name: "window" },
    { background: "#000000", width: 10, height: 10, opacity: 1, name: "window" }
];


drawMap(map2);
drawMap(map);