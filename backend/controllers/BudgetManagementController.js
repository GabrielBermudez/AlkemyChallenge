const BudgetManagement = require('../models/BudgetManagement');

exports.all = (req,res,next) =>{
    BudgetManagement.FindAll()
        .then((result) =>{
            return res.status(200).send({result})
        })
        .catch(() =>{
            return res.status(500).send('Error Internal Server');
        });
}

exports.create = (req,res,next) =>{
    BudgetManagement.Create(req.body)
        .then(() =>{
            return res.status(200).send({
                error: false,
                message: 'Budget Management created successfully'
            })
        })
        .catch((error) =>{
            console.log(error);
            return res.status(500).send('Error Internal Server');
        });
}

exports.update = (req,res,next) =>{
    BudgetManagement.Update(Number(req.params.id), req.body)
        .then(() =>{
            return res.status(200).send({
                error: false,
                message: 'Budget Management updated successfully'
            })
        })
        .catch((error) =>{
            console.log(error);
            return res.status(500).send('Error Internal Server');
        });
}

exports.delete = async (req,res,next) =>{
    BudgetManagement.Delete(Number(req.params.id))
        .then(() =>{
            return res.status(200).send({
                error: false,
                message: 'Budget Management deleted successfully'
            })
        })
        .catch(() =>{
            return res.status(500).send('Error Internal Server');
        });
}

exports.lastRegister = (req,res,next) =>{
    BudgetManagement.LastRegister(Number(req.params.quantity))
        .then((result) =>{
            return res.status(200).send({result})
        })
        .catch((error) =>{
            console.log(error);

            return res.status(500).send('Error Internal Server');
        });
}


exports.totalBalance = (req, res, next) => {
    BudgetManagement.TotalBalance()
        .then((result) =>{
            return res.status(200).send({result})
        })
        .catch((error) =>{
            console.log(error);

            return res.status(500).send('Error Internal Server');
        });
}

exports.findRegisterByID = (req, res, next) => {
    BudgetManagement.FindRegisterByID(Number(req.params.id))
        .then((result) =>{
            return res.status(200).send({result})
        })
        .catch((error) =>{
            console.log(error);

            return res.status(500).send('Error Internal Server');
        });
}