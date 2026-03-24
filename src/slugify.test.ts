import {slugify} from './index';
import {expect, test} from '@jest/globals';

test('Hello World', () => {
    expect(slugify('Hello World')).toBe('hello-world');
});

test('Hello World 2', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
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
    expect(slugify('Hello_World-Example')).toBe('hello-world-example');
});

test('Non-ASCII Characters', () => {
    expect(slugify('Héllo Wörld')).toBe('hello-world');
});

test('Separator', () => {
    expect(slugify('Hello World', '_')).toBe('hello_world');
});

test('Special Character at the end', () => {
    expect(slugify('Café')).toBe('cafe');
});

test('Arabic Characters', () => {
    expect(slugify('مرحبا بالعالم')).toBe('');
});

test('Numbers', () => {
    expect(slugify('123 456')).toBe('123-456');
});

test('A single space', () => {
    expect(slugify(' ')).toBe('');
});

test('Multiple separators', () => {
    expect(slugify('Hello--World__Example')).toBe('hello-world-example');
});

test('Only seperators', () => {
    expect(slugify('---___  ___---')).toBe('');
});

test('Wrong input type', () => {
    expect(() => slugify(123 as unknown as string)).toThrow("Input must be a string");
});

test('Wrong separator type', () => {
    expect(() => slugify('Hello World', 123 as unknown as string)).toThrow("Separator must be a string");
});

test('Armenian Characters', () => {
    expect(slugify('Բարեւ աշխարհ')).toBe('');
});

test('Chinese Characters', () => {
    expect(slugify('你好世界')).toBe('');
});

test('Emoji Characters', () => {
    expect(slugify('Hello World 😊')).toBe('hello-world');
});