import constants from '+/config/constants'

const {CHANGE_SUBTITLE} = constants

const subtitle = (state = {
  key: 'SHOWING_ALL',
  filter: null
}, action) : Object => {
  switch (action.type) {
    case CHANGE_SUBTITLE:
      return action.payload
    default:
      return state
  }
}

export default subtitle