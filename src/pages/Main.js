import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";


function Main() {
  
  return(
    <Jumbotron>
      <Container>
        <strong> About me: </strong>
        <p> I am Back-End Developer with Full Stack Web Development Certificate from University of Wisconsin Extended Campus Coding Boot Camp and extensive healthcare background. I am interested in creating efficient and effective logical code solutions. </p>
        <strong>Skills: </strong>
          <li>Basic Web: HTML, CSS, Bootstrap.</li>
          <li>Javascript and associated: jQuery, Node, Express, React.</li>
          <li>Databases: MongoDB and Mongoose, MySQL and Sequelize, Firebase.</li>
          <br />
        <strong>Contact:</strong>
          <p> Write me here: <a href="mailto:hannahuseva@gmail.com">&rArr;  hannahuseva@gmail.com &lArr;</a> </p> 
          <p> If you would like to know a little more about me you can do so here on LinkedIn: <a href="https://www.linkedin.com/in/hannahuseva/" target="_blank" rel="noopener noreferrer"> &rArr; Hanna Huseva &lArr;</a> </p> 
          <p> And on a GitHub: <a href="https://github.com/yanjasho" target="_blank" rel="noopener noreferrer">&rArr; yanjasho &lArr;</a> </p>
      </Container>
    </Jumbotron>
  )
}


export default Main;