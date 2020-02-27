const request = require('supertest');
const server = require('../api/server');

describe('cohorts router', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/api/cohorts')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it("should return cohorts as the router value", async function() {
            const res = await request(server).get("/api/cohorts");
            
            expect(res.body.router).toBe('cohorts');
        });
    })
})