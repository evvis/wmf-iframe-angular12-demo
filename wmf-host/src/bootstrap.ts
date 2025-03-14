import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadLazyLibs } from 'src/mf-lazy-libs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // After successfully launching the application, we start loading the libraries.
    loadLazyLibs()
      .then(() => {
        console.log('Lazy libraries loaded');
      })
      .catch((err) => {
        console.warn('Failed to load lazy libraries', err);
      });
  })
  .catch((err) => console.error(err));
