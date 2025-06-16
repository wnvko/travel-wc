import { Route } from '@vaadin/router';
import './dashboard/dashboard';
import './discover/discover';
import './travel-lists/travel-lists';
import './articles/articles';
import './faq/faq';

export const routes: Route[] = [
  { path: 'faq', component: 'app-faq', name: 'FAQ' },
  { path: 'articles', component: 'app-articles', name: 'Articles' },
  { path: 'travel-lists', component: 'app-travel-lists', name: 'Travel Lists' },
  { path: 'discover', component: 'app-discover', name: 'Discover' },
  { path: 'dashboard', component: 'app-dashboard', name: 'Dashboard' },
  { path: '', component: 'app-dashboard', name: 'Dashboard' }
];
