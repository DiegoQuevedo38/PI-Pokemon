const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
    "name": "pikachu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "speed": 90,
    "height": 4,
    "weight": 60,
    "types": "electric"
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(async () => {
    try {
      await Pokemon.sync({ force: true });
      await Pokemon.create(pokemon);
    } catch (err) {
      console.error('Error during setup:', err);
    }
  });
  describe('GET /pokemon', () => {
    it('should get 200', () =>
      agent.get('/pokemon').expect(200)
    );
  });
  describe("GET /type", () => {
    it("should get 200", () =>
    agent.get("/type").expect(200)
    )
  });
  describe("GET /pokemon/:id", () => {
    it("should return an {}", () =>
    agent.get(`/pokemon/${pokemon}`).expect({})
    )
  })
});


