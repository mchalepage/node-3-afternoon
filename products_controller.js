module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.create_product([name, description, price, image_url])
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: "Something has gone horribly wrong."})
                console.log(err)
            })
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product(id)
            .then( product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({errorMessage: "Something has gone horribly wrong."})
                console.log(err)
            })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
            .then( products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: "Something has gone horribly wrong."})
                console.log(err)
            })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Something has gone horribly wrong."})
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Something has gone horribly wrong."})
            console.log(err)
        })
    }
}