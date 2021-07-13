'use strict';

function createQueue() {
	// Store our items in an array held in closure.
	const queue = [];

	return {
		// Use unshift(), to keep the collection of the array in order by adding items to the front.
		enqueue(x) {
			queue.unshift(x);
		},
		// Use pop(), to remove the final item from the array while maintain order.
		dequeue() {
			if (queue.length === 0) {
				return undefined;
			}
			return queue.pop();
		},
		// Return the next item that's ready to be removed.
		peek() {
			if (queue.length === 0) {
				return undefined;
			}
			return queue[queue.length - 1];
		},
		// Use a getter function to get the CURRENT queue's length.
		get length() {
			return queue.length;
		},
		isEmpty() {
			return queue.length === 0;
		}
	}
}

// Create a queue.
const q = createQueue();

// Let's check if the queue is empty.
console.log('1. Is the queue empty?', q.isEmpty());

// Enqueue our tasks.
q.enqueue('TASK 1: Fight putties.');
q.enqueue('TASK 2: Fight Goldar.');

// Let's check if the queue is loaded.
console.log('2. Is the queue loaded?', q.isEmpty());

// Dequeue Putties.
q.dequeue();
console.log('3. Bye bye putties -> ', q.peek());

// Dequeue Goldar.
q.dequeue();
console.log('4. Bye bye Goldar -> ', q.peek());

// Let's check if the queue is empty.
console.log('5. Is the queue empty?', q.isEmpty());
