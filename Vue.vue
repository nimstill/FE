// mixins

var mixin = {
    created: function () {
        console.log("mixin");
    },
    methods: {
        foo: function() {
            console.log('foo');
        },
        conflicting: function() {
            console.log('from mixin');
        }
    }
}


Vue.directive('focus', {
    bind: function() {

    },
    inserted: function (el) {

    },
    update: 

    compinentUpdated: 

    unbind: 


})

<span>Message: {{ result }}</span>


<form v-on:submit.prevent='onSubmit'></form>

<p v-bind:attrOrProp
    .prop = ''
    .camel = ''
    .sync
></p>

Vue.component('my-component', Vue.extend({ }))

Vue.component('my-component', { })

var myComponent = Vue.component = Vue.component('my-component')

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1"'>{{ counter }}</button>',
    date: function () {
        return {
            a: '',
            b: ''
        }
    }
})


父子组件之间的通信
props down , events up 


// 函数化组件

Vue.component('my-component',  {
    functional: true,
    render: function ( createElement, context) {},
    props: {}
})

<script>
    var vm = new Vue({
        el: "#example",
        date: {
            currentView: "home"
        },
        components: {
            home: {},
            posts: {},
            archive: {}
        }
    })
</script>

<component v-bind:is="currentView">
</component>


const store = new Vuex.Store({
    state: {
        conut: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

store.commit("increment")

console.log(store.state.count)



