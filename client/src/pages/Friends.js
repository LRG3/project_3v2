import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";


class Friends extends Component {

  componentDidMount() {
    console.log("mounted");
    document.getElementById("container").classList.add("no-video")}

  render() {

      return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>MovieHub! Friends</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
           <center>
           <h4> Robert Lopez, El Paso, TX, Age: 33, Male, Student, Facebook: Robert Lopez, Twitter: @alter85, Instagram: @alter85, Snapchat: Robert Lopez, Youtube: rl@gmail.com </h4>
           <h4> Luis Gonzalez, Phoenix, AZ, Age: 23, Male, Student, Facebook: Luis Gonzalez, Twitter: @gonz385, Instagram: @gonz385, Snapchat: Luis Gonzalez, Youtube: lg@gmail.com </h4>
           <h4> Adam Smith, Chicago, IL, Age: 21, Male, Student, Facebook: Adam Smith, Twitter: @alteregoz55, Instagram: @alteregoz55, Snapchat: Adam Smith, Youtube: as@gmail.com</h4>
           <h4> Les Pedregon, New York, NY, Age: 18, Male, Student, Facebook: Les Pedregon, Twitter: @peg365, Instagram: @peg365, Snapchat: Les Pedregon, Youtube: lp@gmail.com </h4>
           <h4> Lily Iglesias, Fresno, CA, Age: 45, Female, Student, Facebook: Lily Iglesias, Twitter: @lil7, Instagram: @lil7, Snapchat: Lily Iglesias, Youtube: li@gmail.com </h4>
           <h4> Mal Wright, San Diego, CA, Age: 27, Female, Student, Facebook: Mal Wright, Twitter: @mw88, Instagram: @mw88, Snapchat: Mal Wright, Youtube: mw@gmail.com </h4>
           <h4> Sam Duron, Houston, TX, Age: 28, Male, Student, Facebook: Sam Duron, Twitter: @sduron24, Instagram: @sduron24, Snapchat: Sam Duron, Youtube: sd@gmail.com</h4>
           <h4> Jarred Mason, Tucson, AZ, Age: 41, Male, Student, Facebook: Jarred Mason, Twitter: @mason043, Instagram: @mason043, Snapchat: Jarred Mason, Youtube: jm@gmail.com</h4>
           <h4> Leslie Lupe, Austin, TX, Age: 75, Female, Student, Facebook: Leslie Lupe, Twitter: @gonegirl112, Instagram: @gonegirl112, Snapchat: Leslie Lupe, Youtube: ll@gmail.com </h4>
           <h4> Mike Morales, Waco, TX, Age: 42, Male, Student, Facebook: Mike Morales, Twitter: @m_m53, Instagram: @m_m53, Snapchat: Mike Morales, Youtube: mm@gmail.com</h4>
           <h4> Jennifer Johnson, Chandler, AZ, Age: 31, Female, Student, Facebook: Jennifer Johnson, Twitter: @jjjones7845, Instagram: @jjjones7845, Snapchat: Jennifer Johnson, Youtube: jj@gmail.com </h4>
           <h4> Amanda Flex, El Paso, TX, Age: 30, Female, Student, Facebook: Amanda Flex, Twitter: @flex85, Instagram: @flex85, Snapchat:Amanda Flex, Youtube: af@gmail.com </h4>
           <h4> Monica Long, Dallas, TX, Age: 29, Female, Student, Facebook: Monica Long, Twitter: @longjohn7675, Instagram: @longjohn7675, Snapchat: Monica Long, Youtube: ml@gmail.com </h4>
           <h4> Amber Fernandez, Scottsdale, AZ, Age: 19, Female, Student, Facebook: Amber Fernandez, Twitter: @Fer6573, Instagram: @Fer6573, Snapchat: Amber Fernandez, Youtube: af@gmail.com </h4>
           <h4> Josh Powers, Long Beach, CA, Age: 26, Male, Student, Facebook: Josh Powers, Twitter: @pwers111, Instagram: @pwers111, Snapchat: Josh Powers, Youtube: jp@gmail.com </h4>
           <h4> Rudy Salazar, Wheaton, IL, Age: 34, Male, Student, Facebook: Rudy Salazar, Twitter: @sal54, Instagram: @sal54, Snapchat: Rudy Salazar, Youtube: rs@gmail.com </h4>
           <h4> Lucy Smith, San Antonio, TX, Age: 26, Female, Student, Facebook: Lucy Smith, Twitter: @lily, Instagram: @lily, Snapchat: Lucy Smith, Youtube: ls@gmail.com </h4>
           <h4> Jose Thompson, Sacramento, CA, Age: 20, Male, Student, Facebook: Jose Thompson, Twitter: @zoe92, Instagram: @zoe92, Snapchat: Jose Thompson, Youtube: jt@gmail.com </h4>
           <h4> David Pateal, El Paso, TX, Age: 21, Male, Student, Facebook: David Pateal, Twitter: @dp73, Instagram: @dp73, Snapchat: David Pateal, Youtube: dp2@gmail.com </h4>
           <h4> Tori Ruiz, San Francisco, CA, Age: 35, Female, Student, Facebook: Tori Ruiz, Twitter: @tomtom22, Instagram: @tomtom22, Snapchat: Tori Ruiz, Youtube: tr@gmail.com </h4>
           <h4> Zach Walker, Fort Worth, TX, Age: 27, Male, Student, Facebook: Zach Walker, Twitter: @walker3, Instagram: @walker3, Snapchat: Zach Walker, Youtube: zw@gmail.com </h4>
           <h4> Chris Gold, Orland Park, IL, Age: 76, Male, Student, Facebook: Chris Gold, Twitter: @Chris_Gold63, Instagram: Chris_Gold63, Snapchat: Chris Gold, Youtube: cg@gmail.com </h4>
           <h4> Juan Jones, Los Angeles, CA, Age: 18, Male, Student, Facebook: Juan Jones, Twitter: @jj33543, Instagram: @jj33543, Snapchat: Juan Jones, Youtube: jj3@gmail.com </h4></center>                        
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          <Link to="/movies">MovieHub! Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
  export default Friends;    