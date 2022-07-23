import React,{useState} from 'react';

export const AddTodos = ({addTodom}) => {

    const[title,setTitle] = useState('');
    const[desc,setDesc] = useState('');

    const submit = (e)=>{
       e.preventDefault();//isse page reload nahi hoga
       if(!title || !desc){
        alert("Title or Descrition Cannot be Blank.")
       }
       else{
        addTodom(title,desc)
        setTitle("");
        setDesc("");
       }
     
    }

  return (
    <div className="container">
        <h2 className="text-center my-3 ">Add a Todo</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text" value={title}
            className="form-control" 
            id="title" onChange={(e)=> setTitle(e.target.value)}            
          />
          <div id="emailHelp" className="form-text">
          Add an item to the list.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text" value={desc}
            className="form-control" 
            id="title" onChange={(e)=> setDesc(e.target.value)}
          />
        </div>        
        <button type="submit" className="btn btn-success btn-sm ">
        Add to List
        </button>        
      </form>
    </div>
  );
};
