import { describe, it, expect } from 'vitest';
import SetNewPassword from './set-new-password.js';

describe('SetNewPassword', () => {
  it('<app-set-new-password> is an instance of SetNewPassword', async () => {
    const element = document.createElement('app-set-new-password');
    expect(element).to.be.instanceOf(SetNewPassword);
  });
});
