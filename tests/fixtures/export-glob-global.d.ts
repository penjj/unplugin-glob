declare global {
  namespace GlobExport {
    type Exports0 = typeof import('./mod/a') & typeof import('./mod/b');
    type Exports1 = typeof import('./mod/a') & typeof import('./mod/b');
    type Exports2 = {};
  }
}

export {}