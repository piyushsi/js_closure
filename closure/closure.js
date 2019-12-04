function nonsense(string){
	var blab = function(){
	   alert(string);
	 }
	 blab();
}

function nonsense(string){
	var blab = function(){
	   alert(string);
	 }
	 setTimeout(()=>blab(),1000);
}

function nonsense(string){
	var blab = function(){
	   return (string);
	 }
	 var blabLater=blab('rithik');
	 return blabLater;
}
function nonsense(string){
	var blab = function(){
	   return (string);
	 }
	 var blabLaterAgain=blab('piyush');
	 return blabLaterAgain;
}

var lastNameTrier = function(firstName){

	    return function(LastName) {
	 		return firstName+" "+ LastName
	    };
	    
	};
	var firstNameFarmer = lastNameTrier('Farmer'); 
	firstNameFarmer('Brown'); 


