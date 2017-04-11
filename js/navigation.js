var state;
var row = 1;
var col = 1;
jQuery('.nav-col-1').on('click' , function(){
	col = 1;
	return col;		
});
jQuery('.nav-col-2').on('click' , function(){
	col = 2;
	return col;		
});
jQuery('.nav-col-3').on('click' , function(){
	col = 3;
	return col;		
});
jQuery('.nav-row-1').on('click' , function(){
	row = 1;
	return row;		
});
jQuery('.nav-row-2').on('click' , function(){
	row = 2;
	return row;		
});
jQuery('.nav-row-3').on('click' , function(){
	row = 3;
	return row;		
});
jQuery('html').on('wheel', function (e) {
   	var delta = e.originalEvent.deltaY;
   	if (row  < 3 && delta > 0) {
		row++;
		change_states();
		return row;
   	} else if (row > 1 && delta < 0) {
		row--;
		change_states();
		return row;
    	}
});
function get_state(){
	var c;
	if(row == 1){
		c = 0;
	}
	if(row == 2){
		c = 3;
	}
	if(row == 3){
		c = 6;
	}
	state = col + c;
	return state;
	
}
function change_states(){
	get_state();
	for(i=1;i<10;i++){
		jQuery('body').removeClass('state_' + i);
	}
	jQuery('body').addClass('state_' + state );
}

for(j=1;j<10;j++){
	jQuery('.link_' + j).on('click' , function(){
		change_states();
	});
}