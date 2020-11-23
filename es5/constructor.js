var Students_info = function(name, _class, roll, _subject){

	this.name = name;
	this._class = _class;
	this.roll = roll;
	this._subject = _subject;

	this.getStudent = function(){
		console.log("I am: "+this.name+"\n"+"I read in: "+this._class+"\n"+"Roll number: "+this.roll+"\n"+"My Subject name: "+this._subject+"\n");
	}
	// return getStudent;
};

var student1 = new Students_info("mbr-sagor", 10, 301719, "CSE");
var student2 = new Students_info("masba-uddin", 15, 203010, "EEE");

student1.getStudent();
student2.getStudent();
