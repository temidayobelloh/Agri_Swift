const db = require('../models');
const errorHandler = require('../middlewares/error');

// Controller for listing all produce
const listProduce = async (req, res, next) => {
  //res.send('welcome to product routes');
  try {
    const produce = await db.models.Produce.findAll();
    res.status(200).json(produce);
  } catch (error) {
    next(error);
  }
};

// Controller for creating new produce
const createProduce = async (req, res, next) => {
  //res.send('createProduce')
  try {
    //  // Check if user is a farmer
    //  const user = await db.models.Users.findOne({ where: { userId: req.users.userId } });

    //  if (!user) {
    //   return res.status(403).json({ success: false, message: 'Unauthorized access' });
    // }
    
    const { produce_name, imgUrl, stock, price, description , UserUserId, CategoryId } = req.body;
    
    const newProduce = await db.models.Produce.create({
      produce_name,
      imgUrl,
      stock,
      price,
      description,
  
    });

    await newProduce.setUser(UserUserId);
    await newProduce.setCategory(CategoryId);
    
    console.log('New Produce:', newProduce.toJSON());
    res.status(201).json(newProduce);
  } catch (error) {
    next(error);
  }
};

//get one

const getByIdProduce = async (req, res, next) => {

  try {
    const produce = await db.models.Produce.findOne({ where: { id: req.params.id } });
    if (!produce) {
      return next(errorHandler(404, 'Produce not found'));
    }
    res.status(200).json(produce);
  } catch (error) {
    next(error);
  }

}

// Controller for updating produce
const updateProduce = async (req, res, next) => {
  try {
    const { produce_name, imgUrl, stock, price, description } = req.body;
    const produce = await db.models.Produce.findByPk({ where: { id: req.params.id } });
    if (!produce) {
      return next(errorHandler(404, 'Produce not found'));
    }
    await produce.update({
      produce_name : produce_name ? produce_name : produce.produce_name,
      imgUrl: imgUrl ? imgUrl : produce.imgUrl,
      stock: stock ? stock : produce.stock,
      price: price ? price : produce.price,
      description: description ? description : produce.description
    });
    res.status(200).json(produce);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting produce
const deleteProduce = async (req, res, next) => {
  try {
    const produce = await db.models.Produce.findByPk({ where: { id: req.params.id } });
    if (!produce) {
      return next(errorHandler(404, 'Produce not found'));
    }
    await produce.destroy();
    res.status(200).json({ message: 'Produce deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listProduce,
  createProduce,
  updateProduce,
  deleteProduce,
  getByIdProduce
};
