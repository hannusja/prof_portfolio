import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import {Container} from "../components/Grid"

class Projects extends Component {

    render() {
        return (
            <Jumbotron>
              <Container>
                <ul className="list-group" style={{backgroundColor:"#f2e6d9"}}>Here are some cool things I've done:
                    <li className="list-group-item"> Unprofessional interactive portfolio. (If you like things a bit less dry.) <a href="https://desolate-springs-92528.herokuapp.com/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/interactive_portfolio" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: React, MongoDB with Mongoose, API. </li>
                    <li className="list-group-item"> GifTastic. <a href="https://yanjasho.github.io/GifTastic/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/GifTastic" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Javascript, jQuery, API.  </li>
                    <li className="list-group-item">TriviaGame. <a href="https://yanjasho.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a> <a href="https://github.com/yanjasho/TriviaGame" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Javascript, jQuery, timers. </li>
                    <li className="list-group-item"> RPS-Multiplayer. <a href="https://yanjasho.github.io/RPS-Multiplayer/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/RPS-Multiplayer" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Javascript, jQuery, Firebase. </li>
                    <li className="list-group-item">Liri Bot. <a href="https://github.com/yanjasho/liri-node-app" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Node.js, npm packages, APIs. </li>
                    <li className="list-group-item">Constructor Word Guess <a href="https://drive.google.com/file/d/1PRMyovISIki_46axkG3kDv-Af_yPJto7/view?usp=sharing" target="_blank" rel="noopener noreferrer"> &rArr; View a sample </a>  <a href="https://github.com/yanjasho/constructor_word_guess" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Node.js, npm packages (particularly Inquirer), constructors.</li>
                    <li className="list-group-item"> Node and Mysql ordering app <a href="https://drive.google.com/file/d/1uTWKoa-DOtjPSt980-wSvH4Ttkn13adb/view?usp=sharing" target="_blank" rel="noopener noreferrer"> &rArr; View a sample </a> <a href="https://github.com/yanjasho/bamazon" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Node.js, npm packages (particularly MySQL and Inquirer), inputs validations. </li>
                    <li className="list-group-item"> FriendFinder. <a href="https://powerful-peak-57155.herokuapp.com/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/FriendFinder" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Node and Express Servers, Heroku deployment.</li>
                    <li className="list-group-item"> Sequelized Burger. <a href="https://boiling-crag-13283.herokuapp.com/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/sequelizedBurger" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: MySQL, Sequelize, Node, Express, Handlebars; use MVC design pattern; Heroku deployment with databases.</li>
                    <li className="list-group-item"> Sweet Good News <a href="https://aqueous-atoll-90789.herokuapp.com/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/sweet_good_news" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: MongoDB and Mongoose, scrape with Cheerio, Node, Express, Handlebars; Heroku deployment with databases.</li>
                    <li className="list-group-item"> Clicky Game <a href="https://yanjasho.github.io/ClickyGame/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/ClickyGame" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: basic intro to React.</li>
                    <li className="list-group-item"> Book Search App <a href="https://tranquil-retreat-66021.herokuapp.com/" target="_blank" rel="noopener noreferrer"> &rArr; View the thing</a>  <a href="https://github.com/yanjasho/booksearch" target="_blank" rel="noopener noreferrer"> &rArr; See the code</a> Tech: Single Page React Application with react-router-dom for routing. Also some Node, Express and MongoDB.</li>
                </ul>
                <br />
                <ul className="list-group" style={{backgroundColor:"#f2e6d9"}}>And participated:
                    <li className="list-group-item"> How broke are you? <a href="https://bourneid7.github.io/project-1/" target="_blank" rel="noopener noreferrer">&rArr; View the thing</a> <a href="https://github.com/BourneID7/project-1" target="_blank" rel="noopener noreferrer">&rArr; See the code</a> <br /> My part of the tech: API, jQuery, modals, input validations. <br /> Cheers to my teammates Marie, Habib, & Nenye! </li>
                    <li className="list-group-item"> Teach.Me <a href="https://calm-ocean-83660.herokuapp.com/" target="_blank" rel="noopener noreferrer">&rArr; View the thing</a> <a href="https://github.com/cclivick/project-revolution" target="_blank" rel="noopener noreferrer">&rArr; See the code</a> <br /> My part of the tech: MySQL, Sequelize, Handlebars, jQuery. <br /> Cheers to my teammates Ben, Christian, & Dan! </li>
                    <li className="list-group-item"> Bites <a href="https://pacific-lowlands-22120.herokuapp.com/" target="_blank" rel="noopener noreferrer">&rArr; View the thing</a> <a href="https://github.com/dzwirlein/bites_app" target="_blank" rel="noopener noreferrer">&rArr; See the code</a> <br /> My part of the tech: MongoDB and Mongoose, backend React, API. <br /> Cheers to my teammates Ben, Dan & Rene! </li>
                </ul>
                </Container>
            </Jumbotron>
        );
    }
}

export default Projects;