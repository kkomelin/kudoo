const ephemeralMessage = (text) => {
  return {
    text,
    response_type: 'ephemeral',
    replace_original: true
  }
}

module.exports = {
  ephemeralMessage
}
