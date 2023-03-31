import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="writeP">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            className="editor"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visiblility: </b> Public
          </span>
          <input type="file" id="file" style={{ display: "none" }} />
          <label className="file" htmlFor="file">
            Upload Image{" "}
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="art" />
            <label htmlFor="art">science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="leetcode" id="art" />
            <label htmlFor="art">leetcode</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cloudev" id="art" />
            <label htmlFor="art">cloudDev</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
