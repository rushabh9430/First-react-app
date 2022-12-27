import React from "react";
import { useState ,useEffect} from "react";

// 📝Note : jyare tamre page reload thai and changes karvo hoi tyare useEffect no use thai chhe Bassicly te sadi rite pan SetName no use kari ne pan tahi to tene Function onclick ma farjiyat levu pade like last ma batavel chhe

// [] => Empty dependency
// birth of component => Mounting

// ⚛️ 1.Mounting Dom reload thai ne Action run thai

// export default function App() {
//     const [name, setName] = useState("adam")
//     useEffect(() => {
//         setName("Pravin")
//     }, [])
//   return (
//     <div>
//          name is {name}
//     </div>
//   )
// }


// ⚛️2.Updating
// export default function App() {
//   const [name, setName] = useState("Rushabh");
//     useEffect(() => {
//     }, [name])
//   return (
//     <div>
//         name is {name}
//       <button onClick={()=>setName("Krunal")}>Update</button>
//     </div>
//   );
// }

// ⚛️ 3.unMounting => screen remove 
// export default function App() {

//   useEffect(() => {
  
//     return () => {
//         alert("You want to exit this tab !")
//     }
//   }, [])
//   return (
//     <div>
      
//     </div>
//   )
// }


// Avi rite na thai etle apde tene oclick par levu pade button par function muki click kari ne change thai did you Understood bro rushabh!
export default function App() {
const [name, setName] = useState("adam")

 setName("Pravin")
  return (
    <div>
         name is {name}
    </div>
  )
}