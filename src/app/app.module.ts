import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { SidenavComponent } from './common/sidenav.component';
import { LibrosComponent }     from './components/libros.component';
import { NotFound }     from './components/notFound.component';

import { LibroService } from './components/libro.service';

@NgModule({
        declarations: [
                AppComponent,
                SidenavComponent,
                LibrosComponent,
                NotFound
        ],
        imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                MaterialModule.forRoot(),
                AppRoutingModule,
        ],
        providers: [ LibroService ],
        bootstrap: [AppComponent]
})
export class AppModule { }
