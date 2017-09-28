// function loadData() {
//     var url = 'data.json';
//     axios.get(url)
//         .then(function (response) {
//             console.log('good');
//         })
//         .catch(function (error) {
//             console.log('error');
//         });
// }

// data - already exists.. acts as global store
data.myProducts = [];
data.boo = {a:1};

Vue.component('all-products', {
    data: function () {
        return {
            products:data.products,
            bucket:data.productBucket,
            myProducts:data.myProducts
        }
    },
    methods: {
        selectProduct: function (d) {
            // alert(this.data.products[0] )
            // data.myProducts
            // alert(d)
            this.data.myProducts.push(d)
        }.bind(this)
    },
    template: `<div class="product-container">
                <ul class="cell">
                    <li v-for="d in products" v-on:click="selectProduct(d)">
                        <img v-bind:src="bucket + d.url"/>
                        <div>{{ d.title }}</div>
                    </li>
                </ul>
             </div>`
});


Vue.component('add-product', {
    data: function () {
        return {
            products:data.products
        }
    },
    methods: {
        addProduct: function () {
            this.data.products.unshift(this.data.products[0]);
        }.bind(this)
    },
    template: `<button class="button add" v-on:click="addProduct()">ADD</button>`
})


Vue.component('my-products', {
    data: function () {
        return {
            products:data.myProducts,
            bucket:data.productBucket,
            boo:data.boo
        }
    },
    methods: {
        removeProduct: function () {
            this.data.boo.a = 2;
            this.data.boo.b = 3;
            // alert(this.data.products[0] )
        }.bind(this)
    },
    template: `<div class="my-product-container">
                    boo - {{boo.a}} boo - {{boo.b}}
                 <add-product></add-product>
                    <ul class="cell my-product">
                        <li v-for="d in products" v-on:click="removeProduct()">
                            <img v-bind:src="bucket + d.url"/>
                        </li>
                    </ul>
                 </div>`
})


var app = new Vue({
    el: '#app',
    data: {
        products:data.products,
        basket: [],
    }
});

