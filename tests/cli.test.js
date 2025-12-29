const { execSync } = require('child_process');

describe('CLI Output', () => {
  it('should print hello message', () => {
    const output = execSync('node src/index.js').toString();
    expect(output.trim()).toBe('Hello from the AI-Powered DevOps CLI!');
  });
});
