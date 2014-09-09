var acts = {

	item:null,
	addItem:null,
	wishlist:null,
	purchased:null,

	//A function that checks to see if user input is valid 
	validate: function(newItem){
		if(newItem.length<1){
			return false;
		}
		else return true;
	},
	
	//create a function that adds the new entry into the list
	addtoList: function(e){
		//Assign the value of the item to a variable newItem
		var newItem = acts.item.val().trim();
		e.preventDefault();
		//call the validate function on the new input
		if(!acts.validate(newItem)){
			alert("You have not entered an item into the list")
			return;
		}
		//Put the item and tags into the variable content
		var content = "<li>" + "<input type='checkbox'/>" + "<label>" + newItem + "</label>" + "<img src='img/Modify.png' alt='edit' id='edit'>" +"<img src='img/Delete-icon.png' alt='delete' id='delete'>" + "</li>"; 
		console.log(content);
		// $(content).appendTo(".wishlist ul");
		$(".wishList ul").append(content)
		acts.item.val("");
	},

	//A function that fixes an item to a list based on it's status
	checkUncheck: function(){
			if(this.checked){
				$(this).parent().appendTo(acts.purchased);
			} else {
				$(this).parent().appendTo(acts.wishlist);
			}
	},

	//Delete function
	deleteItem: function(){
		if(confirm("Are you sure you want to delete this item from your list?"))
			$(this).parent().remove();
		
	}, 
	initEvents:function()
	{
		$(document).on("click", "#delete",acts.deleteItem);
		$(document).on("change", "input[type=checkbox]",acts.checkUncheck);
		acts.addItem.click(acts.addtoList);	
	},

	//create a function that initializes actions
	initialize: function(){
		//Assign add item button to variable addItem
		acts.addItem = $(".addItem");
		acts.item = $(".user_input");
		//Assign the wishlist to a variable
		acts.wishlist = $(".wishList ul")
		//Assign the purchased list to a variable
		acts.purchased = $(".purchased ul")
		acts.addItem.click(acts.addtoList);	
		
		acts.checkUncheck();
		acts.wishlist = $(".wishList ul");
		acts.purchased = $(".purchased ul");
		
		//event handlers
		acts.initEvents();
	}
}
$(document).ready(acts.initialize);

