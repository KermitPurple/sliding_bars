class Bar {
    constructor(x, y, w, h, speed, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.color = color;
    }

    move(max_width){
        this.x += this.speed;
        this.x %= max_width;
    }

    draw(max_width){
        fill(this.color);
        rect(
            this.x - this.w / 2,
            this.y,
            this.w,
            this.h,
        );
        if(this.x - this.w / 2 < 0){ // if underflow
            rect( // draw wrapping around
                this.x - this.w / 2 + max_width,
                this.y,
                this.w,
                this.h,
            );
        }
        if(this.x + this.w / 2 > max_width){ // if overflow
            rect( // draw wrapping around
                this.x - this.w / 2 - max_width,
                this.y,
                this.w,
                this.h,
            );
        }
    }
}
