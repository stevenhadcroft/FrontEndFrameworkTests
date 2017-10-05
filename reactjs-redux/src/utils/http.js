var axios = require('axios')

var HTTP = {
    post: function(onComplete){
       return new Promise((resolve, reject) => {
            axios.get(process.env.REACT_APP_ENDPOINT_GET_PRODUCTS)
                .then(function(response){
                    resolve(response.data.products);
                })
                .catch(function (error) {
                    //handle error
                })

       //  axios.get(process.env.REACT_APP_ENDPOINT_GET_PRODUCTS)
       //      .then(function (response) {
       //          console.log('response.products[0] ', response.products)
       //          // onComplete(response.products[0]);
       //      })
       //      .catch(function (error) {
       //          console.log('response.products ', error)
       //          var mock = {"products":[{"title":"Title 1","url":"product1.jpg"},{"title":"Title 2","url":"product2.jpg"},{"title":"Title 3","url":"product3.jpg"},{"title":"Title 4","url":"product4.jpg"},{"title":"Title 5","url":"product5.jpg"},{"title":"Title 6","url":"product6.jpg"},{"title":"Title 1","url":"product1.jpg"},{"title":"Title 2","url":"product2.jpg"},{"title":"Title 3","url":"product3.jpg"},{"title":"Title 4","url":"product4.jpg"},{"title":"Title 5","url":"product5.jpg"},{"title":"Title 6","url":"product6.jpg"},{"title":"Title 1","url":"product1.jpg"},{"title":"Title 2","url":"product2.jpg"},{"title":"Title 3","url":"product3.jpg"},{"title":"Title 4","url":"product4.jpg"},{"title":"Title 5","url":"product5.jpg"},{"title":"Title 6","url":"product6.jpg"},{"title":"Title 1","url":"product1.jpg"},{"title":"Title 2","url":"product2.jpg"},{"title":"Title 3","url":"product3.jpg"},{"title":"Title 4","url":"product4.jpg"},{"title":"Title 5","url":"product5.jpg"},{"title":"Title 6","url":"product6.jpg"},{"title":"Title 1","url":"product1.jpg"},{"title":"Title 2","url":"product2.jpg"},{"title":"Title 3","url":"product3.jpg"},{"title":"Title 4","url":"product4.jpg"},{"title":"Title 5","url":"product5.jpg"},{"title":"Title 6","url":"product6.jpg"},{"title":"Title 1","url":"product1.jpg"},{"title":"Title 2","url":"product2.jpg"},{"title":"Title 3","url":"product3.jpg"},{"title":"Title 4","url":"product4.jpg"},{"title":"Title 5","url":"product5.jpg"},{"title":"Title 6","url":"product6.jpg"}]}
       //          // onComplete(mock.products);
       //      });
        });


    },
};

module.exports = HTTP;


