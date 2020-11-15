// for (let age = 30; age < 40; age++) {
// 	console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
// 	let i = 0;
// 	while (i < gifts.length) {
// 		console.log(`Wrapped ${gifts[i]} and added a bow!`);
// 		i++;
// 	}
// 	return gifts;
// }

// wrapGifts(gifts);

let giftArray = []

function writeCards(array, event) {
	for (let i = 0; i < array.length; i++) {
		giftArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
		
	}
	return giftArray
}

function countDown(num) {
	while (num > 0) {
	console.log(num)
	num -=1
	}
	console.log(num)
}
