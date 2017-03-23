import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {pages} from './config';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage';
import SurveyPage from './containers/SurveyPage';
import AdminPage from './containers/AdminPage';
import AdminListPage from './containers/AdminListPage';
import AdminCreatePage from './containers/AdminCreatePage';
import AdminWelcomePage from './containers/AdminWelcomePage';

export default (
  <Route component={ App } path={ pages.rootSlug }>
    <IndexRoute component={ SurveyPage }/>

    <Route component={ AdminPage } path={ pages.admin.root.slug }>
      <IndexRoute component={ AdminWelcomePage }/>
      <Route component={ AdminListPage } path={ pages.admin.list.slug }/>
      <Route component={ AdminCreatePage } path={ pages.admin.create.slug }/>
    </Route>

    <Route component={ NotFoundPage } path="*"/>
  </Route>
);
