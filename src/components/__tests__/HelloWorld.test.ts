import  { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
    it('will greet people', function () {
        const msg = 'new message'
        const wrapper = mount(HelloWorld, { props: { msg }})
        expect(wrapper).toMatchSnapshot()
    })
})
