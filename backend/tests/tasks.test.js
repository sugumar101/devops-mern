const request = require('supertest');
const mongoose = require('mongoose');

const { server, app } = require('../index');

describe('GET api/tasks', () => {
  it('it should return 200 ok', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
  });
  it('it should return object and tasks property', async () => {
    const res = await request(app).get('/api/tasks');
    expect(typeof res.body).toEqual('object');
    expect(res.body).toHaveProperty('tasks');
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});
