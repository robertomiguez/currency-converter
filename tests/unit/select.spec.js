import { shallowMount } from '@vue/test-utils'
import Select from '@/components/Select.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Select, {
    propsData: {
      options: ['BTC', 'ETH', 'DASH', 'BAT']
    },
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Select', () => {
  test('testing component props', () => {
    expect(wrapper.find('.select-css').text().replace(/\s+/g, ' '))
      .toBe('BTC ETH DASH BAT')
  })

  test('regression test', () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })
})
