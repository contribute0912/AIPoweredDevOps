const { execSync } = require('child_process');

describe('CLI Output', () => {
  it('should print hello message', () => {
    const output = execSync('node src/index.js').toString();
    expect(output.trim()).toBe('Hello from the AI-Powered DevOps CLI!');
  });

  it('should greet a user when --greet is used', () => {
    const output = execSync('node src/index.js --greet Alice').toString();
    expect(output.trim()).toBe('Hello, Alice!');
  });
});
