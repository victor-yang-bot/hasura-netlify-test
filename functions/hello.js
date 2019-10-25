exports.handler = async event => {
  const request = JSON.parse(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify(request.event.data)
  }
}
