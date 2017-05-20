export class CounterService {
  activeToInactiveUsersCounter = 0;
  inactiveToActiveUsersCounter = 0;

  incrementActiveToInactive(name: string) {
    this.activeToInactiveUsersCounter++;
    console.log('Active to inactive: ' + this.activeToInactiveUsersCounter + ' ' + name);
  }

  incrementInactiveToActive(name: string) {
    this.inactiveToActiveUsersCounter++;
    console.log('Inactive to active: ' + this.inactiveToActiveUsersCounter + ' ' + name);
  }
}
