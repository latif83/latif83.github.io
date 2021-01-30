alert('connected');
function previewfile(){
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