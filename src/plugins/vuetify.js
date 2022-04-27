import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'font-awesome/css/font-awesome.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    //自定义的icon
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
        values: {
        },
    },
});
