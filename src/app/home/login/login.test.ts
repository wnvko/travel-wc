import { describe, it, expect } from 'vitest';
import Login from './login.js';

describe('Login', () => {
  it('<app-login> is an instance of Login', async () => {
    const element = document.createElement('app-login');
    expect(element).to.be.instanceOf(Login);
  });
});
