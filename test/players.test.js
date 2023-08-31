const request = require('supertest');
const app = require('../src/app'); 
const knex = require("../src/db/connection");

describe('Players API', () => {
    let player;

    // Test the POST endpoint
    describe('POST /players', () => {
        it('creates a new player', async () => {
            const res = await request(app)
                .post('/players')
                .send({ data: { first_name: 'Michael', last_name: 'Jordan', team: 'Chicago Bulls' } });

            expect(res.statusCode).toEqual(201);
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data.first_name).toEqual('Michael');
            expect(res.body.data.last_name).toEqual('Jordan');
            expect(res.body.data.team).toEqual('Chicago Bulls');
            
            // store the response for later use in GET test
            player = res.body.data;
        });
    });

    // Test the GET endpoint
    describe('GET /players/:playerId', () => {
        it('returns an existing player', async () => {
            const res = await request(app)
                .get(`/players/${player.id}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data.first_name).toEqual('Michael');
            expect(res.body.data.last_name).toEqual('Jordan');
            expect(res.body.data.team).toEqual('Chicago Bulls');
        });
    });

    afterAll(() => {
        return knex.destroy();
    });

});