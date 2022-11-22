// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('check if (858)-123-4567 is a phoneNumber', () => {
    let num = '(858)-123-4567'
    expect(functions.isPhoneNumber(num)).toBe(true);
});

test('check if (858)123-4567 is a phoneNumber', () => {
    let num = '(858)123-4567'
    expect(functions.isPhoneNumber(num)).toBe(true);
});

test('check if (858)-1234567 is a phoneNumber', () => {
    let num = '(858)-1234567'
    expect(functions.isPhoneNumber(num)).toBe(false);
});

test('check if 8581234567 is a phoneNumber', () => {
    let num = '8581234567'
    expect(functions.isPhoneNumber(num)).toBe(false);
});

// isEmail
test('check if someone@sth.com is an email', () => {
    let num = 'someone@sth.com'
    expect(functions.isEmail(num)).toBe(true);
});

test('check if someone@sth.edu is an email', () => {
    let num = 'someone@sth.edu'
    expect(functions.isEmail(num)).toBe(true);
});

test('check if someonesth.com is an email', () => {
    let num = 'someonesth.com'
    expect(functions.isEmail(num)).toBe(false);
});

test('check if someone is an email', () => {
    let num = 'someone'
    expect(functions.isEmail(num)).toBe(false);
});

// isStrongPassword
test('check if abcd is a strong password', () => {
    let num = 'abcd'
    expect(functions.isStrongPassword(num)).toBe(true);
});

test('check if abcd1234____ is a strong password', () => {
    let num = 'abcd1234____'
    expect(functions.isStrongPassword(num)).toBe(true);
});

test('check if 1abcd is a strong password', () => {
    let num = '1abcd'
    expect(functions.isStrongPassword(num)).toBe(false);
});

test('check if a123456789012345 is a strong password', () => {
    let num = 'a123456789012345'
    expect(functions.isStrongPassword(num)).toBe(false);
});

// isDate
test('check if 1/1/2020 is a date', () => {
    let num = '1/1/2020'
    expect(functions.isDate(num)).toBe(true);
});

test('check if 99/99/9999 is a date', () => {
    let num = '99/99/9999'
    expect(functions.isDate(num)).toBe(true);
});

test('check if 00 / 00 / 0000 is a date', () => {
    let num = '00 / 00 / 0000'
    expect(functions.isDate(num)).toBe(false);
});

test('check if 9999/99/99 is a date', () => {
    let num = '9999/99/99'
    expect(functions.isDate(num)).toBe(false);
});

// isHexColor
test('check if #DF8EF1 is a hex color', () => {
    let num = '#DF8EF1'
    expect(functions.isHexColor(num)).toBe(true);
});

test('check if #FFFFFF is a hex color', () => {
    let num = '#FFFFFF'
    expect(functions.isHexColor(num)).toBe(true);
});

test('check if #FFFFFG is a hex color', () => {
    let num = '#FFFFFG'
    expect(functions.isHexColor(num)).toBe(false);
});

test('check if #DF8EG1 is a hex color', () => {
    let num = '#DF8EG1'
    expect(functions.isHexColor(num)).toBe(false);
});