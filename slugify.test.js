const slugify = require('./dist/index.js');

test('Hello World', () => {
    expect(slugify('Hello World')).toBe('hello-world');
});

test('Multiple Spaces', () => {
    expect(slugify('This   is   a   test')).toBe('this-is-a-test');
});

test('Special Characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
});

test('Mixed Case', () => {
    expect(slugify('HeLLo WoRLd')).toBe('hello-world');
});

test('Leading and Trailing Spaces', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world');
});

test('Empty String', () => {
    expect(slugify('')).toBe('');
});

test('Only Special Characters', () => {
    expect(slugify('!@#$%^&*()')).toBe('');
});

test('Numbers in String', () => {
    expect(slugify('Hello World 123')).toBe('hello-world-123');
});

test('Underscores and Dashes', () => {
    expect(slugify('Hello_World-Example')).toBe('hello-worldexample');
});

test('Non-ASCII Characters', () => {
    expect(slugify('Héllo Wörld')).toBe('hello-world');
});

test('Separator', () => {
    expect(slugify('Hello World', '_')).toBe('hello_world');
});