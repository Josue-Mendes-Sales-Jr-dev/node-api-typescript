"use strict";
/* eslint-disable linebreak-style */
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// eslint-disable-next-line quotes
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send('olá mundo');
});
router.post('/post', (req, res) => {
    console.log(req.body);
    return res.send(req.body);
});
