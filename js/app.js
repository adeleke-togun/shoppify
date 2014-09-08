//Assign text box input to variable input
var item = $(".user_input");
//Assign add item button to variable addItem
var addItem = $(".addItem");

// var newItem = item.val();

var acts = {
	//create a function that adds the new entry into the list
	addtoList: function(){
		//Assign the value of the item to a variable newItem
		var newItem = item.val();
		//Put the item and tags into the variable content
		var content = "<li>" + "<input type='checkbox'/>" + "<label>" + newItem + "</label>" + "</li>"; 
		console.log(content);
		// $(content).appendTo(".wishlist ul");
		$(".wishList ul").append(content)
	},
	//Request submit button to add Item when clicked
	submitAction: function(){
		addItem.click(function(event) {
			event.preventDefault();
			acts.addtoList();
			console.log("clicked");
		})
	},



	//create a function that initializes actions
	initialize: function(){
		acts.submitAction();
			console.log("clicked");
	}
}

$(document).ready(acts.initialize());

