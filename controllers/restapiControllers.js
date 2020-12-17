import restapi from '../models/restapi.js';

// GET --> /react/restapi/
export const getAllrestapi = async(_,res) => {
    const allrestapi = await restapi.find();

    res.json({ allrestapi });
};

// POST --> /react/restapi/
export const createrestapi = async (req, res) => {
    const newrestapi = await restapi.create(req.body);

    res.status(201).json({ newrestapi })
};

// GET --> /react/restapi/:id/
export const getrestapiByID = async (req,res) => {
    const requiredrestapi = await restapi.findById(req.params.id);

    if(!requiredrestapi)
        res.status(404).json({ error: 'No restapi found'});
    else
        res.json({ requiredrestapi });
};

// DELETE -> /react/restapi/:id/
export const deleterestapiByID = async (req,res) => {
    const deletedrestapi = await restapi.findByIdAndDelete(req.params.id);

    if(!deletedrestapi)
        res.status(404).json({ error: 'No restapi found'});
    else
        res.json({ deletedrestapiID: deletedrestapi.id });
};

//PATCH -> /react/restapi/:id/
export const updaterestapiByID = async (req,res) => {
    const requiredrestapi = await restapi.findById(req.params.id);

    if(!requiredrestapi)
        res.status(404).json({ error: 'No restapi found'});
    else{
        requiredrestapi.isCompleted = !requiredrestapi.isCompleted;
        requiredrestapi.save();
        res.json({ requiredrestapi });
    }
};