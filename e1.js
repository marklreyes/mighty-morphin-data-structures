'use strict';

// Power Rangers
let blackranger;
let pinkranger;
let blueranger;
let yellowranger;
let redranger;

// Linked list - a collection of items where each item points to the next one in the list.
const linkedListOfRangers = {
	head: {
		value: 'Zack',
		next: {
			value: 'Kimberly',
			next: {
				value: 'Billy',
				next: {
					value: 'Trini',
					next: {
						value: 'Jason',
						next: null
					}
				}
			}
		}
	}
};

// Okay, I’ve got the team in place. Let’s have a dress rehearsal just in case things go down.
// Let’s say I can’t get the entire team in one go. Can I cherry-pick a single person quickly?
blackranger = linkedListOfRangers.head.value;
pinkranger = linkedListOfRangers.head.next.value;
blueranger = linkedListOfRangers.head.next.next.value;
yellowranger = linkedListOfRangers.head.next.next.next.value;
redranger = linkedListOfRangers.head.next.next.next.next.value;

console.log('Linked list data structure: blackranger = ', blackranger);
console.log('Linked list data structure: pinkranger = ', pinkranger);
console.log('Linked list data structure: blueranger = ', blueranger);
console.log('Linked list data structure: yellowranger = ', yellowranger);
console.log('Linked list data structure: redranger = ', redranger);

// To get Black Ranger, it's straightforward. But for anyone past that, it may
// take longer because you have to call the next key in order to get to the ranger you want.


// Okay, let’s try this again. Can I access any one of the 5 Rangers quickly?

// Array - has quick gets when searching for an index.
const arrayOfRangers = ['Zack', 'Kimberly', 'Billy', 'Trini', 'Jason'];

blackranger = arrayOfRangers[0];
pinkranger = arrayOfRangers[1];
blueranger = arrayOfRangers[2];
yellowranger = arrayOfRangers[3];
redranger = arrayOfRangers[4];

console.log('Array data structure: blackranger = ', blackranger);
console.log('Array data structure: pinkranger = ', pinkranger);
console.log('Array data structure: blueranger = ', blueranger);
console.log('Array data structure: yellowranger = ', yellowranger);
console.log('Array data structure: redranger = ', redranger);

// Nice. This will do.
