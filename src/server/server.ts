/* eslint-disable linebreak-style */
import express from 'express';


const server= express();

interface Teste {
    
}

server.get('/',(req, res)=>{
  return res.send('olá mundo');
});

export {server};