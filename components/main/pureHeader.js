import { Typography, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Title } = Typography;
import Link from 'next/link'
export const PureHeader = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="container">
          <div className="flex-container" style={{ height: 60 }}>
            <Title level={3}><Link href="/" style={{ color: '#fff'}}> Dashboard</Link> </Title> 
            <div className="Avatar">
              <Title level={5}>userExample123</Title>
              <Popover content={content} title="UserName">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Popover>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
