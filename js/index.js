/**
 * Created by zhangyannan on 2017/2/11.
 */
//==值比较
//===类型比较
function $(id) {
    return typeof id === 'string' ?document.getElementById(id): id
}
//当页面加载完毕的时候
window.onload = function () {
    //拿到所有的标题 li标签  标题对应的内容
    var titles= $("tab-header").getElementsByTagName("li");
    var divs=$("tab-content").getElementsByClassName("dom");
    //判断
    if (titles.length != divs.length){
        return
    }
    //遍历
    for(var i=0;i<titles.length;i++){
        //取出li标签
        var li=titles[i];
        li.id=i;
        // console.log(li)
        li.onmousemove=function () {
            for(var j=0;j<titles.length;j++){
                titles[j].className=null
                divs[j].style.display="none";
            }
            this.className="select";
            divs[this.id].style.display="block"
        }
    }
}