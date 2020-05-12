var Out = document.getElementById("box");
var inSide = Out.children[0];
var lunboUl =  inSide.children[0];
var arr = lunboUl.children;
var olnumber = inSide.children[1];
var olchild = olnumber.children;
var imgwidth = inSide.offsetWidth;
var current = 0;
var lrbutton = document.getElementById("LRbutton");
var rightButton=document.getElementById("rightButton");
var leftButton=document.getElementById("leftButton");
var stopbut = document.getElementById("stopbut");
var timeId=10;
// console.log(arr.length);\
var isAnimStart = false,lightTest = null;
var y=0;
var flag=0;




for (var i = 0; i < arr.length; i++)
{
    var newli = document.createElement("li");
    olnumber.appendChild(newli);

    newli.innerText = (i + 1);
    newli.setAttribute("index", i);

    newli.onmouseover = function () {
        for(var j = 0; j < olchild.length; j++)
        {
            olchild[j].removeAttribute("class");
        }
        this.className = "NumberButtonCurrent";
        current = this.getAttribute("index");
        console.log(current);

        animate(lunboUl, -current*imgwidth);
    }
}

Out.onmouseover = function() {
    lrbutton.style.display="block";

    clearInterval(timeId);
}
// 暂停js动画，使用flag的值控制轮播动画的暂停与轮播  flag=0：当前是未暂停 flag=1：当前处于暂停状态
//暂停时，通过clearInterval();实现暂停；
stopbut.onclick = function(){
    if(flag==0)
    {
        flag=1;
        lrbutton.style.display="block";
        clearInterval(timeId);
    }
    else if(flag ==1)
    {  
        flag=0;

    }
}
//当鼠标移开轮播图片时，判断flag，是否为暂停状态
//flag=1；处于暂停状态时，继续通过clearInterval();实现暂停；
//若flag=0；未暂停时，执行轮播
Out.onmouseout = function () {
    if (flag==1){
        clearInterval(timeId);
    }
    else{
        lrbutton.style.display = "none";
        timeId = setInterval(lunboAnimation, 5000);
    }
}

rightButton.onclick=lunboAnimation;

leftButton.onclick=function () {
    if (current==0){
        current=arr.length;
        lunboUl.style.left=-current*imgwidth+"px";
        console.log(current);
    }
    current--;
    animate(lunboUl,-current*imgwidth);
    for (var i = 0; i < olchild.length; i++) {
        olchild[i].removeAttribute("class");
    }
    //当前的pic索引对应的按钮设置颜色
    olchild[current].className = "NumberButtonCurrent";
};

function lunboAnimation(){

    if(current == arr.length - 1)
    {
        current = 0;
        lunboUl.style.left = 0 + "px";
        olchild[current].className = "NumberButtonCurrent";
    }
    else
        current++;

    animate(lunboUl, -current*imgwidth);
    if(current == arr.length-1 )
    {
        olchild[olchild.length-2].className = "";
        olchild[current].className = "NumberButtonCurrent";
    }
    else
    {
        for (var i = 0; i < olchild.length; i++)
        {
            olchild[i].removeAttribute("class");

        }
        olchild[0].className = "NumberButtonCurrent";
    }
}


function animate(element, target) {

    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var now = element.offsetLeft;
        var step = 1000;
        if(now < target)
        {
            step = step;
        }
        else
        {
            step = -step;
        }
        now+=step;
        if (Math.abs(now - target) > Math.abs(step))
        {
            element.style.left = now + "px";
        }else
        {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    },10);
}



