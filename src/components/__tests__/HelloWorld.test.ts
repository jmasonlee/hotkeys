import  { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
    it('will greet people', function () {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, { props: { msg }})
        expect(wrapper).toMatchSnapshot()
    })
})
