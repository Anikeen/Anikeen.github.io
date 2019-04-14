var menu_btn = document.querySelector('.menuToggle');
var nav = document.querySelector('.navigation');

menu_btn.onclick = function(){
	if (nav.className === 'navigation'){
		nav.className = 'navigation view';
	}
	else {
		nav.className = 'navigation';
	};
	
};
var dots = document.querySelectorAll('.dot'); 
var images = document.querySelectorAll('.imageHolder'); 
var prev_element = 0; 
var count = 0; 


for(var i = 0; i < dots.length; i++){
	dots[i].onclick = view;
};

function view(){	
	var button_id = this.getAttribute('id');	
	for(var i = 0; i < dots.length; i++){
		if(dots[i].getAttribute('id') === button_id){
			count = i;
			if(count > prev_element){
				for(var i = 0; i < count;){
				images[i].className = 'imageHolder viewedRight';
				dots[i].className = 'dot';
				i++;			
				images[i].className = 'imageHolder showed';
				};
			}
			else if(count < prev_element){
				for(var i = dots.length - 1; i > count;){
					images[i].className = 'imageHolder viewedLeft'; 
					dots[i].className = 'dot'; 
					i--;
					images[i].className = 'imageHolder showed';				
				};
			}
			dots[count].className = 'dot painted';
			break;			
		};
	};
	prev_element = count;
};

function next(){
	images[count].className = 'imageHolder viewedRight';
	dots[count].className = 'dot';
	count++;
	if(count >= dots.length){
		for(count -= 1;count >= 0;){
			images[count].className = 'imageHolder viewedLeft';			
			count--;
		};
		count = 0;
	}
	images[count].className = 'imageHolder showed';
	dots[count].className = 'dot painted';
	prev_element = count;
};

function prev(){
	images[count].className = 'imageHolder viewedLeft';
	dots[count].className = 'dot';
	count--;	
	if(count < 0){
		for(count +=1;count <= dots.length - 1;){
			images[count].className = 'imageHolder viewedRight';
			count++;
		}		
		count = dots.length - 1;
	}
	images[count].className = 'imageHolder showed';
	dots[count].className = 'dot painted';
	prev_element = count;
};
