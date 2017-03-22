import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {pages} from './config';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage';
import SurveyPage from './containers/SurveyPage';
import AdminPage from './containers/AdminPage';

export default (
  <Route component={ App } path={pages.rootSlug}>
    <IndexRoute component={ SurveyPage }/>

    <Route component={ AdminPage } path={ pages.admin.slug }/>

    <Route component={ NotFoundPage } path="*"/>
  </Route>
);
