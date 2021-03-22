import VueHolder from 'vue-holderjs';

const Holder = {}
Holder.install = function (Vue) {
    Vue.use(VueHolder);
}
export default Holder