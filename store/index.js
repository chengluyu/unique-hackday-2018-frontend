import { observable, action, computed } from 'mobx'
import { Actions } from 'react-native-router-flux'

class obs {
  @observable user = {
    name: 'mokunshen',
    info: {
      nick: null,
      email: null,
      gender: null,
      birthday: null,
      biography: null,
      contact: []
    }
  }
  @observable sceneMark = 'index'
  @computed get list() {
    return [1, 2, 3].map(x => this.content + x)
  }

  @action.bound
  navigate(scene, params) {
    this.sceneMark = scene
    Actions[scene](params)
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