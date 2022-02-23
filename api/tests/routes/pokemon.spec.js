/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  beforeAll(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Pokemon.sync({ force: true })
  //   .then(() => Pokemon.create(pokemon)));
  // describe('GET /pokemons', () => {
  //   it('should get 200', () =>
  //     agent.get('/pokemons').expect(200)
  //   );
  // });
  it('Se espera como respuesta un codigo 200', () => agent.get('/pokemons/4').expect(200));
  it('Se espera como respuesta un codigo 404', () => agent.get('/poke').expect(404));

  it('Se espera como respuesta un arreglo con al menos 1 elemento', () =>
        agent.get('/pokemons/4').then((res) => {
          // console.log(!!res.body)
          // console.log(res.body.name)
          expect(res.body.name).equals('charmander');
        }));
 
    
});
