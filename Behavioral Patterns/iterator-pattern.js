const Iterator = function (items) {
    this.items = items
    this.index = 0
}

const itemsList = [1, "pradeep", false, 1.30];
Iterator.prototype = {
    hasNext: function () {
        return this.index < this.items.length;
    },
    next : function () {
        return this.items.at(this.index++)
    }
}

const itr = new Iterator(itemsList);
while (itr.hasNext())
console.log(itr.next())