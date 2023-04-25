import * as actions from  './action-types'


export const bugAdded = description => {
  return {
    type: actions.BUGADDED,
    payload: {
      description: description,
    }
  }
}

export const bugRemoved = id => {
  return {
    type: actions.BUGREMOVED,
    payload: {
      id
    }
  }
}

export const bugResolved = id => {
  return {
    type: actions.BUGRESOLVED,
    payload: {
      id
    }
  }
}
