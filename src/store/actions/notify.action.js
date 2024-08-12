export const actionTypes = {
    NOTIFY: 'CHANGE_NOTIFY'
}

export const changeNotify = (payload) => ({
  type: actionTypes.NOTIFY,
  payload
})
