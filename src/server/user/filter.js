// Only the info that we want to send to the client
export const filterPrefs = user => {
  // console.log('filterPrefs', user._id)
  return {
    // _id: user._id,
    // firstName: user.firstName,
    // lastName: user.lastName,
    username: user.username,
    email: user.email,
  }
}
