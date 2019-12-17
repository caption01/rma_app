import { LOGIN_STAFF } from './staff.type';

export const loginStaff = (staff) => ({
    type: LOGIN_STAFF,
    payload: staff
})

// export const fetchStaff = (dataLogin) =>({ 
//     type: FETCH_STAFF,
//     payload: fetchfunc(dataLogin)
// })



// const fetchfunc =  async (dataLogin) => {
//     try{
//         const result = await 
//         fetch('http://localhost:3000/staff', {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 method: 'POST',
//                 body: JSON.stringify(dataLogin)
//             })

//         const resultFromStaffTable = await result.json()

//         if(resultFromStaffTable.length){
//             console.log('success loggin')
//             return resultFromStaffTable[0]
//         } else {
//             return alert('user not found')
//         }
//     }
//     catch(err){
//         console.log(`cant login ${err}`)
//     }
// }  