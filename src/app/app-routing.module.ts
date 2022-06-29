import {NgModule}                from '@angular/core';
import {RouterModule, Routes}    from '@angular/router';
import {AComponent}              from "./components/a/a.component";
import {BComponent}              from "./components/b/b.component";
import {DefaultContentComponent} from "./components/default-content/default-content.component";

const routes: Routes = [
  {path: '', component: DefaultContentComponent},
  {path: 'textA', component: AComponent},
  {path: 'textB', component: BComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
