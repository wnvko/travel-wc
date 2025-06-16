import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';
import { DestinationsType } from '../../models/TravelAppData/destinations-type';
import { ImageSet1Type } from '../../models/TravelAppData/image-set1-type';
import { ImageSet2Type } from '../../models/TravelAppData/image-set2-type';
import { SelectedArticlesType } from '../../models/TravelAppData/selected-articles-type';
import { travelAppDataService } from '../../services/travel-app-data-service';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent);

@customElement('app-dashboard')
export default class Dashboard extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .left-content {
      background-color: var(--ig-gray-200);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      min-width: 480px;
      min-height: 50px;
      flex-grow: 4;
      flex-basis: 0;
    }
    .header {
      background-color: transparent;
      background-image: url("/src/assets/header-okVXy9tG3KY-unsplash.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 240px;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      margin: 0 0 16px;
    }
    .bottom-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 0 24px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .latest-articles {
      background-color: var(--ig-surface-500);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: -32px 0 0;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
    }
    .group_2 {
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .card {
      width: 240px;
      height: max-content;
      min-width: 240px;
      max-width: 240px;
      flex-shrink: 0;
    }
    .destinations {
      background-color: var(--ig-surface-500);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 24px;
      height: min-content;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_3 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .photos {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
      min-width: 280px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_6 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      overflow: hidden;
      padding: 24px;
      flex-shrink: 0;
    }
    .group_7 {
      background-color: var(--ig-gray-100);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 24px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_9 {
      background-color: transparent;
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      margin: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      background-color: transparent;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 4px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .h4 {
      color: var(--ig-surface-500);
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: var(--ig-surface-500);
      height: max-content;
      min-width: min-content;
      max-width: 600px;
    }
    .h6 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .text_1 {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-gray-500);
    }
    .image_1 {
      object-fit: cover;
      width: 49%;
      min-width: 49%;
      max-width: 49%;
    }
    .media-content {
      height: 120px;
      min-height: 120px;
      max-height: 120px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .button::part(base) {
      color: var(--ig-gray-900);
    }
    .button_1::part(base) {
      color: var(--ig-gray-900);
    }
    .list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.travelAppDataSelectedArticles = travelAppDataService.getSelectedArticles();
    this.travelAppDataDestinations = travelAppDataService.getDestinations();
    this.travelAppDataImageSet1 = travelAppDataService.getImageSet1();
    this.travelAppDataImageSet2 = travelAppDataService.getImageSet2();
  }

  @state()
  private travelAppDataSelectedArticles: SelectedArticlesType[] = [];

  @state()
  private travelAppDataDestinations: DestinationsType[] = [];

  @state()
  private travelAppDataImageSet1: ImageSet1Type[] = [];

  @state()
  private travelAppDataImageSet2: ImageSet2Type[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="column-layout left-content">
        <div class="column-layout header">
          <div class="column-layout group">
            <h4 class="h4">
              Hi, Sarah!
            </h4>
            <p class="typography__subtitle-1 text">
              We have some great suggestions for your next travel! We've searched the whole web to provide you with these rare findings - special for you!
            </p>
          </div>
        </div>
        <div class="column-layout bottom-content">
          <div class="column-layout latest-articles">
            <div class="row-layout group_1">
              <h6 class="h6">
                Latest in articles
              </h6>
              <igc-button variant="outlined" type="button" @click="${() => Router.go(`/in-app/articles`)}" class="button">
                view all ARTICLES
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
            <div class="row-layout group_2">
              ${this.travelAppDataSelectedArticles?.map((item) => html`
                <igc-card class="card">
                  <igc-card-media class="media-content">
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
                    <igc-icon-button variant="flat" slot="start">
                      <span class="material-icons">
                        bookmark_border
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                    <igc-icon-button variant="flat" slot="start">
                      <span class="material-icons">
                        share
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                    <igc-button variant="outlined" type="button" slot="end" class="button_1">
                      read
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
              `)}
            </div>
          </div>
          <div class="column-layout destinations">
            <div class="row-layout group_3">
              <h6 class="h6">
                Destinations
              </h6>
              <igc-button variant="outlined" type="button" class="button">
                VIEW ALL DESTINATIONS
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
            <div class="row-layout group_2">
              ${this.travelAppDataDestinations?.map((item) => html`
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
                  <igc-card-actions class="actions-content">
                    <igc-icon-button variant="flat" slot="start">
                      <span class="material-icons">
                        bookmark_border
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                    <igc-icon-button variant="flat" slot="start">
                      <span class="material-icons">
                        share
                      </span>
                      <igc-ripple></igc-ripple>
                    </igc-icon-button>
                    <igc-button variant="outlined" type="button" slot="end" class="button_1">
                      view
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
              `)}
            </div>
          </div>
          <div class="column-layout destinations">
            <div class="row-layout group_3">
              <h6 class="h6">
                My travel lists
              </h6>
              <igc-button variant="outlined" type="button" class="button">
                VIEW ALL LISTS
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
            <div class="row-layout group_4">
              <div class="column-layout group_5">
                <p class="typography__subtitle-2 text_1">
                  USA
                </p>
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="title">Grand Canyon</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Las Vegas, NV</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Niagara Falls</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Alaska</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Washington D.C.</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                </igc-list>
              </div>
              <div class="column-layout group_5">
                <p class="typography__subtitle-2 text_1">
                  WORLD
                </p>
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="title">Rome, Italy</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Paris, France</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">London, England</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Germany</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Tokio, Japan</div>
                    <span slot="end" class="material-icons icon">
                      keyboard_arrow_right
                    </span>
                  </igc-list-item>
                </igc-list>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-layout photos">
        <div class="row-layout group_6">
          <h6 class="h6">
            Photos
          </h6>
          <igc-button variant="outlined" type="button" class="button">
            GO TO ALBUM
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout group_7">
          <div class="column-layout group_8">
            <div class="row-layout group_9">
              <div class="row-layout group_10">
                ${this.travelAppDataImageSet1?.map((item) => html`
                  <img src="${item.image_url}" class="image_1" />
                `)}
                ${this.travelAppDataImageSet2?.map((item) => html`
                  <img src="${item.image_url}" class="image_1" />
                `)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
