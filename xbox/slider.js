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
var leftButton=document.getElementById("leftButton");;
var timeId=10;
// console.log(arr.length);\
var isAnimStart = false,lightTest = null;//动画句柄
var y=0;




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

// olchild[0].className = "NumberButtonCurrent"
// lunboUl.appendChild(lunboUl.children[0].cloneNode(true));
// console.log(lunboUl.children.length);
Out.onmouseover = function() {
    lrbutton.style.display="block";





    clearInterval(timeId);
}

Out.onmouseout = function () {
    lrbutton.style.display = "none";
    timeId = setInterval(lunboAnimation, 6000);
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
        olchild[0].className = "NumberButtonCurrent";
    }
    else
        current++;

    animate(lunboUl, -current*imgwidth);
    if(current == arr.length-1 )
    {
        olchild[olchild.length-1].className = "";
        olchild[0].className = "NumberButtonCurrent";
    }
    else
    {
        for (var i = 0; i < olchild.length; i++)
        {
            olchild[i].removeAttribute("class");

        }
        olchild[current].className = "NumberButtonCurrent";
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



