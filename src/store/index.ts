import { action, observable } from "mobx";

class Store {
  @observable
  count = 0;
  @action
  add = () => {
    this.count++;
  };
  @action
  minus = () => {
    this.count--;
  };
}
export default new Store();
