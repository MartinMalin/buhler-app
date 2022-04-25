import { Component } from '@angular/core';
import { Machine } from './model/machine.model';
import { machineData } from './object/machine-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public title = 'buhler-app';
    public machines: Machine[] = machineData;
}
