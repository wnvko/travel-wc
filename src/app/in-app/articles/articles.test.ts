import { describe, it, expect } from 'vitest';
import Articles from './articles.js';

describe('Articles', () => {
  it('<app-articles> is an instance of Articles', async () => {
    const element = document.createElement('app-articles');
    expect(element).to.be.instanceOf(Articles);
  });
});
