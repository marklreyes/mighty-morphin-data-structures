'use strict';

// Linked list data structure.
const teamInLinkedListForm = {
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

let blackranger;
let pinkranger;
let blueranger;
let yellowranger;
let redranger;

blackranger = teamInLinkedListForm.head.value;
pinkranger = teamInLinkedListForm.head.next.value;
blueranger = teamInLinkedListForm.head.next.next.value;
yellowranger = teamInLinkedListForm.head.next.next.next.value;
redranger = teamInLinkedListForm.head.next.next.next.next.value;

console.log('Linked list data structure: blackranger = ', blackranger);
console.log('Linked list data structure: pinkranger = ', pinkranger);
console.log('Linked list data structure: blueranger = ', blueranger);
console.log('Linked list data structure: yellowranger = ', yellowranger);
console.log('Linked list data structure: redranger = ', redranger);

// Array data structure.
const teamInArrayForm = ['Zack', 'Kimberly', 'Billy', 'Trini', 'Jason'];

blackranger = teamInArrayForm[0];
pinkranger = teamInArrayForm[1];
blueranger = teamInArrayForm[2];
yellowranger = teamInArrayForm[3];
redranger = teamInArrayForm[4];

console.log('Array data structure: blackranger = ', blackranger);
console.log('Array data structure: pinkranger = ', pinkranger);
console.log('Array data structure: blueranger = ', blueranger);
console.log('Array data structure: yellowranger = ', yellowranger);
console.log('Array data structure: redranger = ', redranger);
