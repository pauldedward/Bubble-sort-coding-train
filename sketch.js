
let values = [];
let i = 0;
let j = 0;
function setup() {

    createCanvas(windowWidth, windowHeight);

    for(let index = 0; index < width / 10; index++) {
        values.push( floor( random(10, height)));
    };
    frameRate(20);
    strokeWeight(10);

}

function draw() {

    background(20);

    let a = values[j];
    let b = values[j + 1];
    if(a > b) {
        let temp = values[j + 1];
        values[j + 1] = values[j];
        values[j] = temp;
    }


    for(let i = 0; i < values.length; i++) {
        let k = map(i, 0, values.length, 0, width);
        stroke(237, 102, 5);
        if( i == j || i == j + 1) {
            stroke(8, 201, 56);
        }
        line(k, height, k, height - values[i]);
    }

    if(i < values.length) {
        j++;
        if( j >= values.length - i - 1) {
            j = 0;
            i++;
        }
    } else {
        console.log("finished");
        noLoop();
    }

}
