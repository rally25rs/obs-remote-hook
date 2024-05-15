import OBSWebSocket from 'obs-websocket-js'

export class ObsHook {
  readonly _obs: OBSWebSocket
  constructor () {
    console.log('ObsHook')
  }

  public async connect (): Promise<void> {
    this._obs.connect()
  }

  public doThing () {
    console.log('doThing')
  }
}
