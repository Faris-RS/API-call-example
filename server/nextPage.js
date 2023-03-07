import express from "express";
import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    console.log('slash');
    res.json({ status: true })
});

router.get('/test', (req, res) => {
    console.log('slash test');
    res.send('go away')
})

export default router;