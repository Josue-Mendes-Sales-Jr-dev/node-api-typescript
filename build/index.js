"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable linebreak-style */
const server_1 = require("./server/server");
server_1.server.listen(3000, () => {
    console.log('servidor iniciando');
});
