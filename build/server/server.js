"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
/* eslint-disable linebreak-style */
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json());
server.use(router_1.router);
server.use((req, res) => {
    return res.status(404).send('error');
});
