// import React, { useState } from "react";
// import NavBar from './NavBar';
// import About from './About';
// import Project from "./Project";
// import Contact from './Contact';
// import Resume from './Resume';
// import '../styles/page.css'

// function Page (){
//   const [currentPage, setCurrentPage] = useState('About');

//   const renderPage = () => {
//       if (currentPage==="About"){
//           return <About/>;
//       } else if (currentPage==="Project"){
//           return <Project/>;
//       } else if (currentPage==="Contact"){
//           return <Contact/>;
//       } else if (currentPage==="Resume"){
//           return <Resume/>;
//       }
//       };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//       <div>
//           <div className="navContainer">    
//             <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
//           </div> 
//           <div className="mainPage">{renderPage()}</div>
//       </div>
//   );
// }


// export default Page;