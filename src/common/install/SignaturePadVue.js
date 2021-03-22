import VueSignaturePad from 'vue-signature-pad';

const SignaturePad = {}
SignaturePad.install = function (Vue) {
  Vue.use(VueSignaturePad);
}

export default SignaturePad