const roles={
    admin: {
        can:['create','edit','delete','view'],
    },
    editor:{
        can:['create','edit','view'],
    },
    viewer:{
        can:['view'],
    },
};
module.exports= roles;
// users - table
// id, name , email, password, role.
// 1, Ram, email, password, admin
// 2                        editor
// 3                        viever 


// controller -> 'https://dummyjson.com/products' -> viever

// fetch('https://dummyjson.com/posts/add', { // admin and editor
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'I am in love with someone.',
//     userId: 5,
//     /* other post data */
//   })
// })
// .then(res => res.json())
// .then(console.log);


// route -> login, signup, product, postdata

// login -> JWT -> admin -> product, postdata signup
// login -> jwt -> viever -> product
// login -> jwt -> editor -> product, postdata