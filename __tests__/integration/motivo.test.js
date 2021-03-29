import request from 'supertest';
import app from '../../src/app';
import Motivo from '../../src/app/models/motivo';
import truncate from '../utils/truncate';


describe('Testes em Motivo', () => {


    beforeAll(async () => {
        await truncate();

    })
    it('deveria criar um novo motivo', async () => {

        expect.assertions(2);

        const result = await request(app)
            .post('/motivos')
            .send({
                nome: 'Produto com defeito'
            });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');



    });

    it('Deveria retornar todos os motivos cadastrados', async () => {

        expect.assertions(2);

        const result = await request(app)
            .get('/motivos');

        expect(result.status).toBe(200);
        expect(result.body.length).toBeGreaterThan(0);
    });


})