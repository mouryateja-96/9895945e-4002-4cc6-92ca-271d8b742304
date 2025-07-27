import request from 'supertest';
import express from 'express';
import savingsRoutes from '../../src/routes/savings';

const app = express();
app.use('/api/savings', savingsRoutes);

describe('GET /api/savings', () => {
  it('should return 200 and filtered savings', async () => {
    const res = await request(app).get('/api/savings?deviceId=1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('device');
    expect(res.body).toHaveProperty('data');
  });
});
