function change(n){
    if(n>4) n=1;  // 一共4张图片，循环替换
    document.getElementById("test").setAttribute("src", "../images/"+n+".png");
    n++;
    setTimeout("change("+n+")",3000);
}
window.onload = function(){
//定时器 每三秒banner换一张图片
    setTimeout("change(1)", 3000);

//获取元素
var titles=document.getElementById("notice").getElementsByTagName("li");
var deltas=document.getElementById("third-delta").getElementsByTagName("div");
var cons=document.getElementsByClassName("con");
var radishes=document.getElementsByClassName("radish");
var jieshao=document.getElementsByClassName("jieshao");
var jieshao_delta=document.getElementsByClassName("jieshao_delta");



if(titles.length!=cons.length)
return;

//鼠标经过新生攻略各模块时弹出攻略
for(var i=0;i<titles.length;i++){
	titles[i].id=i;
	titles[i].onmouseover=function(){
		//
		for(var j=0;j<titles.length;j++){
			deltas[j].style.display='none';
			cons[j].style.display='none';
		}
	deltas[this.id].style.display='block';
	cons[this.id].style.display='block';
	test.innerHTML='<span class="warining">含有非法字符</span>';
	}
}

//鼠标经过圆形可弹出详细介绍
for(var r=0;r<radishes.length;r++){
radishes[r].id=r;
radishes[r].onmouseover=function(){
	for(var l=0;l<radishes.length;l++){
jieshao[l].style.display='none';
jieshao_delta[l].style.display='none';
	}
jieshao[this.id].style.display='block';
jieshao_delta[this.id].style.display='block';

}

} 






}