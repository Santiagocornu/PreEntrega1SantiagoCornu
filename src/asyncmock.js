const Products =[
    {id:1, nombre:"limon", precio:500 , img:"https://i.pinimg.com/564x/7d/b0/34/7db0343cde106c06c93075b60c9b1f02.jpg",idCat:"1",stock:"10"},
    {id:2, nombre:"lima", precio:500 , img:"https://i.pinimg.com/564x/7d/b0/34/7db0343cde106c06c93075b60c9b1f02.jpg",idCat:"1",stock:"10"},

    {id:3, nombre:"remera verde", precio:1500 , img:"https://i.pinimg.com/564x/b5/69/8f/b5698fb797a76f7faed33220097be775.jpg",idCat:"2",stock:"10"},
    {id:4, nombre:"remera amarilla", precio:1500 , img:"https://i.pinimg.com/564x/b5/69/8f/b5698fb797a76f7faed33220097be775.jpg",idCat:"2",stock:"10"},
    {id:5, nombre:"remera lima", precio:1500 , img:"https://i.pinimg.com/564x/b5/69/8f/b5698fb797a76f7faed33220097be775.jpg",idCat:"2",stock:"10"},
    {id:6, nombre:"remera graciosa", precio:1500 , img:"https://i.pinimg.com/564x/b5/69/8f/b5698fb797a76f7faed33220097be775.jpg",idCat:"2",stock:"10"},
  
    {id:7, nombre:"campera amarilla", precio:3500 , img:"https://i.pinimg.com/564x/56/67/03/566703149f09c08ad8213c34903628b3.jpg",idCat:"3",stock:"10"},
    {id:8, nombre:"campera graciosa", precio:3500 , img:"https://i.pinimg.com/564x/56/67/03/566703149f09c08ad8213c34903628b3.jpg",idCat:"3",stock:"10"},
    {id:9, nombre:"campera lima", precio:3500 , img:"https://i.pinimg.com/564x/56/67/03/566703149f09c08ad8213c34903628b3.jpg",idCat:"3",stock:"10"},
    {id:10, nombre:"campera verde", precio:3500 , img:"https://i.pinimg.com/564x/56/67/03/566703149f09c08ad8213c34903628b3.jpg",idCat:"3",stock:"10"},

    {id:11, nombre:"pantalon verde", precio:2500 , img:"https://i.pinimg.com/564x/fc/d4/96/fcd49646f71b7f57c85675bdc010b8f2.jpg",idCat:"4",stock:"10"},
    {id:12, nombre:"pantalon amarilla", precio:2500 , img:"https://i.pinimg.com/564x/fc/d4/96/fcd49646f71b7f57c85675bdc010b8f2.jpg",idCat:"4",stock:"10"},
    {id:13, nombre:"pantalon lima", precio:2500 , img:"https://i.pinimg.com/564x/fc/d4/96/fcd49646f71b7f57c85675bdc010b8f2.jpg",idCat:"4",stock:"10"},
    {id:14, nombre:"pantalon gracioso", precio:2500 , img:"https://i.pinimg.com/564x/fc/d4/96/fcd49646f71b7f57c85675bdc010b8f2.jpg",idCat:"4",stock:"10"},


    
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve(Products); 
        }, 2000);

    })
}

export const getCategoria= (idCate) =>{
return new Promise(resolve=>{
    setTimeout(()=>{
        const categoria=Products.filter(item => item.idCat === idCate);
        resolve(categoria);
    },500)
})
}