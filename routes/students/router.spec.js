const db = require('../../database/connection');
const Students = require('./model');

describe('students\' router', () => {
    describe('test environment', function () {
        it('should use the testing environment', function () {
            expect(process.env.NODE_ENV).toBe('testing');
        })
    })

    describe('insert()', function () {
        beforeEach( async () => {
            await db('students').truncate();
        })
    })
    
    describe('POST /', () => { 
        it('should add the created student', async() => {
            await Students.add({username: "luke", password: "pass"});

            const students = await db('students');
            expect(students).toHaveLength(1);
        })
    })
});