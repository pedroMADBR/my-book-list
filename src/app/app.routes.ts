import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { AddNoteComponent } from './features/add-note/add-note.component';

export const routes: Routes = [
  {
  path: '',
  component: ListComponent
},
{
  path: 'add-note',
  loadComponent: () => import('./features/add-note/add-note.component').then(m => m.AddNoteComponent),
}
];
