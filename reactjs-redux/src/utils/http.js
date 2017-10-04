var HTTP = {
    post: function(){
        return new Promise((resolve, reject) => {
            //simulate HTTP request
            setTimeout(function(){
                resolve("Success!");
            }, 250);
        });
    },
};

module.exports = HTTP;





