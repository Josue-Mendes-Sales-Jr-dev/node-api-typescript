/* eslint-disable linebreak-style */

// eslint-disable-next-line quotes
import { Router } from "express";
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/',(req,res)=>{
  return res.status(StatusCodes.UNAUTHORIZED).send('olá mundo');
});
router.post('/post',(req,res)=>{
  console.log(req.body);
  return res.send(req.body);
});


export {router};