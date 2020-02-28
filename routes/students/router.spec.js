const request = require('supertest');
const server = require('../api/server');

describe('students\' router', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })
    
    describe('POST /', () => { 
        it('should return 200 OK', () => {
            return request(server)
                .get('/api/students')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('should successfully post a student', () => {
            return request(server)
                .post("/api/students")
                .send({username: "luke", password: "pass"});
        })
    })
});