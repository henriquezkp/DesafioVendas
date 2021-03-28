import * as database from '../../src/database/index';

module.exports = () => {
    return Promise.all(
        Object.keys(database.default.connection.models)
        .map((key) => {
            return database.default.connection.models[key]
            .destroy({
                truncate: true,
                force: true,
            })
        })

    )

}