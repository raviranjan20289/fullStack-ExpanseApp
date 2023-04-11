
const User = require("../models/task");

const getTask = async(req, res)=>{
    try{
        res.status(200).render('userTask');

    }catch(error) {
        console.log(error);
    }
};

const postAddTask = async(req, res)=> {
    try{
      
    let info= {
        Item : req.body.item,
        Price: req.body.price
    }
  
    const data = await User.create(info);

    res.status(200).send(data);


    }catch(error){
        console.log(error);
    }
};

const getAllExpanse = async(req, res) =>{
    try{

      let users =   await User.findAll({});
      res.status(200).send(users);
        
    }catch(error){
        console.log(error);
    }
};

const getSingleExpanse = async(req, res)=>{
    try{
   let id = req.params.id;

   const data = await User.findOne({where: {id : id}});
   res.status(200).send(data);
    }catch(error){
        console.log(error);
    }
}


const deleteExpanse = async(req, res)=>{
    try{

   let id = req.params.id;

    await User.destroy({where: {id : id}});
    res.status(200).send('Expanse deleted successfully');
    }catch(error){
        console.log(error);
    }
};

const updateExpanse = async(req, res)=>{
    try{

        let id = req.params.id;

        let product = await User.update(req.body ,{where: {id: id}});
        res.status(200).send(product);
    }catch(error){
        console.log(error);
    }
}

module.exports= {getTask, postAddTask, getAllExpanse, deleteExpanse,updateExpanse, getSingleExpanse};