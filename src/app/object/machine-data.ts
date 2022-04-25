import { MachineState } from "../model/machine-state.model";
import { Machine } from "../model/machine.model";

export const machineData: Machine[] = [
    {
        name: 'Scale',
        icon: 'system_update_alt',
        state: MachineState.RUNNING
    },
    {
        name: 'Attacher',
        icon: 'system_update_alt',
        state: MachineState.ALARM
    },
    {
        name: 'Packer',
        icon: 'system_update_alt',
        state: MachineState.RUNNING
    },
    {
        name: 'Closer',
        icon: 'system_update_alt',
        state: MachineState.WARNING
    }
]