import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * Here goes before each tests exist here
 */
let getByTestId;

beforeEach(() => {
  const comp = render(<Counter />);
  getByTestId = comp.getByTestId;
});
/**
 * Here goes before each tests exist finished
 */

// test cases
test('It tests whether header exists with correct text', () => {
  const header = getByTestId('header');

  expect(header.textContent).toBe('My Counter');
});

test('It tests whether the counter exists on the screen', () => {
  const count = getByTestId('count');

  expect(count.textContent).toBe('0');
});

test('It tests whether minus is exists', () => {
  const minus = getByTestId('minus');

  expect(minus.textContent).toBe('-');
});

test('It tests whether input is exists with initial 0 value', () => {
  const input = getByTestId('input');

  expect(input.value).toBe('0');
});

test('It tests whether plus is exists', () => {
  const plus = getByTestId('plus');

  expect(plus.textContent).toBe('+');
});

test('It tests when clicking plus button whether counter grows up', () => {
  const plus = getByTestId('plus');
  const count = getByTestId('count');

  expect(count.textContent).toBe('0');

  fireEvent.click(plus);

  expect(count.textContent).toBe('1');
});

test('It tests when clicking minus button whether counter decreases', () => {
  const minus = getByTestId('minus');
  const count = getByTestId('count');

  expect(count.textContent).toBe('0');

  fireEvent.click(minus);

  expect(count.textContent).toBe('-1');
});
// tests completed

/**
 * TODOS: cleanup , afterAll and beforeAll
 */
