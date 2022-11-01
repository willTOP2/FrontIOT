import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { MonitoracaoComponent } from './pages/monitoracao/monitoracao.component';
import { NotificacaoComponent } from './pages/notificacao/notificacao.component';
import { SetoresComponent } from './pages/setores/setores.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    MonitoracaoComponent,
    NotificacaoComponent,
    SetoresComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
