var Out = document.getElementById("box");
var inSide = Out.children[0];
var lunboUl =  inSide.children[0];
var arr = lunboUl.children;
var olnumber = inSide.children[1];
var olchild = olnumber.children;
var imgwidth = 1020;
var current = 0;
var lrbutton = document.getElementById("LRbutton");
var rightButton=document.getElementById("rightButton");
var leftButton=document.getElementById("leftButton");;
var timeId=10;
// console.log(arr.length);\
var isAnimStart = false,lightTest = null;
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

    lrbutton.style.display="block";

    

    
rightButton.onclick=function () {
    if (current==0){
        
        
        console.log("asdasdasd"+current);
    }
    lrbutton.style.display="block";
    current++;
    console.log("asdasdasd"+current);
    if (current==4){
        
        current--;
        console.log("asd"+current);
    }
    animate(lunboUl,-current*imgwidth);
    olchild[current].className = "NumberButtonCurrent";
};

leftButton.onclick=function () {
    if (current==0){
        
        
        console.log("wos"+current);
    }
    if(current!=0){
        current--;
    }
    animate(lunboUl,-current*imgwidth);
    
    olchild[current].className = "NumberButtonCurrent";
};



function animate(element, target) {

    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var now = element.offsetLeft;
        var step = 30;
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



