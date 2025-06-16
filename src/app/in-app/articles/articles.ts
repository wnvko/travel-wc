import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';
import { ArticlesSource1Type } from '../../models/TravelAppData/articles-source1-type';
import { ArticlesSource2Type } from '../../models/TravelAppData/articles-source2-type';
import { ArticlesSource3Type } from '../../models/TravelAppData/articles-source3-type';
import { ArticlesSource4Type } from '../../models/TravelAppData/articles-source4-type';
import { SelectedArticlesType } from '../../models/TravelAppData/selected-articles-type';
import { travelAppDataService } from '../../services/travel-app-data-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-articles')
export default class Articles extends LitElement {
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
    .all-articles {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 480px;
      min-height: 50px;
      flex-grow: 3;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: var(--ig-gray-100);
      z-index: 1;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: sticky;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .card {
      height: max-content;
      min-width: 280px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .recommended {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 280px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      background-color: var(--ig-gray-200);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .card_1 {
      height: max-content;
    }
    .h6 {
      height: max-content;
    }
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-secondary-500);
    }
    .media-content {
      height: 240px;
      min-height: 240px;
      max-height: 240px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .media-content_1 {
      height: 160px;
      min-height: 160px;
      max-height: 160px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .button::part(base) {
      color: var(--ig-gray-900);
    }
    .icon-button::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_1::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_2::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_3::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_4::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_5::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_6::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_7::part(base) {
      color: var(--ig-secondary-500);
    }
    .icon-button_8::part(base) {
      color: var(--ig-secondary-500);
    }
  `;

  constructor() {
    super();
    this.travelAppDataArticlesSource1 = travelAppDataService.getArticlesSource1();
    this.travelAppDataArticlesSource2 = travelAppDataService.getArticlesSource2();
    this.travelAppDataArticlesSource3 = travelAppDataService.getArticlesSource3();
    this.travelAppDataArticlesSource4 = travelAppDataService.getArticlesSource4();
    this.travelAppDataSelectedArticles = travelAppDataService.getSelectedArticles();
  }

  @state()
  private travelAppDataArticlesSource1: ArticlesSource1Type[] = [];

  @state()
  private travelAppDataArticlesSource2: ArticlesSource2Type[] = [];

  @state()
  private travelAppDataArticlesSource3: ArticlesSource3Type[] = [];

  @state()
  private travelAppDataArticlesSource4: ArticlesSource4Type[] = [];

  @state()
  private travelAppDataSelectedArticles: SelectedArticlesType[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout all-articles">
        <div class="column-layout group">
          <h6 class="h6">
            All articles
          </h6>
          <div class="row-layout group_1">
            ${this.travelAppDataArticlesSource1?.map((item) => html`
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="${item.image_url}" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.title}
                  </h3>
                  <h5 slot="subtitle">
                </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <p class="typography__body-2 text">
                    ${item.subtitle}
                  </p>
                </igc-card-content>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" type="button" slot="start" class="button">
                    READ
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button">
                    <span class="material-icons icon">
                      favorite
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_1">
                    <span class="material-icons icon">
                      share
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
            ${this.travelAppDataArticlesSource2?.map((item) => html`
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="${item.image_url}" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.title}
                  </h3>
                  <h5 slot="subtitle">
                </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <p class="typography__body-2 text">
                    ${item.subtitle}
                  </p>
                </igc-card-content>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" type="button" slot="start" class="button">
                    READ
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_2">
                    <span class="material-icons icon">
                      favorite
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_3">
                    <span class="material-icons icon">
                      bookmark
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_4">
                    <span class="material-icons icon">
                      share
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
            ${this.travelAppDataArticlesSource3?.map((item) => html`
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="${item.image_url}" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.title}
                  </h3>
                  <h5 slot="subtitle">
                </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <p class="typography__body-2 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </igc-card-content>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" type="button" slot="start" class="button">
                    READ
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_5">
                    <span class="material-icons icon">
                      favorite
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_6">
                    <span class="material-icons icon">
                      share
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
            ${this.travelAppDataArticlesSource4?.map((item) => html`
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="${item.image_url}" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.title}
                  </h3>
                  <h5 slot="subtitle">
                </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <p class="typography__body-2 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </igc-card-content>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" type="button" slot="start" class="button">
                    READ
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_7">
                    <span class="material-icons icon">
                      favorite
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button variant="flat" slot="end" class="icon-button_8">
                    <span class="material-icons icon">
                      share
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
          </div>
        </div>
      </div>
      <div class="column-layout recommended">
        <div class="column-layout group_2">
          <h6 class="h6">
            Recommended
          </h6>
          <div class="column-layout group_3">
            ${this.travelAppDataSelectedArticles?.map((item) => html`
              <igc-card class="card_1">
                <igc-card-media class="media-content_1">
                  <img src="${item.image_url}" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.title}
                  </h3>
                  <h5 slot="subtitle">
                    ${item.subtitle}
                  </h5>
                </igc-card-header>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" type="button" slot="start" class="button">
                    Read
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" slot="end">
                    <span class="material-icons">
                      bookmark_border
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button variant="flat" slot="end">
                    <span class="material-icons">
                      share
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}
