module.exports = {
    Printrows: {
        frequency: "*/15 * * * *",
        handler: "handlers/PrintAllRows"
    },

    test: {
        frequency: "*/15 * * * *",
        handler: "handlers/test"
    }

}