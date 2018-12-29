const { GraphQLList } = require('graphql');
const axios = require('axios');
const Fighter = require('../types/Fighter');

const UFC_API_URL = 'http://ufc-data-api.ufc.com/api/v1/us/';

// Define the structure for the Query field
const Fighters = {
  // Field is called fighters
  fighters: {
    // Its going to be an Array of Fighters ( Array = GraphQLList here )
    type: new GraphQLList(Fighter),
    // Every Query Field needs a resolver to process the query
    // We're just hitting the UFC API and manipulating the results a bit
    async resolve() {
      // Get all the fighters, the UFC API doesnt seem to support pagination
      const { data } = await axios.get(`${UFC_API_URL}fighters`);

      // I didn't technically need to do this, but I wanted to clean up some of the fighter keys
      // and have the data make more sense for the client
      // I'm sorting the results as well based on wins DESC. UFC seems to sort results randomly
      return data.map((fighter) => {
        const fightClass = fighter.weight_class ? fighter.weight_class.replace(/_/, ' ') : 'N/A';

        return {
          id: fighter.id,
          name: `${fighter.first_name} ${fighter.last_name}`,
          class: fightClass,
          wins: fighter.wins,
          losses: fighter.draws,
          draws: fighter.losses,
          active: fighter.fighter_status === 'Active',
          avatar: fighter.thumbnail
        }
      }).sort((a, b) => {
        if (a.wins < b.wins) return 1;
        if (a.wins > b.wins) return -1;
        return 0;
      });
    }
  }
};

module.exports = Fighters;
