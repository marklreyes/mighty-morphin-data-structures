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

function createPriorityQueue() {
// Make two queues held in closure to determine priority.
  const highPriorityQueue = createQueue();
  const lowPriorityQueue = createQueue();

  return {
	// Set high priority to false by default. Ternary operator will determine if it's high/low priority.
    enqueue(item, isHighPriority = false) {
      const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue;
      queue.enqueue(item);
    },
	// Make sure high priority queue is emptied first BEFORE attempting to dequeue from low priority queue.
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
	// Similar to dequeue(), let's peek from the high priority queue first.
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
	// Conjunction of our 2 queues.
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  }
}

const q = createPriorityQueue();

// Let's check if the queue is empty.
console.log('1. Is the queue empty?', q.isEmpty());

// Enqueue our tasks.
q.enqueue('TASK 1: Fight putties.');
q.enqueue('TASK 2: Fight Goldar.');

// Let's check if the queue is loaded.
console.log('2. Is the queue empty?', q.isEmpty());

// What's in the queue so far?
console.log('What is in the queue?', q.peek());

// Dequeue Putties.
q.dequeue();
console.log('3. Bye bye putties -> ', q.peek());

// 300 foot Scorpina came out of nowhere!
q.enqueue('EMERGENCY TASK: Fight Scorpina.', true);
console.log(q.dequeue());

// Back to Goldar.
console.log(q.peek());

