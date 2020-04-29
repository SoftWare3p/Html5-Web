function my$(id) {
    return document.getElementById(id);
}
function myc$(clss){
    return document.getElementsByClassName(clss);
}
function getshow(box){
    var isshow = box.getAttribute("isshow");
    if(isshow == "true") isshow = "false";
    else isshow = "true";
    return isshow;
}
function setshow(box,value){
    box.setAttribute("isshow",value);
}
function transvalue(fid,aid){
    var box = my$(aid);
    var value = my$(fid).getAttribute("isshow");
    if(value == "true") box.innerHTML = "全部隐藏";
    else box.innerHTML = "全部显示";
}
function checkblock(box){
    var isshow = getshow(box);
    var i;
    for(i = 0; i< box.children.length;i++)
        if(box.children[i].getAttribute("class") == "doc-but") continue;
        else if(isshow == getshow(box.children[i])) break;
    if(i == box.children.length){
        setshow(box,isshow);
    }
}
function click_block(id){
    var box = myc$(id);
    for(var i = 0;i < box.length;i++){
        var isshow = getshow(box[i]);
        setshow(box[i],isshow);
    }
    checkblock(box[0].parentNode);
}
function click_section(id){ 
    var box = my$(id);
    var isshow = getshow(box);
    setshow(box,isshow);
    for(var i = 0; i< box.children.length;i++){
        setshow(box.children[i],isshow);
    }
}
