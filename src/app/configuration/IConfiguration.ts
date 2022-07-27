import { IComponent } from "../component/IComponent";
import { IComputer } from "../computer/IComputer";


export interface IConfiguration {
    id?:number;
    picker? :string;
    description? :string;
    type? :string;
    computers?:IComputer[]
    component?:IComponent[]

}
