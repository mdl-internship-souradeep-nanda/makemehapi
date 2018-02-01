const supertest = require('supertest');

const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise8');

it('res code', (done) => {
  supertest(server.listener)
    .get('/chickens/whatever')
    .then((response) => {
      expect(response.statusCode).to.equal(200);
      done();
    })
    .catch(console.log);
});
