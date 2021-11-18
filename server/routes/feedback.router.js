const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT Route
router.put('/like/:id', (req, res) => {
    const queryString = `UPDATE images SET likes=${req.body.likes} WHERE id=${req.params.id};`

    pool.query(queryString).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log('error updating task in database:', err);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryString =  `SELECT * FROM images ORDER BY id`; // 'messages' is table name
    pool.query(queryString).then( ( results )=>{
        //if query is successful
        res.send( results.rows);
    }).catch( (err)=>{
        // if there was an error
        console.log(err);
        res.sendStatus( 500 );
    })
}); // END GET Route

// POST ROUTE
router.post('/', (req, res)=>{
    console.log('/ post hit:', req.body)
    const queryString = 'INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)';
    let values = [req.body[0], req.body[1], req.body[2], req.body[3]];
    
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log('error adding task to database', err);
        res.sendStatus(500);
    })  
})

// DELETE ROUTE
router.delete('/delete/:id', (req,res)=> {
    
    const queryString = `DELETE FROM images WHERE id='${req.params.id}';`;
  
    pool.query(queryString).then((results)=>{
      res.sendStatus(200);
    }).catch((err)=>{
      console.log('error deleting task from database:', err);
      res.sendStatus(500);
    })
  })

module.exports = router;