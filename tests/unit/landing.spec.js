import { shallowMount } from '@vue/test-utils'
import Landing from '@/views/Landing'
import CheckRates from '@/components/CheckRates'
import Rates from '@/components/Rates'

describe('Landing', () => {
  const build = () => {
    const wrapper = shallowMount(Landing)

    return {
      wrapper,
      checkRates: () => wrapper.findComponent(CheckRates),
      rates: () => wrapper.findComponent(Rates)
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const { checkRates, rates } = build()
    expect(checkRates().exists()).toBe(true)
    expect(rates().exists()).toBe(true)
  })

  it('passes a binded user prop to user profile component', () => {
    // arrange
    const { wrapper, checkRates } = build()
    wrapper.setData({
      amount: 0
    })

    // assert
    expect(checkRates().vm.amount).toBe(wrapper.vm.amount)
  })
})
