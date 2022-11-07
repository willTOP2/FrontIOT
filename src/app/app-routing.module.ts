import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MonitoracaoComponent } from './modules/home/pages/monitoracao/monitoracao.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { NotificacaoComponent } from './modules/home/pages/notificacao/notificacao.component';
import { SetoresComponent } from './modules/home/pages/setores/setores.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
  {path: 'home', component: MonitoracaoComponent, title:'Home'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'notificacao', component: NotificacaoComponent},
  {path: 'setores', component: SetoresComponent}, 
  {
    path: '', 
    loadChildren: () => import('./core/components/auth/auth.module') 
     .then(m => m.AuthModule)
  },
  {
    path: 'admin', 
    loadChildren: () => import('./components/admin/admin.module') 
     .then(m => m.AdminModule)
  }
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
