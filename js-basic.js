// console.log("자바스크립트 세계에 오신것을 환영합니다.");

//scope of var (var 생명 주기)

var fruits = "apple";

var count = 5;

const message = "사과의 갯수는 ?";
console.log(message);

if (count > 4) {
	const message = "사과의 갯수는 5개 입니다.";
	message = "사과의 갯수는 5개 ";
	console.log(message);
}

console.log(message); //사과의 갯수는 5개 입니다. 출력

// const fruits = {
// 	fruits: "apple",
// 	count: 5,
// 	message: "사과 5개",
// };

// console.log(fruits);
// console.log("----------------");
// fruits.count = 4;
// fruits.fruits = "banana";
// fruits.message = "사과 4개";
// console.log(fruits);
