import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './component/machine/machine.component';
import { Navbar } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { MachineNavigation } from './component/machine-navigation/machine-navigation.component';
import { MachineOverview } from './component/machine-overview/machine-overview.component';


@NgModule({
    declarations: [
        AppComponent,
        Navbar,
        MachineComponent,
        MachineNavigation,
        MachineOverview
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
