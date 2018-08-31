var canvasHeight = 300;

// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

// Canvas上に画像を表示
var img = new Image();
img.src = 'https://www.tam-tam.co.jp/tipsnote/wpdata/wp-content/uploads/2017/10/canvas_image.jpg';
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width));
}