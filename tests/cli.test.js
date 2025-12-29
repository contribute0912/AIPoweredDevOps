describe('CLI Output', () => {
const { execSync } = require('child_process');

describe('CLI Output', () => {
  it('should print hello message', () => {
    const output = execSync('node src/index.js').toString();
    expect(output.trim()).toBe('Hello from the AI-Powered DevOps CLI!');
  });

  it('should print version when --version is passed', () => {
    const output = execSync('node src/index.js --version').toString();
    expect(output.trim()).toBe('AI-Powered DevOps CLI v1.0.0');
  });
});
