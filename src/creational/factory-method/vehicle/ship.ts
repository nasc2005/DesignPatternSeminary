import { Vehicle } from './vehicle';

export class Ship implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está entregando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} entregou pedido`);
  }
}
