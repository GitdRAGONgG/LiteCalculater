function forclear() {
document.getElementById("Output").innerHTML = " ";
}

function fordisplay(x) {
if (x == '1') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "1";
} else if (x == '2') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "2";
} else if (x == '3') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "3";
} else if (x == '4') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "4";
} else if (x == '5') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "5";
} else if (x == '6') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "6";
} else if (x == '7') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "7";
} else if (x == '8') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "8";
} else if (x == '9') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "9";
} else if (x == '.') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + ".";
} else if (x == '0') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "0";
}
}

function mean(x) {
const fNum = document.getElementById("Output").innerHTML;
console.log(fNum)
if (x == '*') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "*";

} else if (x == '/') {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "/";

} else if (x == '+'){
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "+";

} else if (x == '-'){
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + "-";

}
}

function procent(x) {
let procent = document.getElementById("Output").innerHTML;
let outProcent = procent / 100
document.getElementById("Output").innerHTML = outProcent;
}

function solve(x) {
let rovno = document.getElementById("Output").innerHTML;
document.getElementById("Output").innerHTML = eval(rovno);

}

let did = '12345';
let dud = did.split('')
console.log(dud)
console.log(dud[0])

// let name = 'Daniil';
// let hi = `Hello, ${name}! How are you?`;
// console.log(hi)

// const func = {
// 	name: 'Danil',
// 	age: 16,
// 	isMarried: false,
// 	sayHi: function (name) {
// 		console.log(`Ку, ${name}! Как твои дела?`)
// 		return 12-2;
// 	} 
// }

// func.sayHi('');

class person {
	constructor(userName, age, isMarried){
		this.userName = userName;
		this.age = age;
		this.isMarried = isMarried;
	}

	sayHi(name) {
		console.log(`Привет, ${name}! Меня зовут ${this.userName}, мне ${this.age} лет.`)
	}
}

const person1 = new person("Марк", 30, false)
const person2 = new person("Павел", 24, true)
person1.sayHi('Даниил')
person2.sayHi('Даниил')

class Person {
	constructor(Name, Age, Married) {
		this.Name = Name;
		this.Age = Age;
		this.Married = Married;
	}
	hiSay(name) {
		console.log(`Привет ${name}! Меня зовут ${this.Name}, приятно познакомиться)`)
	}
}

const Person1 = new Person('Максим', 72, true)
Person1.hiSay('Валентина')