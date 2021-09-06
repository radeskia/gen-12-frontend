//import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import RouteHeader from "../widgets/routeheader";
import Dashboard from "../ui/Dashboard";

const Home = (props) => {
  return (
    <div>
      <RouteHeader title="Fresh & New" />
      <Dashboard route="latest"/>
      <RouteHeader title="Most Popular Recipes" />
      <Dashboard route="popular"/>
      
    </div>
  );
};

export default Home;
