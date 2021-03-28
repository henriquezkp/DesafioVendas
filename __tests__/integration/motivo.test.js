import request from 'supertest';
import app from '../../src/app';
import Motivo from '../../src/app/models/Motivo';
import truncate from '../utils/truncate';


describe('Testes em Motivo', () => {
   
 
    beforeAll( async () => {
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

    it('deveria retornar um erro 400 ao tentar criar um motivo sem nome', async () => {

            expect.assertions(1);
    
            const result = await request(app)
            .post('/motivos')
            .send({
               
            });
    
            expect(result.status).toBe(400);
            
    
         
        
             
        });
    

    it('Deveria retornar todos os motivos cadastrados', async () => {

        expect.assertions(2);

        const result = await request(app)
        .get('/motivos');

        expect(result.status).toBe(200);
        expect(result.body.length).toBeGreaterThan(0);
    });

  
})