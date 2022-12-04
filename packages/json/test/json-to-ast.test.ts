// @ts-ignore
const parse = require('json-to-ast')
describe('json-to-ast', () => {
  it('Common Usage', () => {
    const settings = {
      // Appends location information. Default is <true>
      loc: true,
      // Appends source information to node’s location. Default is <null>
      source: 'data.json'
    }
    // @ts-ignore
    const ast = parse('{"a": 1}', settings)
    expect(ast).toMatchSnapshot()
  })
})
