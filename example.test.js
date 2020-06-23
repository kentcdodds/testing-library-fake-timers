const {waitFor} = require('@testing-library/dom')

beforeEach(() => jest.useFakeTimers())
afterEach(() => jest.useRealTimers())

test('example', async () => {
  const doAsyncThing = () =>
    new Promise((r) => setTimeout(() => r('data'), 300))
  let result
  doAsyncThing().then((r) => (result = r))

  await waitFor(() => expect(result).toBe('data'))
})
