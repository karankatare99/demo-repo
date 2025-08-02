// const express = require("express");
// const app = express();

// const users = [{
//     name : "John",
//     kidneys : [{
//         healthy : false
//     }]
// }]

// app.use(express.json());

// app.get("/", (req, res) => {
//     const JohnKidneys = users[0].kidneys.length;
//     let HealthyKidneys = 0
//     for (let i = 0; i<JohnKidneys; i++) {
//         if (users[0].kidneys[i].healthy) {
//             HealthyKidneys += 1
//         }
//     }
//     const UnhealthyKidneys = JohnKidneys - HealthyKidneys
//     res.json({
//         JohnKidneys,
//         HealthyKidneys,
//         UnhealthyKidneys
//     })
// })

// app.post("/", (req, res) => {
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy : isHealthy
//     })
//     res.json({
//         msg : "Done"
//     })
// })

// app.put("/", (req, res) => {
//     const JohnKidneys = users[0].kidneys.length;
//     if (minUnhealthyKidney()) {
//         for (let i = 0; i<JohnKidneys; i++) {
//         users[0].kidneys[i].healthy = true
//     }
//     } else {
//         res.status(411).json({
//             msg : "All your kidneys are already healthy"
//         });
//     }
// })

// app.delete("/", (req, res) => {
//     const JohnKidneys = users[0].kidneys.length;
//     const NewKidneys = [];
//     if (minUnhealthyKidney()) {
//         for (let i = 0; i<JohnKidneys; i++) {
//             if (users[0].kidneys[i].healthy) {
//                 NewKidneys.push({
//                     healthy : true
//                 })
//             }
//         }
//     } else {
//         res.status(411).json({
//             msg : "You have no unhealthy kidneys"
//         });
//     }
    
//     users[0].kidneys = NewKidneys
//     res.json({})
// })

// function minUnhealthyKidney() {
//     UnhealthyKidneyPresent = false
//     const JohnKidneys = users[0].kidneys.length;
//     for (let i = 0; i<JohnKidneys; i++) {
//         if (!users[0].kidneys[i].healthy) {
//             UnhealthyKidneyPresent = true
//         }
//     }
//     return UnhealthyKidneyPresent
// }

// app.listen(3000, () => {
//     console.log("app initialized")
// })

const arr = [1,2,3,4,5]

const ans = arr.filter((i) => {
    if (i%2 == 0 ) {
        return i
    }
})

console.log(ans)