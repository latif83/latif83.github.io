	function light(){
			//document.getElementById('a').style.display='none';
			//document.getElementById('b').style.display='block';
			var x=document.getElementById('lightoff');
			var y=document.getElementById('lighton');
			var z=document.getElementById('buttonlight');
			//document.getElementById('k').style.background='red';
          if (y.style.display==="none") {
           	x.style.display='none';
           	y.style.display='block';
           	z.textContent='TURN LIGHTS OFF';
           }else{
           	x.style.display='block';
           	y.style.display='none';
           	z.textContent='TURN LIGHTS ON';
           }
          
					}