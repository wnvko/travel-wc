import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcInputComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-set-new-password')
export default class SetNewPassword extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .left {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 40px;
      position: relative;
      margin: 64px;
      min-width: 320px;
      min-height: 50px;
      max-width: 480px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .right {
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .image {
      object-fit: scale-down;
      width: 156px;
      height: 18px;
      min-width: 0;
      min-height: 0;
      max-width: 156px;
      max-height: 18px;
      flex-shrink: 0;
    }
    .h5 {
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
    }
    .image_1 {
      object-fit: cover;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .input {
      height: max-content;
      min-width: min-content;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
  `;

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout left">
        <div class="column-layout group">
          <img src="/src/assets/Travel-App-Color-Logo.svg" class="image" />
          <div class="column-layout group_1">
            <div class="column-layout group_2">
              <h5 class="h5">
                Set new password
              </h5>
              <p class="typography__body-2 text">
                Please, type your new password and click confirm.
              </p>
            </div>
            <div class="column-layout group_1">
              <igc-input type="password" label="Password" placeholder="Min 8 characters" ?outlined="${false}" class="input"></igc-input>
              <igc-input type="password" label="Repeat Password" placeholder="Min 8 characters" ?outlined="${false}" class="input"></igc-input>
            </div>
          </div>
          <igc-button type="button" @click="${() => Router.go(`/home/login`)}" class="button">
            confirm new password
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="row-layout right">
        <img src="/src/assets/NewPassword.jpg" class="image_1" />
      </div>
    `;
  }
}
