import { describe, it, expect } from 'vitest';
import FAQ from './faq.js';

describe('FAQ', () => {
  it('<app-faq> is an instance of FAQ', async () => {
    const element = document.createElement('app-faq');
    expect(element).to.be.instanceOf(FAQ);
  });
});
