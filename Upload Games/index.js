function featureimage(){
			var visible=document.getElementById('preview');
			var preview=document.querySelector('img');
			var file=document.querySelector('input[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
		}
		function getContent(){
		document.getElementById('description').value=document.getElementById('text_content').innerHTML;
		}
		/*function check{
			var check1=document.getElementById('checkbox1');
			var check2=document.getElementById('checkbox2');
			var check3=document.getElementById('checkbox3');
			if (check1.checked=true) {
				check2.checked=false;
				check3.checked=false;
			}
			else if (check2.checked==true) {
				check1.checked=false;
				check3.checked=false;
			}
			else if (check3.checked==true) {
				check1.checked=false;
				check3.checked=false;
			}
			else{
				check1.checked=true;
				check2.checked=false;
				check3.checked=false;
			}
		}*/
		/*function submitforms(){
			document.getElementById('form1').submit();
			document.getElementById('form2').submit();
		}*/
function previewscreenshots0(){
	var visible=document.getElementById('view0');
			var preview=document.querySelector('img#view0');
			var file=document.querySelector('input#Screenshots0[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
}
function previewscreenshots1(){
	var visible=document.getElementById('view1');
			var preview=document.querySelector('img#view1');
			var file=document.querySelector('input#Screenshots1[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
}
function previewscreenshots2(){
	var visible=document.getElementById('view2');
			var preview=document.querySelector('img#view2');
			var file=document.querySelector('input#Screenshots2[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
}
function previewscreenshots3(){
	var visible=document.getElementById('view3');
			var preview=document.querySelector('img#view3');
			var file=document.querySelector('input#Screenshots3[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
}
function previewscreenshots4(){
	var visible=document.getElementById('view4');
			var preview=document.querySelector('img#view4');
			var file=document.querySelector('input#Screenshots4[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
}
function previewscreenshots5(){
	var visible=document.getElementById('view5');
			var preview=document.querySelector('img#view5');
			var file=document.querySelector('input#Screenshots5[type=file]').files[0];
			var reader=new FileReader();
			reader.onloadend=function(){
				preview.src=reader.result;
			}
			if(file){
				reader.readAsDataURL(file);
				visible.style.display="block";
			} else{
				preview.src="";
				visible.style.display="none"
			}
}
