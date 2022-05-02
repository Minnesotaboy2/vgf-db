const { Food } = require('../models');

const foodData = [
  {
    game_name: 'Legend of Zelda: Breath of the wild',
    dish_type: '',
    dish_name: '',
  },
  {
    game_name: 'Fallout Series',
    dish_type: '',
    dish_name: '',
  },
  {
    game_name: 'Shirts',
    dish_type: '',
    dish_name: '',
  },
  {
    game_name: 'Shirts',
    dish_type: '',
    dish_name: '',
  },
  {
    game_name: 'Shirts',
    dish_type: '',
    dish_name: '',
  },
  {
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
},
},
];

const Food = () => Category.bulkCreate(foodData);

module.exports = Food;