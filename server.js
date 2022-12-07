#!usr/bin/env node
import { roll } from "./lib/roll.js";
import minimist from "minimist";
import express from "express";


const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    // return 200 ok
	res.status(200).send("200 OK");
});
app.get('/app/roll', (req, res) => {
    res.json(roll(6, 2, 1));
});

app.post('/app/roll/', (req, res) => {
    let sides = parseInt(req.body.sides);
    let dice = parseInt(req.body.dice);
    let rolls = parseInt(req.body.rolls);
    res.status(200).json(roll(sides,dice,rolls));
});

app.get('/app/roll/:sides/', (req, res) => {
    let sides = parseInt(req.params.sides);
    res.status(200).json(roll(sides, 2, 1));
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
  })
  
  app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
  })
  
  app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
  })
  
  app.listen(port);