const app = Vue.createApp({
    data() {
        return {
            canvasData: {
                width: 1071,
                height: 635,
                padding: 50
            },
            seconds: 0,
            big_lights: {
                width: 46,
                height: 60,
                colors: {
                    blue: { src: '/img/b_foco_blue.png' },
                    green: { src: '/img/b_foco_green.png' },
                    pink: { src: '/img/b_foco_pink.png' },
                    red: { src: '/img/b_foco_red.png' },
                    yellow: { src: '/img/b_foco_yellow.png' }
                }
            },
            small_lights: {
                width: 29,
                height: 45,
                colors: {
                    blue: { src: '/img/s_foco_blue.png' },
                    green: { src: '/img/s_foco_green.png' },
                    pink: { src: '/img/s_foco_pink.png' },
                    red: { src: '/img/s_foco_red.png' },
                    yellow: { src: '/img/s_foco_yellow.png' }
                }
            },
            lights_pos: {
                top: [],
                bottom: []
            }
        }
    },
    mounted() {
        // Create canvas
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext('2d');

        // Create images
        // Create frame
        this.frame = new Image();
        this.frame.src = '/img/frame.png';

        this.createColors();
        this.createPositions();

        // Start timer
        setInterval(() => this.draw(), 1000 / 10);
    },
    methods: {
        createColors() {
            // Create big lights images
            this.big_lights.colors.blue.img = new Image();
            this.big_lights.colors.blue.img.src = this.big_lights.colors.blue.src;
            this.big_lights.colors.green.img = new Image();
            this.big_lights.colors.green.img.src = this.big_lights.colors.green.src;
            this.big_lights.colors.pink.img = new Image();
            this.big_lights.colors.pink.img.src = this.big_lights.colors.pink.src;
            this.big_lights.colors.red.img = new Image();
            this.big_lights.colors.red.img.src = this.big_lights.colors.red.src;
            this.big_lights.colors.yellow.img = new Image();
            this.big_lights.colors.yellow.img.src = this.big_lights.colors.yellow.src;

            // Create small lights images
            this.small_lights.colors.blue.img = new Image();
            this.small_lights.colors.blue.img.src = this.small_lights.colors.blue.src;
            this.small_lights.colors.green.img = new Image();
            this.small_lights.colors.green.img.src = this.small_lights.colors.green.src;
            this.small_lights.colors.pink.img = new Image();
            this.small_lights.colors.pink.img.src = this.small_lights.colors.pink.src;
            this.small_lights.colors.red.img = new Image();
            this.small_lights.colors.red.img.src = this.small_lights.colors.red.src;
            this.small_lights.colors.yellow.img = new Image();
            this.small_lights.colors.yellow.img.src = this.small_lights.colors.yellow.src;
        },
        createPositions() {
            // Rojo, Naranja, Amarillo, Verde, Azul, Azul Oscuro, Morado
            // Create positions of every light
            let top_b_lights = [
                { posX: 100, posY: 55, color: this.big_lights.colors.red.img, currentColor: 'red' },
                { posX: 140, posY: 32, color: this.small_lights.colors.blue.img, rotation: -20, currentColor: 'blue' },
                { posX: 215, posY: 30, color: this.big_lights.colors.yellow.img, currentColor: 'yellow' },
                { posX: 300, posY: 10, color: this.small_lights.colors.pink.img, rotation: 30, currentColor: 'pink' },
                { posX: 320, posY: 62, color: this.big_lights.colors.green.img, currentColor: 'green' },
                { posX: 340, posY: 32, color: this.small_lights.colors.red.img, rotation: -60, currentColor: 'red' },
                { posX: 392, posY: 14, color: this.big_lights.colors.blue.img, currentColor: 'blue' },
                { posX: 475, posY: 5, color: this.small_lights.colors.yellow.img, rotation: 30, currentColor: 'yellow' },
                { posX: 480, posY: 54, color: this.big_lights.colors.pink.img, currentColor: 'pink' },
                { posX: 520, posY: 18, color: this.small_lights.colors.green.img, rotation: -35, currentColor: 'green' },
                { posX: 590, posY: 24, color: this.big_lights.colors.red.img, currentColor: 'red' },
                { posX: 660, posY: 8, color: this.small_lights.colors.blue.img, rotation: 15, currentColor: 'blue' },
                { posX: 676, posY: 62, color: this.big_lights.colors.yellow.img, currentColor: 'yellow' },
                { posX: 700, posY: 15, color: this.small_lights.colors.pink.img, rotation: -40, currentColor: 'pink' },
                { posX: 755, posY: 10, color: this.big_lights.colors.green.img, currentColor: 'green' },
                { posX: 825, posY: 2, color: this.small_lights.colors.red.img, rotation: 40, currentColor: 'red' },
                { posX: 835, posY: 46, color: this.big_lights.colors.blue.img, currentColor: 'blue' },
                { posX: 850, posY: -10, color: this.small_lights.colors.yellow.img, rotation: -40, currentColor: 'yellow' }
            ];
            let bottom_b_lights = [
                { posX: 150, posY: 635, color: this.big_lights.colors.blue.img, rotation: 180, currentColor: 'blue' },
                { posX: 220, posY: 650, color: this.small_lights.colors.red.img, rotation: 135, currentColor: 'red' },
                { posX: 260, posY: 610, color: this.big_lights.colors.green.img, rotation: 180, currentColor: 'green' },
                { posX: 270, posY: 650, color: this.small_lights.colors.pink.img, rotation: -135, currentColor: 'pink' },
                { posX: 350, posY: 640, color: this.big_lights.colors.yellow.img, rotation: 180, currentColor: 'yellow' },
                { posX: 400, posY: 620, color: this.small_lights.colors.blue.img, rotation: 135, currentColor: 'blue' },
                { posX: 420, posY: 600, color: this.big_lights.colors.red.img, rotation: 180, currentColor: 'red' },
                { posX: 420, posY: 660, color: this.small_lights.colors.green.img, rotation: -145, currentColor: 'green' },
                { posX: 490, posY: 635, color: this.big_lights.colors.pink.img, rotation: 180, currentColor: 'pink' },
                { posX: 560, posY: 640, color: this.small_lights.colors.yellow.img, rotation: 145, currentColor: 'yellow' },
                { posX: 600, posY: 598, color: this.big_lights.colors.blue.img, rotation: 180, currentColor: 'blue' },
                { posX: 610, posY: 645, color: this.small_lights.colors.red.img, rotation: -145, currentColor: 'red' },
                { posX: 690, posY: 635, color: this.big_lights.colors.green.img, rotation: 180, currentColor: 'green' },
                { posX: 740, posY: 620, color: this.small_lights.colors.pink.img, rotation: 105, currentColor: 'pink' },
                { posX: 765, posY: 600, color: this.big_lights.colors.yellow.img, rotation: 180, currentColor: 'yellow' },
                { posX: 800, posY: 640, color: this.small_lights.colors.blue.img, rotation: -145, currentColor: 'blue' },
                { posX: 900, posY: 635, color: this.big_lights.colors.red.img, rotation: 180, currentColor: 'red' },
                { posX: 950, posY: 630, color: this.small_lights.colors.green.img, rotation: 150, currentColor: 'green' },
                { posX: 980, posY: 598, color: this.big_lights.colors.pink.img, rotation: 180, currentColor: 'pink' },
            ];

            top_b_lights.forEach(top_light => {
                this.lights_pos.top.push(top_light);
            });
            bottom_b_lights.forEach(bottom_light => {
                this.lights_pos.bottom.push(bottom_light);
            });
        },
        draw() {
            // Count time
            this.seconds++;
            //console.log("Current Frame: " + this.seconds);

            // Clear canvas
            this.clear();

            // Draw green background
            //this.ctx.fillStyle = '#00ff00';
            //this.ctx.fillStyle = '#ff00ff';
            this.ctx.fillStyle = '#0000ff';
            //this.ctx.fillStyle = '#000';
            //this.ctx.fillStyle = '#fff';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw Frame
            this.ctx.drawImage(this.frame, this.canvasData.padding, this.canvasData.padding, this.canvasData.width, this.canvasData.height);

            // Draw top lights
            this.lights_pos.top.forEach(light => {
                this.ctx.save();

                this.ctx.translate(light.posX + this.canvasData.padding, light.posY + this.canvasData.padding); // Set origin to position
                if(light.rotation){
                    this.ctx.rotate( (light.rotation * Math.PI) / 180 );
                    this.ctx.drawImage(light.color, 0, 0);
                } else {
                    this.ctx.drawImage(light.color, 0, 0);
                }
                
                this.ctx.restore();
            });

            // Draw bottom lights
            this.lights_pos.bottom.forEach(light => {
                this.ctx.save();

                this.ctx.translate(light.posX + this.canvasData.padding, light.posY + this.canvasData.padding); // Set origin to position
                if(light.rotation){
                    this.ctx.rotate( (light.rotation * Math.PI) / 180 );
                    this.ctx.drawImage(light.color, 0, 0);
                } else {
                    this.ctx.drawImage(light.color, 0, 0);
                }
                
                this.ctx.restore();
            });

            this.changeToNextLightColor();
        },
        clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        changeToNextLightColor(){
            // Order: Red -> Yellow -> Green -> Blue -> Pink -> Red -> ...
            this.lights_pos.bottom.forEach(light => {
                if(light.currentColor == 'red') {
                    light.currentColor = 'pink';
                    if(light.color == this.big_lights.colors.red.img) {
                        light.color = this.big_lights.colors.pink.img;
                    } else if(light.color == this.small_lights.colors.red.img) {
                        light.color = this.small_lights.colors.pink.img;
                    }
                }else if(light.currentColor == 'pink') {
                    light.currentColor = 'blue';
                    if(light.color == this.big_lights.colors.pink.img) {
                        light.color = this.big_lights.colors.blue.img;
                    } else if(light.color == this.small_lights.colors.pink.img) {
                        light.color = this.small_lights.colors.blue.img;
                    }
                }else if(light.currentColor == 'blue') {
                    light.currentColor = 'green';
                    if(light.color == this.big_lights.colors.blue.img) {
                        light.color = this.big_lights.colors.green.img;
                    } else if(light.color == this.small_lights.colors.blue.img) {
                        light.color = this.small_lights.colors.green.img;
                    }
                }else if(light.currentColor == 'green') {
                    light.currentColor = 'yellow';
                    if(light.color == this.big_lights.colors.green.img) {
                        light.color = this.big_lights.colors.yellow.img;
                    } else if(light.color == this.small_lights.colors.green.img) {
                        light.color = this.small_lights.colors.yellow.img;
                    }
                }else if(light.currentColor == 'yellow') {
                    light.currentColor = 'red';
                    if(light.color == this.big_lights.colors.yellow.img) {
                        light.color = this.big_lights.colors.red.img;
                    } else if(light.color == this.small_lights.colors.yellow.img) {
                        light.color = this.small_lights.colors.red.img;
                    }
                }
            });
            

            // Order: Red -> Pink -> Blue -> Green -> Yellow -> Red -> ...
            this.lights_pos.top.forEach(light => {
                if(light.currentColor == 'red') {
                    light.currentColor = 'pink';
                    if(light.color == this.big_lights.colors.red.img) {
                        light.color = this.big_lights.colors.pink.img;
                    } else if(light.color == this.small_lights.colors.red.img) {
                        light.color = this.small_lights.colors.pink.img;
                    }
                }else if(light.currentColor == 'pink') {
                    light.currentColor = 'blue';
                    if(light.color == this.big_lights.colors.pink.img) {
                        light.color = this.big_lights.colors.blue.img;
                    } else if(light.color == this.small_lights.colors.pink.img) {
                        light.color = this.small_lights.colors.blue.img;
                    }
                }else if(light.currentColor == 'blue') {
                    light.currentColor = 'green';
                    if(light.color == this.big_lights.colors.blue.img) {
                        light.color = this.big_lights.colors.green.img;
                    } else if(light.color == this.small_lights.colors.blue.img) {
                        light.color = this.small_lights.colors.green.img;
                    }
                }else if(light.currentColor == 'green') {
                    light.currentColor = 'yellow';
                    if(light.color == this.big_lights.colors.green.img) {
                        light.color = this.big_lights.colors.yellow.img;
                    } else if(light.color == this.small_lights.colors.green.img) {
                        light.color = this.small_lights.colors.yellow.img;
                    }
                }else if(light.currentColor == 'yellow') {
                    light.currentColor = 'red';
                    if(light.color == this.big_lights.colors.yellow.img) {
                        light.color = this.big_lights.colors.red.img;
                    } else if(light.color == this.small_lights.colors.yellow.img) {
                        light.color = this.small_lights.colors.red.img;
                    }
                }
            });
            
        }
    }
});
app.mount('#app');