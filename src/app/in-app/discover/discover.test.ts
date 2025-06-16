import { describe, it, expect } from 'vitest';
import Discover from './discover.js';

describe('Discover', () => {
  it('<app-discover> is an instance of Discover', async () => {
    const element = document.createElement('app-discover');
    expect(element).to.be.instanceOf(Discover);
  });
});
