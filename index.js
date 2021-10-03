
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// making our context 
var c = canvas.getContext("2d");


// add event to change color of circles 
addEventListener('click', ()=>{
	init();
})
// update screen when resizes 
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})
// array of color
var color = [
    'green',
    'red',
    'yellow',
    'coral',
    'aqua',
    'blue',
    'purple',
    'pink',
    'violet',
    'steelblue',
    'orange',
    'lightgreen'
]
// constructor 
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // draw method for drawing circle
    c.strokeStyle = color[Math.floor(Math.random() * color.length)];
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
    }
    // update method for update the moving of circles 
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

// making object of Circle class 

var circleArray = [];

function init() {
    circleArray = [];
    for (var i = 0; i < 300; i++) {
        var radius = 50;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 10;
        var dy = (Math.random() - 0.5) * 10;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
init();
animate();