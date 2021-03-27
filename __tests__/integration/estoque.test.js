import request from 'supertest';
import app from '../../src/app';

describe('Estoque', () => {
    it('deveria criar um novo estoque', async () => {
        const result = await request(app)
        .post('/estoques')
        .send({
            nome: 'Estoque 1'
        });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');
    });
})