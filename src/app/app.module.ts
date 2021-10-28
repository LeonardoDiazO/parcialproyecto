import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Seccion1inicioComponent } from './componentes/seccion1inicio/seccion1inicio.component';
import { Seccion2cartaComponent } from './componentes/seccion2carta/seccion2carta.component';
import { Seccion3reservaComponent } from './componentes/seccion3reserva/seccion3reserva.component';
import { Seccion4nosotrosComponent } from './componentes/seccion4nosotros/seccion4nosotros.component';
import { Seccion5pideyaComponent } from './componentes/seccion5pideya/seccion5pideya.component';
import { Seccion6contactenosComponent } from './componentes/seccion6contactenos/seccion6contactenos.component';
import { Seccion7covid19Component } from './componentes/seccion7covid19/seccion7covid19.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { CartaComponent } from './pagina/carta/carta.component';
import { ReservaComponent } from './pagina/reserva/reserva.component';
import { NosotrosComponent } from './pagina/nosotros/nosotros.component';
import { PideyaComponent } from './pagina/pideya/pideya.component';
import { ContactenosComponent } from './pagina/contactenos/contactenos.component';
import { Covid19Component } from './pagina/covid19/covid19.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    Seccion1inicioComponent,
    Seccion2cartaComponent,
    Seccion3reservaComponent,
    Seccion4nosotrosComponent,
    Seccion5pideyaComponent,
    Seccion6contactenosComponent,
    Seccion7covid19Component,
    InicioComponent,
    CartaComponent,
    ReservaComponent,
    NosotrosComponent,
    PideyaComponent,
    ContactenosComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
