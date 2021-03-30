import request from 'supertest';
import app from '../../src/app';
import Estoque from '../../src/app/models/estoque';
import truncate from '../utils/truncate';



describe('Estoque', () => {
   
 
    beforeAll( async () => {
        await truncate();

    })
    it('deveria criar um novo estoque', async () => {

        expect.assertions(2);

        const result = await request(app)
        .post('/estoques')
        .send({
            nome: 'estoque'
        });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');

     
    
         
    });

    it('deveria retornar um erro 400 ao tentar criar um estoque sem nome', async () => {

        expect.assertions(1);

        const result = await request(app)
        .post('/estoques')
        .send({
           
        });

        expect(result.status).toBe(400);
        

     
    
         
    });

    it('Deveria retornar todos os estoques cadastrados', async () => {

        expect.assertions(2);

        const result = await request(app)
        .get('/estoques');

        expect(result.status).toBe(200);
        expect(result.body.length).toBeGreaterThan(0);
    });

    it('Deveria retornar apenas um estoque cadastrado' , async () => {
      


      const estoque = await Estoque.findOne({
          where: { nome: 'estoque' }
      })

    

        const result = await request(app)
        .get(`/estoques/${estoque.id}`)

        

        expect(result.status).toBe(200);
    

    });

    it('Should update a Estoque', async () => {

        const estoque = await Estoque.findOne({
            where: { nome: 'estoque' }
        })

        const result = await request(app)
            .put(`/estoques/${estoque.id}`)
            .send({
                nome: 'Central',
                
            });

        expect(result.status).toBe(200);
    });

  

    
})
