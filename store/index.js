import { observable, action, computed } from 'mobx'

class obs {
  @observable content = ''
  @computed get list() {
    return [1, 2, 3].map(x => this.content + x)
  }

  @action.bound
  setContent(v) {
    if (typeof v === 'string')
      this.content = v
    else
      this.content = String(v)
  }
}


export default new obs()