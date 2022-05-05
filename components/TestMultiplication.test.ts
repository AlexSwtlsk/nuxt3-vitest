import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TestMultiplication from './TestMultiplication.vue'

describe('Test component', () => {
  expect(TestMultiplication).toBeTruthy()

  const wrapper = mount(TestMultiplication, {
    props: {
      count: 4,
    },
  })

  it('should works', () => {
    expect(1 + 1).toEqual(2)
    expect(wrapper.vm.countMultiplication).toBe(16)
  })
})
