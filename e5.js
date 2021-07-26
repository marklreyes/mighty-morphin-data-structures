'use strict';

function createStack() {
	// Store our items in an array held in closure.
	const stack = [];

	// Return our stack as a plain JS object.
	return {
		// Place new items at the end of the array.
		push(x) {
			stack.push(x);
		},
		// Remove the final item in the array. This ensures order is maintained.
		pop() {
			if (stack.length === 0) {
				return undefined;
			}
			return stack.pop()
		},
		// Return the last item in the array.
		peek() {
			if (stack.length === 0) {
				return undefined;
			}
			if (stack.length === 5) {
				return 'MegaZord activated!';
			}
			return stack[stack.length - 1]
		},
		// Use a getter ensures we always get the current length.
		get length() {
			return stack.length;
		},
		isEmpty() {
			return stack.length === 0;
		}
	}
}

const megaZordStack = createStack();

// MegaZord sequence has been initiated.
megaZordStack.push('Triceratops');
megaZordStack.push('Sabertooth Tiger');
megaZordStack.push('Mastodon');
megaZordStack.push('Pterodactyl');
megaZordStack.push('Tyrannosaurus');

// Is MegaZord activated?
console.log(megaZordStack.peek());
console.log(megaZordStack.length);

// Mission accomplished. Pop the stack.
megaZordStack.pop();
console.log(megaZordStack.peek());
console.log(megaZordStack.length);
megaZordStack.pop();
console.log(megaZordStack.peek());
console.log(megaZordStack.length);
megaZordStack.pop();
console.log(megaZordStack.peek());
console.log(megaZordStack.length);
megaZordStack.pop();
console.log(megaZordStack.peek());
console.log(megaZordStack.length);
megaZordStack.pop();
console.log(megaZordStack.peek());
console.log(megaZordStack.length);
