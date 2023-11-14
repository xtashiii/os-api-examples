import express from 'express';
import { OperatingSystem, Machine } from '../OS/index.js'
import { Network } from './network.js';

export class Server {
  app = express();
  network = new Network();
  os = new OperatingSystem();
  machine = new Machine();
  constructor() {
    this.app;
    this.app.use(express.json());
    this.start();
  }

  routes() {
    this.app.get('/', (_, res) => {
      const { machine, platform, userInfo } = this.machine.showDetails();

      const { username } = userInfo();
      res.json({
        OS: this.os.showOs(),
        Platform: platform(),
        Machine: machine(),
        User: username,
        Network: this.network.networkDetails(),
      });
    });
  }
  start() {
    this.routes()
    this.app.listen(3333, () => {
      console.log(`running at: http://localhost:3333`);
    });
  }
}
