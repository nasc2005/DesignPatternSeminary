import { BicycleFactory } from '../../creational/factory-method/factories/bicycle-factory';
import { CarFactory } from '../../creational/factory-method/factories/car-factory';
import { ShipFactory } from '../../creational/factory-method/factories/ship-factory';
import { TruckFactory } from '../../creational/factory-method/factories/truck-factory';

export class BuilderFacade {

  PuxaCar(customerName: string): void {
    const carFactory = new CarFactory();
    const car = carFactory.getVehicle("fusca Preto");
    car.pickUp(customerName)
    car.stop();
  }

  PuxaBike(customerName: string):void {
    const bicycleFactory = new BicycleFactory();
    const bicycle = bicycleFactory.getVehicle("BMX");
    bicycle.pickUp(customerName)
    bicycle.stop();
  }
  PuxaShip(customerName: string):void {
    const shipFactory = new ShipFactory();
    const ship = shipFactory.getVehicle("Titanic");
    ship.pickUp(customerName)
    ship.stop();
  }

  PuxaTruck(customerName: string):void {
    const truckFactory = new TruckFactory();
    const truck = truckFactory.getVehicle("Scania");
    truck.pickUp(customerName)
    truck.stop();
  }
}
