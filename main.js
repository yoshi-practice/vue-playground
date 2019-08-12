var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})

// リスト（繰り返し）
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: 'A'
            },
            {
                text: 'B'
            },
            {
                text: 'C'
            },

        ]
    }
})

// ユーザー入力制御
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello, vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// 双方向バインディング
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello, Vue.js!"
    }
})

// コンポーネント
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

// コンポーネント利用
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: 'A'
            },
            {
                id: 1,
                text: 'B'
            },
            {
                id: 2,
                text: 'C'
            }
        ]
    }
})