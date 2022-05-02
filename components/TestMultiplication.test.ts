import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TestMultiplication from './TestMultiplication.vue'

describe('Test component', () => {
  const wrapper = mount(TestMultiplication, {
    propsData: {
      count: 4,
    },
  })

  it('should works', () => {
    expect(1 + 1).toEqual(2)
    expect(wrapper.vm.countMultiplication).toBe(16)
  })
})
