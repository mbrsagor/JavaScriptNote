var addFunc = new Function("a", "b", "return a+b");
console.log(addFunc(70, 30));

function oddEvent(){
	var num= 10;
	var n;
	for(n=0; n<=num; n++){
		if (n%2 === 0) {
			console.log(n);
		}
	}
}

oddEvent()

console.log('\n');

function login(username, password){

	var _login = "username: "+username+" password:"+password;
	return _login;
}

console.log(login("mbr-sagor", "s12345"));

console.log('\n');


var num = 123456789;
function LocalGlobal(){
	console.log(num);
}

LocalGlobal()