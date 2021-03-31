import request from 'supertest';
import app from '../../src/app';
import Produto from '../../src/app/models/produto';
import Categoria from '../../src/app/models/categoria';
import truncate from '../utils/truncate';

let resId = " ";

describe('Testes em Produto', () => {


    beforeAll(async () => {
        await truncate();
        const resCategoria = await request(app).post('/categorias')
        .send({
            nome: 'Telefones'
        });

        let { id } = resCategoria.body;

        resId = id

        


    })
    it('deveria criar um novo produto', async () => {

        expect.assertions(2);

        const result = await request(app)
            .post('/produtos')
            .send({
                id_categoria: resId,
                nome: 'CAFETEIRA',
                preco: 18.00
            });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');

    });

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

    it('Deveria retornar apenas um produto cadastrado' , async () => {
      
        expect.assertions(1);

        const produto = await Produto.findOne({
            where: { nome: 'CAFETEIRA' }
        })
  
     
  
          const result = await request(app)
          .get(`/produtos/${produto.dataValues.id}`)
  
          
  
          expect(result.status).toBe(200);
      
  
      });

      it('Deveria alterar um produto', async () => {

        expect.assertions(1);

        const produto = await Produto.findOne({
            where: { nome: 'CAFETEIRA' }
        })

        const result = await request(app)
            .put(`/produtos/${produto.dataValues.id}`)
            .send({
                id_categoria:resId,
                nome: 'BOLA',
                preco: 20
                
            });

        expect(result.status).toBe(200);
    });

    it('Deveria deletar um produto', async () => {

        expect.assertions(1);

        const produto = await Produto.findOne({
            where: { nome: 'BOLA' }
        })

        const result = await request(app)
            .delete(`/produtos/${produto.dataValues.id}`)
        

        expect(result.status).toBe(200);
    });
});