import React,{useState,useEffect} from "react";
import "./comment.scss";
import {client} from "../../Service/sanity"
const Comment = () => {
    const [loading,setLoading]= useState(false);
  const [form, setForm] = useState({
    name:"",
    comment: "",
  });
  const HandleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const HandleSubmit=(e)=>{
    setLoading(true);
    e.preventDefault();
    if(!form.name || !form.comment){
        alert("Please fill all the fields!")
    }
    client.create({
        _type:"person",
        name:form.name,
        comment:form.comment,
    }).then((res)=>{
        console.log(res);
    }).finally(()=>{
        setLoading(false);
        setForm({
            name:"",
            comment:"",
        })
    })
  }
  return (
    <form action="">
        <label htmlFor="name">Name</label>
        <input
        onChange={HandleChange}
          name="name"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
        />
        <label htmlFor="comment">Comment</label>
        <input
        onChange={HandleChange}
          placeholder="Enter your comment"
          name="comment"
          id="comment"
          type="text"
          value={form.comment}
        ></input>
        <button disabled={loading} onClick={HandleSubmit}>
            {loading ? "Loading..." : "Send"}
        </button>
    </form>
  );
};

export default Comment;
