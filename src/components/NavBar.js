import React from 'react';
import styles from '../cssModules/NavBar.module.css';
import { Link } from 'react-router-dom';
import {Form, FormControl } from 'react-bootstrap';
class NavBar extends React.Component {
  render() {
    return (
      /*<Container>
        <Row>
          <Col sm={3}><Link to="/" style={{ textDecoration: 'none' }}><span className={ styles.brand }>CULPA</span></Link></Col>
          <Col sm={6}><Form className="form-center">
            <FormControl type="text" placeholder="Search courses, departments, professors" className="" />
          </Form></Col>
          <Col sm={3}><Link to="/about" style={{ textDecoration: 'none' }}><span className={ styles.navbtn }>Write A Review</span></Link></Col>
        </Row>
      </Container>*/
      <div className={ styles.spacer }>
        <div className={ styles.navbar }>
          <Link to="/" style={{ textDecoration: 'none' }}><span className={ styles.brand }>CULPA</span></Link>
          <Form className="form-center">
            <FormControl type="text" placeholder="Search courses, departments, professors" className="" />
          </Form>
          <Link to="/review" style={{ textDecoration: 'none' }}><span className={ styles.navbtn }>Write A Review</span></Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
/*<Form className="form-center">
<FormControl type="text" placeholder="Search" className="" />
</Form>*/

