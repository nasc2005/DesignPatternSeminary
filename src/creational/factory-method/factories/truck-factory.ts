import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';
import { Truck } from '../vehicle/truck';

export class TruckFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Truck(vehicleName);
  }
}
