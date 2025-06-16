import { describe, it, expect } from 'vitest';
import TravelLists from './travel-lists.js';

describe('TravelLists', () => {
  it('<app-travel-lists> is an instance of TravelLists', async () => {
    const element = document.createElement('app-travel-lists');
    expect(element).to.be.instanceOf(TravelLists);
  });
});
