import  { mount } from '@vue/test-utils'
import World from '@/components/World.vue'

describe('World', () => {
    it('will greet people', function () {
        const msg = 'new message'
        const wrapper = mount(World, { props: { msg }})
        expect(wrapper).toMatchSnapshot()
    })
})
