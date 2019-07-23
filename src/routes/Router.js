import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from '../components/transition/Page';
import Homepage from '../pages/homepage/Homepage';
import '../components/transition/fade.css';

export default function Router() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500} key={location.key}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Page>
                    <Homepage />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
