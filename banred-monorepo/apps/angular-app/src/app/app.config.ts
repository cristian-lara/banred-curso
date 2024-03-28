import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAuth0({
    domain: '',
    clientId: '',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })]
};
