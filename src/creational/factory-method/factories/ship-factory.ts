import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';
import { Ship } from '../vehicle/ship';

export class ShipFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Ship(vehicleName);
  }
}
