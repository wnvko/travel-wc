import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcAvatarComponent, IgcNavDrawerComponent);

@customElement('app-in-app')
export default class InApp extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: var(--ig-gray-900);
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_1 {
      background-color: var(--ig-surface-500);
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      padding: 8px 16px;
      height: 100%;
      min-height: 100%;
      max-height: 100%;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      background-color: var(--ig-gray-900);
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      padding: 8px 16px;
      min-width: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .icon-button::part(base) {
      color: var(--ig-surface-500);
    }
    .icon-button_1::part(base) {
      color: var(--ig-surface-500);
    }
    .image {
      object-fit: cover;
      width: 160px;
      min-width: 0;
      min-height: 0;
      max-width: 160px;
      flex-shrink: 0;
    }
    .icon {
      color: var(--ig-surface-500);
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .text {
      color: var(--ig-gray-200);
      height: max-content;
      min-width: min-content;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 320px;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
  `;

  @query('#nav-drawer')
  private navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout group">
        <div class="row-layout group_1">
          <igc-icon-button variant="flat" @click="${() => this.navDrawer?.toggle()}">
            <span class="material-icons">
              menu
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <img src="/src/assets/Travel-App-Color-Logo.svg" class="image" />
        </div>
        <div class="row-layout group_2">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons icon">
              notifications
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button_1">
            <span class="material-icons icon">
              search
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-avatar src="/src/assets/Avatar2.png" shape="circle" class="avatar"></igc-avatar>
          <p class="typography__body-2 text">
            Sarah W.
          </p>
        </div>
      </div>
      <igc-nav-drawer id="nav-drawer" class="nav-drawer">
        <igc-nav-drawer-item @click="${() => Router.go(`/in-app/dashboard`)}">
          <span slot="icon">
            <span class="material-icons icon_1">
              dashboard
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Dashboard</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go(`/in-app/discover`)}">
          <span slot="icon">
            <span class="material-icons icon_1">
              image_search
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Discover</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go(`/in-app/travel-lists`)}">
          <span slot="icon">
            <span class="material-icons icon_1">
              playlist_add_check
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Travel lists</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go(`/in-app/articles`)}">
          <span slot="icon">
            <span class="material-icons icon_1">
              chrome_reader_mode
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Articles</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go(`/in-app/faq`)}">
          <span slot="icon">
            <span class="material-icons icon_1">
              question_answer
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">FAQ</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <span slot="icon">
            <span class="material-icons icon_1">
              settings
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Settings</div>
        </igc-nav-drawer-item>
      </igc-nav-drawer>
      <slot class="view-container"></slot>
    `;
  }
}
