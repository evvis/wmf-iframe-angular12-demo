import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const loadRemoteModule = async () => {
  try {
    await import('wmfHost/mf-angular');
  } catch (error) {
    console.warn('Remote module not available, using fallback.');
  }
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => loadRemoteModule())
  .catch((err) => console.error(err));
