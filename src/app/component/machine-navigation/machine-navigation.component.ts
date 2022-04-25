import { Component, Input } from '@angular/core';
import { Machine } from 'src/app/model/machine.model';

@Component({
    selector: 'app-machine-navigation',
    templateUrl: './machine-navigation.component.html',
    styleUrls: ['./machine-navigation.component.scss']
})
export class MachineNavigation {

    @Input()
    public machines?: Machine[];

}
