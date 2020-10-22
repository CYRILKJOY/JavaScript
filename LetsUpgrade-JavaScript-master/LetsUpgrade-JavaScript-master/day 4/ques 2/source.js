const student = {
	name:"Helsink",
	age:24,
	projects:{
		diceGame:"two players dice game using Java script"
	}

}
console.log(student.name);
console.log(student.age);
console.log(student.projects.diceGame);

/********************* */

const{name,age,projects:{diceGame}}=student;
console.log(student);