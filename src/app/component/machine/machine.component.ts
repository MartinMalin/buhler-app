import { Component, Input } from '@angular/core';
import { MachineState } from 'src/app/model/machine-state.model';
import { Machine } from 'src/app/model/machine.model';

@Component({
    selector: 'app-machine',
    templateUrl: './machine.component.html',
    styleUrls: ['./machine.component.scss']
})
export class MachineComponent {

    @Input()
    public machine?: Machine;

    @Input()
    public nav = false;

    public getWarningIcon(): string {
        switch (this.machine && this.machine.state) {
            case MachineState.RUNNING:
                return 'settings_backup_restore';
            case MachineState.ALARM:
                return 'info';
            case MachineState.WARNING:
                return 'report_problem';
            default:
                return '';
        }
    }

    public getBackgroundColor(): string {
        switch (this.machine && this.machine.state) {
            case MachineState.RUNNING:
                return 'machine-running';
            case MachineState.ALARM:
                return 'machine-alarm';
            case MachineState.WARNING:
                return 'machine-warning';
            default:
                return '';
        }
    }

}
