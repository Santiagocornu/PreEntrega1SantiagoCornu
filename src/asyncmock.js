const Products =[
    {id:1, nombre:"limon", precio:500 , img:"https://i.pinimg.com/564x/7d/b0/34/7db0343cde106c06c93075b60c9b1f02.jpg"},
    {id:2, nombre:"remera", precio:1500 , img:"https://i.pinimg.com/564x/b5/69/8f/b5698fb797a76f7faed33220097be775.jpg"},
    {id:3, nombre:"campera", precio:2500 , img:"https://i.pinimg.com/564x/56/67/03/566703149f09c08ad8213c34903628b3.jpg"},
    {id:4, nombre:"pantalon", precio:3500 , img:"https://i.pinimg.com/564x/fc/d4/96/fcd49646f71b7f57c85675bdc010b8f2.jpg"}
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve(Products); 
        }, 2000);

    })
}