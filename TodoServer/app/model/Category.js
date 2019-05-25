/**
 * Category Entity (ES6 Class)
 */

class Category {
    constructor(name, created, modified,todo) {
        this.name = name;
        this.created = created;
        this.modified = modified;
        this.todo = todo;
    }
}

module.exports = Category;