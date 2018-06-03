import { observable, action, computed } from 'mobx'
import { Actions } from 'react-native-router-flux'
import ExtraDimensions from 'react-native-extra-dimensions-android'
import { AsyncStorage } from 'react-native'

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
  @observable pageStack = []
  @observable chatWith = null
  @observable talkList = [
    {
      from: "String", // from user ID
      to: "test", // to user ID
      time: 1527983257154, // sent time
      content: "hahaha" // text content
    },
    {
      from: "test", // from user ID
      destination: "String", // to user ID
      time: 1527983258154, // sent time
      content: "hehehe" // text content
    }
  ]

  @action.bound
  appendTalkList(v) {
    if (v.from && v.destination && v.time && v.content)
      this.talkList.push(v)
  }
  @action.bound
  talkTo(id) {
    this.talkWith = id
  }
  @action.bound
  setUser(usr) {
    this.user = usr
    if (usr.name)
      this.navigate('index')
    else
      this.navigate('login')
    AsyncStorage.setItem('@Hackintosh2018:config:user', JSON.stringify(usr));
  }
  @action.bound
  navigate(scene, params) {
    if (this.sceneMark === scene) return
    params = params || { type: 'replace' }
    if (params.type === 'push')
      this.pageStack.push(this.sceneMark)
    this.sceneMark = scene
    this.editMode = false
    Actions[scene](params)
  }
  @action.bound
  pop() {
    Actions.pop()
    this.sceneMark = this.pageStack.pop()
  }
  @action.bound
  toggleButton() {
    if (this.sceneMark === 'profile')
      this.editMode = !this.editMode
    else
      this.navigate('camera', { type: 'push' })
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