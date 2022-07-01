const els = {
    num_bars: document.querySelector('#num-bars'),
    speed_increment: document.querySelector('#speed-increment'),
    initial_speed: document.querySelector('#initial-speed'),
};
let bar_size;
let bars = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    reset();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    reset();
}

function draw(){
    background(0);
    for(let bar of bars){
        bar.draw(windowWidth);
        bar.move(windowWidth);
    }
}

function set_up_bars(){
    bars.length = 0;
    let speed = els.initial_speed.valueAsNumber;
    for(let i = 0; i < els.num_bars.valueAsNumber; i++){
        bars[i] = new Bar(
            0,
            i * bar_size.y,
            bar_size.x,
            bar_size.y,
            speed,
            color(i / els.num_bars.valueAsNumber * 360, 100, 50)
        );
        speed += els.speed_increment.valueAsNumber;
    }
}

function reset(){
    bar_size = {
        x: windowWidth / 5,
        y: windowHeight / els.num_bars.valueAsNumber,
    };
    set_up_bars();
}
