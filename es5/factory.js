var users_information = function(name, age, phn_num){

	var info = {};
	info.name = name;
	info.age = age;
	info.phn_num = phn_num;

	info.setterUser = function(){
		console.log("Username: "+this.name+"\n"+"Age:"+this.age+"\n"+"Phone Number: "+this.phn_num+"\n");
	}

	return info;

};

var user1 = users_information("mbr-sagor", 23, 1773474709);
var user2 = users_information("russel-mahmud", 33, 123456789);
var user3 = users_information("saif-nirob", 23, 1768262636);

user1.setterUser()
user2.setterUser()
user3.setterUser()