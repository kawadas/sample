// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//Javascript
//video element
var video = document.getElementById('camera');

//video element（プレビュー画面）をクリックして撮影
video.addEventListener("click", function() {
    take_picture()
});

//テキストクリック撮影（撮影トリガー 1）
$("#rec").click(function() {
    take_picture()
});

//撮影関数
function take_picture() {
    //videoのstreamをcanvasに書き出す方法
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    //videoの縦幅横幅を取得
    var w = video.offsetWidth;
    var h = video.offsetHeight;    
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    ctx.drawImage(video, 0, 0, w, h);

    //canvasを更にimgに書き出す方法
    var img = document.getElementById('img');
    img.src = canvas.toDataURL('image/png');
}
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require bootstrap
//= require_tree .


