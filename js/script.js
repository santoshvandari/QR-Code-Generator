/*
 Code Written By Santosh Bhandari
 Instagram: santosh.vandari
 */
let text=document.getElementById("text");
let input=document.querySelector(".input");
let output=document.querySelector(".output");
document.getElementById("submit").addEventListener("click",function (){
	value=text.value
	if(value=="" || value==null)
		document.querySelector(".inputerror").style.display="block";
	else{
		document.querySelector(".inputerror").style.display="none";
		generateQR();
	}
});
function generateQR(){
	document.getElementById("img").innerHTML="";
	input.style="display:none";
	output.style="display:flex";
	new QRCode(document.getElementById("img"),value);
}
document.querySelector("#regenerate").addEventListener('click',function(){
		output.style="display:none";
		input.style="display:flex";
});
document.getElementById("download").addEventListener("click",function(){
	saveAs(document.querySelector("img").getAttribute("src"),"QRCode");
})