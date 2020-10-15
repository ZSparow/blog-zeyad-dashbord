import { Input, Row, Col, Button } from "antd";
import Link from "next/link"
import { PlusOutlined } from "@ant-design/icons";
const { Search } = Input;
import {useRouter} from "next/router"

export const PureSearchAdd = () => {
  const router = useRouter()
  return (
    <div className="container">
      <Row
        className="flex-container"
        style={{ marginTop: 20 }}
        gutter={[0, 20]}
      >
        <Col lg={12} sm={18} xs={24}>
          <Search
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            enterButton
          />
        </Col>
        <Col sm={4} xs={24}>
          <Button type="primary" block icon={<PlusOutlined />} block onClick={()=> router.push('/blog/create')}>
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
