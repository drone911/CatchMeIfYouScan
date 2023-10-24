const supertest = require('supertest');
const app = require('./server');

describe("Server GET: /test", () => {
    it('TEST 200', async () => {
        const res = await supertest(app).get("/test");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Test route works!");
    })
})