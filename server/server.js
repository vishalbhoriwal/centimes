const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/data', async (req, res) => {
  const data = await prisma.chartData.findMany();
  return res.json(data);
});

app.post('/data', async (req, res) => {
  const newData = req.body;
  const data = await prisma.chartData.create({
    data: newData,
  });
  return res.json(data);
});

app.put('/data/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;
  const data = await prisma.chartData.update({
    where: { id },
    data: newData,
  });
  return res.json(data);
});

app.delete('/data/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.chartData.delete({
    where: { id },
  });
  return res.json({ msg: `${id} deleted successfully` });
});

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig('DEV'))));

module.exports = app;
