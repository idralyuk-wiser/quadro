const bluebird = require('bluebird')

describe('Hello', function() {
  it('works with async', async function() {
    expect(2).to.equal(2)
  })

  it('works with promises', async function() {
    await bluebird.delay(300)
  })

  it('works with generators', function*() {
    yield bluebird.delay(300)
    expect(2).to.equal(2)
  })
})
