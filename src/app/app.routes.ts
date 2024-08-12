import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./router/dash-board/dash-board.module').then((x) => x.DashBoardModule),
  },
//   {
//     path: 'painel',
//     loadChildren: () =>
//       import('./routes/painel/painel.module').then((x) => x.PainelModule),
//   },
];
