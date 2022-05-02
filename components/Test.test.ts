import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Test from './Test.vue'

describe('Test component', () => {
  const wrapper = shallowMount(Test, {
    props: {
      count: 4,
    },
  })

  it('should works', () => {
    expect(1 + 1).toEqual(2)
    expect(wrapper.vm.countMultipliction).toBe(16)
  })
})
