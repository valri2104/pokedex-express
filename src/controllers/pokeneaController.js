const pokeneas = require('../data/pokeneas');
const { imageUrl } = require('../services/gcpStorage');
const os = require('os');

function randomItem() {
    return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

function randomJson(req, res) {
    const pokenea = randomItem();
    const containerId = os.hostname();
    res.json({
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        habilidad: pokenea.habilidad,
        containerId,
  });
}

function randomView(req, res) {
  const pokenea = randomItem();
  const containerId = os.hostname();
  const image = imageUrl(pokenea.imagen);
  // Simple HTML
  res.send(`
    <html>
      <head><meta charset="utf-8"><title>Pokenea</title></head>
      <body style="font-family: Arial, sans-serif; text-align:center;">
        <h1>${pokenea.nombre}</h1>
        <img src="${image}" alt="${pokenea.nombre}" style="max-width:400px;"/>
        <p style="font-style: italic;">"${pokenea.frase}"</p>
        <p><small>container id: <b>${containerId}</b></small></p>
      </body>
    </html>
  `);
}

module.exports = { randomJson, randomView };
