$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    tool.onMouseDown = function (event) {
        //var c = Shape.Circle(event.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'orange';
    };

    paper.view.draw();


    console.log('main.js loaded');
})