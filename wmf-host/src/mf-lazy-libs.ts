export async function loadLazyLibs() {
  const results = await Promise.allSettled([
    import('@angular/animations'),
    import('@angular/common'),
    import('@angular/compiler'),
    import('@angular/core'),
    import('@angular/forms'),
    import('@angular/platform-browser'),
    import('@angular/platform-browser-dynamic'),
    import('@angular/router'),
    import('@ag-grid-community/core'),
    import('@ag-grid-community/angular'),
    import('@ag-grid-community/client-side-row-model'),
    import('@ag-grid-enterprise/all-modules'),
    import('rxjs'),
    // Добавьте другие библиотеки, которые нужно загрузить
  ]);

  results.forEach((result) => {
    if (result.status === 'rejected') {
      console.error('Failed to load library:', result.reason);
    }
  });
}
