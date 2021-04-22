
let values = [];
let i = 0;
let j = 0;
function setup() {

    createCanvas(600, 600);

    for(let index = 0; index < width / 10; index++) {
        values.push(floor(random(5,height)));
    };
    frameRate(10);
    // for(let i = 0; i < values.length; i++) {
    //     for(let j = 0; j < ; j++) {
    //
    //
    //     }
    // };

}

function draw() {

    background(0);

    let a = values[j];
    let b = values[j + 1];
    if(a > b) {
        let temp = values[j + 1];
        values[j + 1] = values[j];
        values[j] = temp;
    }


    for(let i = 0; i < values.length; i++) {
        let k = map(i, 0, values.length, 0, width);
        stroke(255);
        if( i == j || i == j + 1) {
            stroke(255, 0 , 0);
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
