const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
    const router = express.Router();

    //GET ALL
    router.get('/', (request, response) => {
        collection.find().toArray()
        .then((docs) => response.json(docs))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({status:500, error:err});
        })
    })

    //GET ONE
    router.get('/:id', (request, response) => {
        const id = request.params.id;
        collection.findOne({_id:ObjectID(id)})
        .then((doc) => response.json(doc))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({status:500, error:err}); 
        })

    })

    //DELETE
    router.delete('/:id', (request, response) => {
        const id = request.params.id;
        collection.deleteOne({_id:ObjectID(id)})
        .then((docs) => response.json(docs))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({status:500, error:err}); 
        })

    })

    //POST
    router.post('/', (request, response) => {
        const newMovie = request.body;
        collection.insertOne(newMovie)
        .then((result) => {response.json(result.ops[0])
        })
            .catch((err) => {
                console.error(err);
                response.status(500);
                response.json({status:500, error:err}); 
            
        })

    })

return router;
}

module.exports= createRouter;