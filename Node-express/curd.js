const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());



const emp_details = [
    {id: 1, name:'John', role:'Developer'},
    {id: 2, name:'Max', role:'Tester'},
    {id: 3, name:'Jack', role:'Q/A engineer'},
    {id: 4, name:'Lilly', role:'Marketing'},
]

app.get('/', (req, res) => {
    res.send('Hello world');
})

//Get all emp_details

app.get('/api/emp-details', (req, res) =>{
    res.send(emp_details);
})

// Get single emp- details

app.get('/api/emp-details/:id', (req, res) =>{
   const result = emp_details.find(data => data.id === parseInt(req.params.id));
    if(!result) res.status(404).send('Emp-id not found')
    res.send(result)
})

// POST / create new emp-details
// using node package * Joi * to validate the input data 

app.post('/api/emp-details', (req, res) =>{
    const schema = {
        name : Joi.string().min(3).required(),
        role : Joi.string().required()
    }
    const result = Joi.validate(req.body, schema)
    if (result.error){
        res.status(400).send(result.error.details[0].message )
        return;
    }

    const inputData = {
        id : emp_details.length + 1,
        name : req.body.name,
        role : req.body.role
    }
    emp_details.push(inputData)
    res.send(inputData)
})

// PUT request for update data 

app.put('/api/emp-details/:id', (req, res) =>{
    
    // check emp-id is available or not 

    const result = emp_details.find(data => data.id === parseInt(req.params.id));
    if(!result) res.status(404).send('Emp-id not found')
    
    // if id is available 
    // validate the updated input data

    const schema = {
        name : Joi.string().min(3).required(),
        role : Joi.string().required()
    }
    const newData = Joi.validate(req.body, schema)
    if (newData.error){
        res.status(400).send(newData.error.details[0].message )
        return;
    }

    result.name = req.body.name
    result.role = req.body.role
    res.send(result)
})

// DELETE request to delete data

app.delete('/api/emp-details/:id', (req, res) =>{
    
    // check emp-id is available or not 

    const result = emp_details.find(data => data.id === parseInt(req.params.id));
    if(!result) res.status(404).send('Emp-id not found')
    
    // if it available 
    const data = emp_details.indexOf(result)
    emp_details.splice(data)
    res.send(result)

})


// environment variable
// process is a global object 
// process have env property
// then we add name of the variable 
// const port = process.env.PORT ||5000;

const port = 5000
app.listen(port, () =>{
    console.log(`Server listening on port ${port}...`)
})