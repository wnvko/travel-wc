import { describe, it, expect } from 'vitest';
import InApp from './in-app.js';

describe('InApp', () => {
  it('<app-in-app> is an instance of InApp', async () => {
    const element = document.createElement('app-in-app');
    expect(element).to.be.instanceOf(InApp);
  });
});
