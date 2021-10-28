import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './pagina/carta/carta.component';
import { ContactenosComponent } from './pagina/contactenos/contactenos.component';
import { Covid19Component } from './pagina/covid19/covid19.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { NosotrosComponent } from './pagina/nosotros/nosotros.component';
import { PideyaComponent } from './pagina/pideya/pideya.component';
import { ReservaComponent } from './pagina/reserva/reserva.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'carta',component:CartaComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'reserva',component:ReservaComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'pideya',component:PideyaComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'covid19',component:Covid19Component},
  {path:'',redirectTo:'/inicio', pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
