import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MonitoracaoComponent } from './modules/home/pages/monitoracao/monitoracao.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { NotificacaoComponent } from './modules/home/pages/notificacao/notificacao.component';
import { SetoresComponent } from './modules/home/pages/setores/setores.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
  {path: '', component: MonitoracaoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'notificacao', component: NotificacaoComponent},
  {path: 'setores', component: SetoresComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
