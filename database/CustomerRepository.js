class CustomerRepository {
    constructor(connectionPool) {
        this.connectionPool = connectionPool;
    }

    save(customer, callback) {
        this.connectionPool
            .getPool()
            .query("insert into customers set ?", customer, callback);
    }

    get(id) {}

    getAll() {}

    update() {}

    delete(id) {}
}

module.exports = CustomerRepository;