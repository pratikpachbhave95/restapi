import express from 'express'
import { createrestapi, deleterestapiByID, getAllrestapi, getrestapiByID, updaterestapiByID } from '../controllers/restapiControllers.js';

const router = express.Router();

 //Basic route
router.route('/').get(getAllrestapi).post(createrestapi);
router.route('/:id/').get(getrestapiByID).patch(updaterestapiByID).delete(deleterestapiByID);


export default router;