const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


exports.FindAll = () =>{
    return prisma.budget_management.findMany({
    });
}


exports.Create = (data) =>{
    let{
        concept,
        amount,
        date,
        type
    } = data;

    let current_date = new Date();
    date = new Date(date);

    return prisma.budget_management.create({
        data:{
            concept,
            amount,
            date,
            type,
            created_at: current_date,
            updated_at: current_date,
        }
    });
}

exports.Update = (id_budget_management, data) =>{
    let{
        concept,
        amount,
        date,
        type,
    } = data;
    let current_date = new Date();
    date = new Date(date);

    return prisma.budget_management.update({
        where:{
            id_budget_management,
        },
        data:{
            concept,
            amount,
            date,
            type,
            updated_at: current_date,
        }


    })

}

exports.Delete = (id_budget_management) =>{
    return prisma.budget_management.delete({
        where:{
            id_budget_management,
        }
    });
}


exports.LastRegister = (quantity) => {
    return prisma.budget_management.findMany({
        orderBy: [
            {
                id_budget_management: 'desc',
            },
        ],
        take: quantity,
    });
}

exports.TotalBalance = () => {
    return prisma.budget_management.aggregate({
        _sum: {
            amount: true,
        },
    })
}

exports.FindRegisterByID = (id_budget_management) => {
    return prisma.budget_management.findUnique({
        where:{
            id_budget_management
        },
    });
}