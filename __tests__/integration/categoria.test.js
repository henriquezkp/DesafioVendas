import request from 'supertest';
import app from '../../src/app';
import Categoria from '../../src/app/models/categoria';
import truncate from '../utils/truncate';


describe('Testes em Categoria', () => {
   
 
    beforeAll( async () => {
        await truncate();

    })
    it('deveria criar uma nova categoria', async () => {

        expect.assertions(2);

        const result = await request(app)
        .post('/categorias')
        .send({
            nome: 'Telefones'
        });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');

     
    
         
    });

    it('Deveria retornar todas as categorias cadastradas', async () => {

        expect.assertions(2);

        const result = await request(app)
        .get('/categorias');

        expect(result.status).toBe(200);
        expect(result.body.length).toBeGreaterThan(0);
    });

    it('deveria retornar um erro 400 ao tentar criar uma categoria sem nome', async () => {

        expect.assertions(1);

        const result = await request(app)
        .post('/categorias')
        .send({
           
        });

        expect(result.status).toBe(400);
        

     
    
         
    });

})