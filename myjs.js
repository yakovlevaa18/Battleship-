var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess; //underfined
var hits = 0;
var guesses = 0;

var isSunk = false; 

while(isSunk == false){
	guess = prompt("Ты готов выстрелить? (введи цифру 0-6):"); 
	if(guess < 0 || guess > 6){
		alert("Нужно ввести от 0 до 6");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			alert("Попал");
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("Поздравляю! Ты выиграл!");
			}
		}else{
			alert("Ты промахнулся");
		}
	}
}
var status = "Ты выстрелил " + guesses + " раз(а). Для того чтобы попасть по кораблю, " + 
"это показывает уровень твоей точности, как: " + (3/guesses);
alert (status);
