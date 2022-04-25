import { MachineState } from "./machine-state.model";

export interface Machine {
    name: string;
    icon?: string;
    state: MachineState
}