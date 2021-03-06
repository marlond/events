import constants from '+/config/constants'

const {
  EVENTS_SUCCESS, 
  EVENTS_ERROR, 
  EVENT_REMOVED,
  EVENT_SAVED, 
  EVENTS_REQUEST
} = constants

const events = (state = {}, action) : Object => {
  switch (action.type) {
    case EVENTS_REQUEST:
      return state
    case EVENTS_ERROR:
      return action.payload
    case EVENTS_SUCCESS:
      return action.payload
    case EVENT_REMOVED:
      return action.payload
    case EVENT_SAVED:
      return action.payload
    default:
      return state
  }
}

export default events