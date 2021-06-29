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
