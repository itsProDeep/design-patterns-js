const Singleton = (function () {
    let instance;
    function createInstance() {
        return {
            message: "Hello I am the only insance",
            showMessage: function () {
                console.log(this.message)
            }
        }
    }
    return {
        getSingletonInstance: () => {
            if (!instance) {
                instance = new createInstance();
            }
            return instance
        }
    }
})();

const instance1 = Singleton.getSingletonInstance();
const instance2 = Singleton.getSingletonInstance();
console.log(instance1 === instance2);

//pros: memory : less resources
//      global access

//cons: too much of info available to all code
//      special treatment in multi threading
//     viotion of single res principal