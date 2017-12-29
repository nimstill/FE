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




