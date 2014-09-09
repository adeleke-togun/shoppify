var acts = {

	item:null,
	addItem:null,
	wishlist:null,
	purchased:null,
	//create a function that adds the new entry into the list
	addtoList: function(e){
		//Assign the value of the item to a variable newItem
		var newItem = acts.item.val();
		e.preventDefault();
		//Put the item and tags into the variable content
		var content = "<li>" + "<input type='checkbox'/>" + "<label>" + newItem + "</label>" + "</li>"; 
		console.log(content);
		// $(content).appendTo(".wishlist ul");
		$(".wishList ul").append(content)
		acts.item.val("");
	},

		//A function that fixes an item to a list based on it's status
	checkUncheck: function(){
		$(document).on("change", "input[type=checkbox]",function(){
			if(this.checked){
				$(this).parent().appendTo(acts.purchased);
			} else {
				$(this).parent().appendTo(acts.wishlist);
			}
		});
	},
	//create a function that initializes actions
	initialize: function(){
		//Assign add item button to variable addItem
		acts.addItem = $(".addItem");
		//Assign text box input to variable input
		acts.item = $(".user_input");
		//Assign the wishlist to a variable
		acts.wishlist = $(".wishList ul")
		//Assign the purchased list to a variable
		acts.purchased = $(".purchased ul")
		acts.addItem.click(acts.addtoList);	
		
		acts.checkUncheck();
	}
}

$(document).ready(acts.initialize);

