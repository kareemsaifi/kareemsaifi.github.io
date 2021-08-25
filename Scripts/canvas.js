theme1 = ['#309fdb', '#3caf85', '#fbce4a', '#854e9b'];
theme2 = ['#F0A088', '#D8A5BB', '#97B9C5', '#89C099'];
theme3 = ['#F99F2F', '#46CA86', '#1DC7CC', '#E39FC8'];
pieChart = document.getElementById("btn_pie");
barChart = document.getElementById("btn_bar");
lineChart = document.getElementById("btn_line");
scheme1 = document.getElementById("btn_theme1");
scheme2 = document.getElementById("btn_theme2");
scheme3 = document.getElementById("btn_theme3");
studying = 0;
playing = 1;
watching = 2;
state = 0;
color = 0;
function drawCanvas(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    width = 0.9 * window.innerWidth;
    height = width;
    canvas.width = width;   
    canvas.height = height;
}



function drawArc(r, startingTheta, endingTheta, color, clockwise){
    context.fillStyle = color;
    context.strokeStyle = '#fff';
    context.beginPath();
    context.moveTo(centrePoint.x, centrePoint.y)
    context.arc(centrePoint.x, centrePoint.y, r, startingTheta, endingTheta, clockwise);
    context.closePath();
    context.fill();
    context.stroke();
}

function drawPieChart(colorStyle){
    centrePoint = {
        x: canvas.width/2,
        y: canvas.height/2
    }
    let radius = 2 * canvas.width / 5;
    drawArc(radius, 0, 43/84 * Math.PI, colorStyle[studying], false)
    drawArc(radius, 43/84 * Math.PI, 113/84 * Math.PI, colorStyle[3], false)
    drawArc(radius, 113/84 * Math.PI, 138/84 * Math.PI, colorStyle[watching], false)
    drawArc(radius, 138/84 * Math.PI, 2* Math.PI, colorStyle[playing], false)
}

window.onload = function(){
    draw(state, color);
}
window.onresize = function(){
    draw(state, color);
}

function drawBar(color, x, y, w, h){
    context.fillStyle = color;
    context.strokeStyle = color;
    context.beginPath();
    context.rect(x, canvas.height - (y + h), w, h);
    context.fill();
    context.stroke();
}


function drawBarChart(color){
    let hUnit = canvas.height * 0.09;
    let wUnit = canvas.width / 31.5;
    width = wUnit * 10;
    drawCartesian();

    drawBar(color[studying], 1 * wUnit, fontSize,  wUnit, 4 * hUnit);
    drawBar(color[playing], 2.25 * wUnit, fontSize, wUnit, 6 * hUnit);
    drawBar(color[watching], 3.5 * wUnit , fontSize, wUnit, 5 * hUnit);

    drawBar(color[studying], 5.5 * wUnit , fontSize, wUnit, 4 * hUnit);
    drawBar(color[playing], 6.75 * wUnit, fontSize, wUnit, 6 * hUnit);
    drawBar(color[watching], 8 *wUnit, fontSize, wUnit, 5 * hUnit);

    drawBar(color[studying],  10 * wUnit, fontSize,  wUnit, 5 * hUnit);
    drawBar(color[playing],  11.25 * wUnit, fontSize, wUnit, 3 * hUnit);
    drawBar(color[watching],  12.5*wUnit, fontSize, wUnit, 4 * hUnit);

    drawBar(color[studying],  14.5*wUnit, fontSize, wUnit, 6 * hUnit);
    drawBar(color[playing],  15.75*wUnit, fontSize, wUnit, 5 * hUnit);
    drawBar(color[watching],  17*wUnit, fontSize, wUnit, 4 * hUnit);

    drawBar(color[studying],  19 * wUnit, fontSize,  wUnit, 10 * hUnit);
    drawBar(color[playing],  20.25 * wUnit, fontSize, wUnit, 2 * hUnit);
    drawBar(color[watching],  21.5*wUnit, fontSize, wUnit, 3 * hUnit);

    drawBar(color[studying],  23.5*wUnit, fontSize, wUnit, 8 * hUnit);
    drawBar(color[playing],  24.75*wUnit, fontSize, wUnit, 3 * hUnit);
    drawBar(color[watching],  26*wUnit, fontSize, wUnit, 2 * hUnit);
    
    drawBar(color[studying],  28 * wUnit, fontSize,  wUnit, 6 * hUnit);
    drawBar(color[playing],  29.25 * wUnit, fontSize, wUnit, 5 * hUnit);
    drawBar(color[watching],  30.5 *wUnit, fontSize, wUnit, 2 * hUnit);
}




