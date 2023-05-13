/* eslint-disable linebreak-style */
import express from 'express';
import { router } from './router';


const server= express();

interface Teste {

}

server.use(express.json());
server.use(router);
server.use((req,res)=>{
  return res.status(404).send('error');
});


export {server};

