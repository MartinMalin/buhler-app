import { Component, Input } from '@angular/core';
import { Machine } from 'src/app/model/machine.model';

@Component({
    selector: 'app-machine-overview',
    templateUrl: './machine-overview.component.html',
    styleUrls: ['./machine-overview.component.scss']
})
export class MachineOverview {

    @Input()
    public machines?: Machine[];

}
