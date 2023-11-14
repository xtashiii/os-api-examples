import { userInfo, platform, machine } from 'os';

export class Machine {
  constructor(){}
  showDetails() {
    return {
      userInfo,
      platform,
      machine
    }
  }
}
