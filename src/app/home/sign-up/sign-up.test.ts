import { describe, it, expect } from 'vitest';
import SignUp from './sign-up.js';

describe('SignUp', () => {
  it('<app-sign-up> is an instance of SignUp', async () => {
    const element = document.createElement('app-sign-up');
    expect(element).to.be.instanceOf(SignUp);
  });
});
