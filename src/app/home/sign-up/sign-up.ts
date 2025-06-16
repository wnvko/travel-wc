import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCheckboxComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcInputComponent, IgcCheckboxComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-sign-up')
export default class SignUp extends LitElement {
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
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      border-color: var(--ig-gray-300);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
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
    .checkbox {
      width: max-content;
      height: max-content;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .button_1::part(base) {
      color: var(--ig-gray-900);
    }
  `;

  @state()
  private checked?: any = true;

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout left">
        <div class="column-layout group">
          <img src="/src/assets/Travel-App-Color-Logo.svg" class="image" />
          <div class="column-layout group_1">
            <h5 class="h5">
              Sign Up
            </h5>
            <p class="typography__body-2 text">
              Don't have an account? Sign up now for free and enjoy thousands of great travel opportunities
            </p>
          </div>
          <div class="column-layout group_2">
            <igc-input type="email" label="Email address" placeholder="myname@website.com" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="password" label="Password" placeholder="Min 8 characters" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="password" label="Repeat Password" placeholder="Min 8 characters" ?outlined="${false}" class="input"></igc-input>
            <div class="row-layout group_3">
              <igc-checkbox labelPosition="after" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="checkbox">
                Remember me
              </igc-checkbox>
            </div>
          </div>
          <div class="column-layout group_4">
            <igc-button type="button" @click="${() => Router.go(`/in-app/dashboard`)}" class="button">
              Create new account
              <igc-ripple></igc-ripple>
            </igc-button>
            <div class="row-layout group_5"></div>
            <igc-button variant="outlined" type="button" @click="${() => Router.go(`/home/login`)}" class="button button_1">
              Already have an account? SIgn in
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
      </div>
      <div class="row-layout right">
        <img src="/src/assets/SignUp.jpg" class="image_1" />
      </div>
    `;
  }
}