function drawLineChart(color){
    drawCartesian();
    drawLine(color[studying], 0.25, 4, 1.25,4)
    drawLine(color[studying], 1.25, 4, 2.25,5)
    drawLine(color[studying], 2.25, 5, 3.25,6)
    drawLine(color[studying], 3.25, 6, 4.25,10)
    drawLine(color[studying], 4.25, 10, 5.25,8)
    drawLine(color[studying], 5.25, 8, 6.25,6)

    drawLine(color[playing], 0.25, 6, 1.25,6)
    drawLine(color[playing], 1.25, 6, 2.25,3)
    drawLine(color[playing], 2.25, 3, 3.25,5)
    drawLine(color[playing], 3.25, 5, 4.25,2)
    drawLine(color[playing], 4.25, 2, 5.25,3)
    drawLine(color[playing], 5.25, 3, 6.25,5)

    drawLine(color[watching], 0.25, 5, 1.25,5)
    drawLine(color[watching], 1.25, 5, 2.25,4)
    drawLine(color[watching], 2.25, 4, 3.25,4)
    drawLine(color[watching], 3.25, 4, 4.25,3)
    drawLine(color[watching], 4.25, 3, 5.25,2)
    drawLine(color[watching], 5.25, 2, 6.25,2)   
}

function drawLine(color, x1,y1,x2,y2){
    let hUnit = canvas.height * 0.09;
    let wUnit = canvas.width / 7;
    context.lineWidth = hUnit * 0.1;
    context.strokeStyle=color;
    context.beginPath();
    context.moveTo(x1 * wUnit, canvas.height - y1 * hUnit);
    context.lineTo(x2 * wUnit, canvas.height - y2*hUnit);
    context.stroke();
}

function draw(state, color){
    
    theme = theme1;
    drawCanvas();
    if(color == 0){
        theme = theme1;
    } else if(color == 1){
        theme = theme2;
    } else{
        theme = theme3;
    }
    if(state == 0){
        drawPieChart(theme);
    } else if(state == 1){
        drawBarChart(theme);
    } else{
        drawLineChart(theme);
    }
    drawLegend(theme);
}


lineChart.onclick = function(){
    state = 2
    draw(state, color);
}
barChart.onclick = function(){
    state = 1
    draw(state, color);
}
pieChart.onclick = function(){
    state = 0
    draw(state, color);
}
scheme1.onclick = function(){
    color = 0;
    draw(state,color);
}
scheme2.onclick = function(){
    color = 1;
    draw(state,color);
}
scheme3.onclick = function(){
    color = 2;
    draw(state,color);
}



function drawCartesian(){
    let  wUnit = canvas.width / 7;
    let hUnit = canvas.height * 0.09;
    fontSize = 0.3 * wUnit;
    

    context.font = fontSize + "px Arial" ;
    context.fillText("Sat",0.25*wUnit,canvas.height-2, wUnit);
    context.fillText("Sun",1.25*wUnit,canvas.height-2, wUnit);
    context.fillText("Mon",2.25 * wUnit,canvas.height-2, wUnit);
    context.fillText("Tues",3.25* wUnit,canvas.height-2, wUnit);
    context.fillText("Wed",4.25 * wUnit,canvas.height-2, wUnit);
    context.fillText("Thurs",5.25 * wUnit,canvas.height-2, wUnit);
    context.fillText("Fri",6.25 * wUnit,canvas.height-2, wUnit);

    context.fillText(1, 0, canvas.height - hUnit)
    context.fillText(2, 0, canvas.height - 2 * hUnit)
    context.fillText(3, 0, canvas.height - 3 * hUnit)
    context.fillText(4, 0, canvas.height - 4 * hUnit)
    context.fillText(5, 0, canvas.height - 5 * hUnit)
    context.fillText(6, 0, canvas.height - 6 * hUnit)
    context.fillText(7, 0, canvas.height - 7 * hUnit)
    context.fillText(8, 0, canvas.height - 8 * hUnit)
    context.fillText(9, 0, canvas.height - 9 * hUnit)
    context.fillText(10, 0, canvas.height - 10 * hUnit)
    context.fillText("time (h)", 0, fontSize )
}

function drawLegend(color){ 
    legend = document.getElementById("legend");
    let context = legend.getContext("2d");

    legend.width = canvas.width;
        
    let w = 0.025 * legend.width;
    legend.height = 5 * w;
    context.beginPath();
    context.fillStyle = color[studying];
    context.strokeStyle = 'white';
    context.rect(0,0, w, w);
    context.fill();
    context.stroke();
    context.fillStyle = 'black';
    context.font = 1.25*w + "px Arial";
    context.fillText("Studying", w, w)

    context.beginPath();
    context.fillStyle = color[playing];
    context.strokeStyle = 'white';
    context.rect(0,w, w, w);
    context.fill();
    context.stroke();
    context.fillStyle = 'black';
    context.font = 1.25*w + "px Arial";
    context.fillText("playing", w, 2*w)

    context.beginPath();
    context.fillStyle = color[watching];
    context.strokeStyle = 'white';
    context.rect(0,2*w, w, w);
    context.fill();
    context.stroke();
    context.fillStyle = 'black';
    context.font = 1.25*w + "px Arial";
    context.fillText("watching", w, 3*w) 
    if(state == 0){
        context.beginPath();
        context.fillStyle = color[3];
        context.strokeStyle = 'white';
        context.rect(0,3*w, w, w);
        context.fill();
        context.stroke();
        context.fillStyle = 'black';
        context.font = 1.25*w + "px Arial";
        context.fillText("other activities", w, 4*w) 
    }
}

