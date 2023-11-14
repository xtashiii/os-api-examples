import { type } from 'os'
export class OperatingSystem {
  constructor() {}
  
  showOs() {
    switch(type) {
      case 'Darwin':
        return 'MacOS 🍎' 
      case 'Linux':
        return 'Linux 🐧'
      case 'Windows_NT':
        return 'Windows 🪟' 
    }
  }
}
