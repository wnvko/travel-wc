import { describe, it, expect } from 'vitest';
import Home from './home.js';

describe('Home', () => {
  it('<app-home> is an instance of Home', async () => {
    const element = document.createElement('app-home');
    expect(element).to.be.instanceOf(Home);
  });
});
