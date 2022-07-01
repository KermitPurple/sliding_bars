const num_bars = 20;
let bar_size;
let bars = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    bar_size = {
        x: windowWidth / 5,
        y: windowHeight / num_bars,
    };
    colorMode(HSL);
    set_up_bars();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    for(let bar of bars){
        bar.draw(windowWidth);
        bar.move(windowWidth);
    }
}

function set_up_bars(){
    let speed = 1;
    for(let i = 0; i < num_bars; i++){
        bars[i] = new Bar(
            0,
            i * bar_size.y,
            bar_size.x,
            bar_size.y,
            speed,
            color(i / num_bars * 360, 100, 50)
        );
        speed += 1;
    }
}
