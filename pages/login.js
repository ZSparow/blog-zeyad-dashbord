import { Card, Input, Row, Col, Button,message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import {login} from '../api';
import {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isLoading, setIsLoading] = useState(false)


  const handleLogin = ()=>{

    setIsLoading(true)
    login({email, password}, (err,result)=>{
        if(err) throw err;
        if(!result.status){
          Object.keys(result.status).forEach((key)=>{
            message.error(result.errMsg[key])
            console.log(result.errMsg[key])
          });
          setIsLoading(false)
        }else{
          localStorage.setItem("blog_token",result.token)
          setIsLoading(false)
        }
    })

  }
  return (
    <div className="login-page">
      <Card style={{ width: 400 }}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input placeholder='your email' value={email} onChange={e=> setEmail(e.target.value)}/>
          </Col>
          <Col span={24}>
            <Input.Password placeholder='you password' value={password} onChange={e=> setPassword(e.target.value)}         name="password"
/>
          </Col>
          <Button type="primary" block onClick={handleLogin} loading={isLoading}>
      Login
    </Button>
            </Row>
      </Card>
    </div>
  );
};

export default Login;
