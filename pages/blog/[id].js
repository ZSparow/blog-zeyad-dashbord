import { PureHeader } from "../../components/main";
import { Input, Button, Card,Popover } from "antd";
//import ReactQuill from "react-quill";
import { useState } from "react";
// import {login} from '../api';



const Create = () => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");



  var ReactQuill;
  if (typeof window !== "undefined") {
    ReactQuill = require("react-quill");
  }

  return (
    <div className="create-page">
      <PureHeader />

      <main className="container">
        <div className="search-box flex-container" style={{marginTop: 30}}>


        <Popover placement="bottomRight"  content={<img src={image}/>} trigger="click">


          <Input
            style={{ width: 300 }}
            placeholder="https://example/image.png"
            value={image}
            onChange={(e)=> setImage(e.target.value)}
          />
      </Popover>


          <Button type="primary" disabled={image && description && title && text ? false : true}
          >Save</Button>
        </div>
        <Input.TextArea
          rows={4}
          style={{ marginTop: 20 }}
          placeholder="Short Description . . ."
          value={description}
            onChange={(e)=> setDescription(e.target.value)}
        />

        <Card
          style={{ marginTop: 20 }}
          title={
            <Input
              className="input-title  "
              placeholder="Write Blog title . . ."
              value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
          }
        >
          {ReactQuill && (
            <ReactQuill
            style={{minHeight: 100}}
              theme="bubble"
              value={text}
              onChange={(value) => setText(value)}
              placeholder="Write your text"
            />
          )}
        </Card>
      </main>
    </div>
  );
};

export default Create;