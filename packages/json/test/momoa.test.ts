// @ts-ignore
const { parse } = require('@humanwhocodes/momoa')

describe('momoa', () => {
  it('Common Usage', () => {
    const ast = parse('{"a": 1}', { tokens: true })

    expect(ast).toMatchSnapshot()
  })
})
