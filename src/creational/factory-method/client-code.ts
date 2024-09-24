import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { CarFactory } from './factories/car-factory';
import { BicycleFactory } from './factories/bicycle-factory';
import { ShipFactory } from './factories/ship-factory';
import { TruckFactory } from './factories/truck-factory';

const deliveryName = ['Caixa de Som', 'Pizza','Container','Geladeira']; // nome das entregas.


const carFactory = new CarFactory(); //Instancia Factory
const car = carFactory.getVehicle("fusca Preto"); // instancia um Vihicle do tipo Car  
car.pickUp(deliveryName[0]) // chama metodo da classe carro criada pela factory
car.stop(); // chama metodo da classe carro criada pela factory

const bicycleFactory = new BicycleFactory();
const bicycle = bicycleFactory.getVehicle("BMX");
bicycle.pickUp(deliveryName[1])
bicycle.stop();

const shipFactory = new ShipFactory();
const ship = shipFactory.getVehicle("Titanic");
ship.pickUp(deliveryName[2])
ship.stop();

const truckFactory = new TruckFactory();
const truck = truckFactory.getVehicle("SCANIA");
truck.pickUp(deliveryName[3])
truck.stop();








// for (let i = 0; i < 2; i++) {
//   const vehicle = randomCarAlgorithm();
//   const name = customerNames[randomNumbers(customerNames.length)];
//   vehicle.pickUp(name);
//   vehicle.stop();
//   const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
//   newCar.stop();
//   console.log('---');
// }
