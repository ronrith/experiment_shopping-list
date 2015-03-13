$(document).ready(function(){

	// Initial Setup, Default Items
	$(".cdate").html(getDate());	
	addItem('T-Shirt');
	addItem('Jeans');
	addItem('Laptop');
	addItem('LCD TV');
	addItem('Sneaker');
	updateCount();

	// Add Item to List 
	$(".itemButton").click(function(){  
		addItem($('.itemName').val());
	});
	$(".itemName").on('keypress', function(event){
		if (event.which==13)
			addItem($('.itemName').val());
	});


	// Remove Item from List
	$('.itemList').on('click', 'li span a', function(event){
		var thisItem = $(this).closest('li');
		// Fade Out thisItem
		$(thisItem).fadeOut(500, function(){
			thisItem.remove();
			updateCount();
		});
	});

	// Toggle Item Status
	$('.itemList').on('click', 'li', function(event){
		if ($(this).css("text-decoration")=="none"){
			$(this).css("text-decoration","line-through");
		}else{
			$(this).css("text-decoration","none");
		}
		updateCount();
	});	

}); 
 
// ======================================================

function updateCount(){
	$(".itemCount").html("List of Item(s) - Total: " + $('.itemList').children().length);
}

function addItem(itemAddName){
	if (itemAddName != ""){
		var itemremove='<span class="itemremove"><a href="#" class="linkRemove">Remove</a></span>';
		var itemvalue='<li>'+itemAddName+itemremove+'</li>';
		$(itemvalue).appendTo(".itemList").hide().fadeIn(Math.floor((Math.random() * 1000) + 300));
		$(".itemName").val("");
		updateCount(); 
	}
}

function getDate(){
	// Get today's date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd
	} 
	if(mm<10){
		mm='0'+mm
	} 
	var today = dd+'/'+mm+'/'+yyyy;
	return today;
}