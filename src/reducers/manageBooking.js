const initialState = {
  booking: []
}

const manageBooking = (state = initialState, action) => {
  switch (action.type) {
    case 'MANAGE_BOOKING':
      return {
        booking: action.payload
      }
    default:
      return state
  }
}

export default manageBooking