import { Row, Col, Card } from "antd";

export const PureCard = ({ card }) => {

  return (
    <Col lg={8} sm={12} xs={24}>
      <Card hoverable>
        <img src={card} width="100%" />
        <h1 style={{ margin: 0, marginTop: 5 }}>{card}</h1>
        <small>by FikraCamp</small>
        <div className="flex-container">
          <a>made in</a>
          <small>2019/10/10</small>
        </div>
      </Card>
    </Col>
  );
};
