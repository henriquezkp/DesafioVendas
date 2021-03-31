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
                nome: 'DEFEITO'
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

    it('Deveria retornar apenas um motivo cadastrado' , async () => {
      
        expect.assertions(1);

        const motivo = await Motivo.findOne({
            where: { nome: 'DEFEITO' }
        })
  
      
  
          const result = await request(app)
          .get(`/motivos/${motivo.dataValues.id}`)
  
          
  
          expect(result.status).toBe(200);
      
  
      });

      it('Deveria modificar um motivo', async () => {
        expect.assertions(1);

        const motivos = await Motivo.findOne({
            where: { nome: 'DEFEITO' }
        })

        const result = await request(app)
            .put(`/motivos/${motivos.dataValues.id}`)
            .send({
                nome: 'QUALQUER',
                
            });

        expect(result.status).toBe(200);
    });

    it('Deveria deletar um motivo', async () => {
        expect.assertions(1);

        const motivos = await Motivo.findOne({
            where: { nome: 'QUALQUER' }
        })

        const result = await request(app)
            .delete(`/motivos/${motivos.dataValues.id}`)
        

        expect(result.status).toBe(200);
    });


})