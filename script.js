const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1455199545msh53bfce68da0845bp10119cjsn23566562dee1',
		'X-RapidAPI-Host': 'codzz-qr-cods.p.rapidapi.com'
	}
};
let text=document.getElementById('text');
let value;
document.getElementById("submit").addEventListener("click",function (){
	value=text.value
	if(value=="" || value==null)
		document.querySelector(".inputerror").style.display="block";
	else{
		document.querySelector(".inputerror").style.display="none";
		requestData();
	}
})
let input=document.querySelector(".input");
let output=document.querySelector(".output");
document.querySelector("#regenerate").addEventListener('click',regenerate);
function requestData(){
	fetch('https://codzz-qr-cods.p.rapidapi.com/getQrcode?type=text&value='+value, options)
		.then(response => response.json())
		.then(response =>{
			console.log(response);
			input.style="display:none";
			output.style="display:flex";
			document.querySelector('.img').innerHTML=`<img src="${response.url}"/>`;
		})
		.catch(err => {
			if(err != 400){
				document.querySelector(".error").style="display:flex";
				input.style="display:none";
				output.style="display:none";
			}
			console.error(err);
		});
}
function regenerate(){
	output.style="display:none";
	input.style="display:flex";
}