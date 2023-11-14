import { networkInterfaces } from 'os';

export class Network {
  networks = networkInterfaces();

  constructor() {}

  networkDetails() {    
    for (let [key, value] of Object.entries(this.networks)) {
      if (key !== 'Wi-Fi') {
        const { address, netmask, family, mac } = value[1]
        return {
          IP: `${address}`,
          Netmask: `${netmask}`,
          Family: `${family}`,
          Mac: `${mac}`,
        }
      }
    }
  }
}
