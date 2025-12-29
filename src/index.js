#!/usr/bin/env node

// Third demo change: Copilot PR review in action.
// Another demo change: Testing Copilot PR review.
// Demo change: This line was added for AI-powered PR review demo.

const args = process.argv.slice(2);
if (args[0] === '--greet' && args[1]) {
	console.log(`Hello, ${args[1]}!`);
} else {
	console.log('Hello from the AI-Powered DevOps CLI!');
}
