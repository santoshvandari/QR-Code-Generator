/*
 Code Written By Santosh Bhandari
 Instagram: santosh.vandari
 */
let text=document.getElementById("text");
let input=document.querySelector(".input");
let output=document.querySelector(".output");
let inputerror=document.querySelector(".inputerror");
let generror=document.querySelector(".generror");
document.getElementById("submit").addEventListener("click",function (){
	value=text.value
	if(value=="" || value==null){
		inputerror.style.display="block";
		generror.style.display="none";
	}else if(value.length>24){ //change the length with the maximum character supported by the QR Code;
		console.log(value.length)
		generror.style.display="block";
		inputerror.style.display="none";
	}else{
		generror.style.display="none";
		inputerror.style.display="none";
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