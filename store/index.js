import { observable, action, computed } from 'mobx'
import { Actions } from 'react-native-router-flux'
import ExtraDimensions from 'react-native-extra-dimensions-android'

class obs {
  @observable user = {
    name: null,
    info: {
      nick: null,
      email: null,
      gender: null,
      birthday: null,
      biography: null,
      contact: []
    }
  }
  @observable windowSize = [0, 0]
  @observable editMode = false
  @observable sceneMark = 'index'
  @computed get list() {
    return [1, 2, 3].map(x => this.content + x)
  }

  @action.bound
  setUser(usr) {
    this.user = usr
    this.navigate('index')
  }
  @action.bound
  navigate(scene, params) {
    if (this.sceneMark === scene) return
    this.sceneMark = scene
    this.editMode = false
    Actions[scene](params || { type: 'replace' })
  }
  @action.bound
  toggleButton() {
    if (this.sceneMark === 'profile')
      this.editMode = !this.editMode
  }
  @action.bound
  updateWindowSize(w, h) {
    if (w instanceof Array) {
      this.windowSize = w
    } else if (typeof w === 'number' && typeof h === 'number') {
      this.windowSize = [w, h]
    }
  }
}


export default new obs()