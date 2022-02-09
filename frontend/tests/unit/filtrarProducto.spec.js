// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

import { shallowMount } from '@vue/test-utils'
import Places from "../../src/components/Home/Places.vue"
import placesData from './places'

describe('Pruebas a funcionalidad filtrar producto', () => {
    it('Filtrar por nombre', () => {
        const wrapper = shallowMount(Places, {
            props: {
                places: placesData,
                findByCity : 'med'
            }
        });
        expect(wrapper.vm.filtrarProducto[0].city.toLowerCase().includes('med')).toBeTruthy()
    })
})