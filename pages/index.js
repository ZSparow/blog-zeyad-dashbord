import { PureHeader } from "../components/main";
import { PureSearchAdd, PureCard } from "../components/home";
import { Row } from "antd";
import {getArticles} from '../api'
import {useState, useEffect} from 'react'


const Home = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading]= useState(true)



  useEffect(()=> {
    getArticles((err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setLoading(false)
      } else {
        setData(result.articles);
        setLoading(false)
        console.log(data)
      }

     
    })  },[data]);



  return (
    <div className="home-page">
      <PureHeader />
      <PureSearchAdd />
      <div className="container" style={{ marginTop: 40 }}>
        <Row gutter={[20, 20]}>


          {data.map((el)=> <PureCard key={el.id} card={el}/>)}
         
        
          
          
          {/* <PureCard />
          <PureCard />
          <PureCard /> */}
        </Row>
      </div>
    </div>
  );
};







export default Home;
