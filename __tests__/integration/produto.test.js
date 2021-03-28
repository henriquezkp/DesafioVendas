import request from 'supertest';
import app from '../../src/app';
import Produto from '../../src/app/models/produto';
import truncate from '../utils/truncate';

describe('Testes em Produto', () => {
   
 
    beforeAll( async () => {
        await truncate();

    })
  /*  it('deveria criar um novo produto', async () => {

        expect.assertions(2);

        const result = await request(app)
        .post('/produtos')
        .send({
            id_categoria: 1,
            nome: 'Cafeteira',
            preco: 18.00 
        });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');

    });
*/
    it('deveria retornar um erro 400 ao tentar criar uma categoria sem nome', async () => {

        expect.assertions(1);

        const result = await request(app)
        .post('/categorias')
        .send({
            id_categoria: 1,
            preco: 18.00 
           
        });

        expect(result.status).toBe(400);
        

     
    
         
    });
    
    it('Deveria retornar todos os produtos cadastrados', async () => {

        expect.assertions(1);

        const result = await request(app)
        .get('/produtos');

        expect(result.status).toBe(200);
       
    });

     
    
         
    });