import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableViewComponent } from './src/component/table-view/table-view.component';
import { DetailViewComponent } from './src/component/detail-view/detail-view.component';

const routes: Routes = [
  { path: '', component: TableViewComponent },
  { path: 'details/:id', component: DetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
