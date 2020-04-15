import { RootState } from 'src/redux/reducers'

export const getLockWithPinEnabled = (state: RootState) => {
  return state.app.lockWithPinEnabled
}

export const getAppState = (state: RootState) => {
  return state.app.appState
}

export const getAppLocked = (state: RootState) => {
  return state.app.locked
}

export const getLastTimeBackgrounded = (state: RootState) => {
  return state.app.lastTimeBackgrounded
}

export const getPrivateDemoEnabled = (state: RootState) => state.app.privateDemoEnabled

export const getPrivateDemoInitialPhoneNumber = (state: RootState) => state.app.initialPhoneNumber
