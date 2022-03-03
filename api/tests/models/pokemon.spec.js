const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

// let Pok = new Pokemon();
// console.log(Pok)

describe('Pokemon model', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => {
            done(new Error('It requires a valid name'))
          })
          .catch(() => done());
      });

    //   // xit('should work when its a valid name', () => {
    //   //   Pokemon.create({ name: 'Pikachu' });
    //   // });
      
    // });
               
    });

     
  });

  
});


describe('Otras pruebas', ()=>{

  it('Debe mostrar una instancia de la DB', () => {
    expect(new Pokemon()).to.be.an.instanceof(Pokemon);
  });

  it('Pruebas', () => {
      Pokemon.create({
  
                      name: 'pipicachu',
                      life: 1,
                      force: 11,
                      defending: 111,
                      speed: 2,
                      height: 22,
                      weight: 3,
                      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRq3fLvVtwOHO1R5UDHN8UupxrgtSx55qFmTWiBIT2WP2B6TP7p',
      })
        .then((res) => {
          // console.log(res)
          expect(res.dataValues.name).to.not.be.undefined;
          // expect(res.dataValues.uuid).to.not.be.undefined;
          // expect(res.dataValues.createdAt).to.not.be.undefined;
        });

  });
  

})
