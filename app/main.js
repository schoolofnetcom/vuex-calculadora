import Vue from 'vue';
import AppComponent from './app.component';

new Vue({
    el: "#app",
    data: {
        message: 'Hello World!!'
    },
    components: {
        'app-component': AppComponent
    }
});
