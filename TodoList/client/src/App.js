import {useState} from "react"
function App() {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([])
  const [editId, setEditId]=useState(0);
  
  const handleClick=(e)=>{

      if(editId){
        const editTodo=todos.find((data)=>data.id===editId)
        const updataTodo=todos.map((i)=>i.id===editTodo.id ?(
          i={id:i.id,todo}
        ):{id:i.id, todo:i.todo})
        setTodos(updataTodo);
        setEditId(0);
        setTodo("");
        return;
      }
      if(todo!==""){
        setTodos([{id:Date.now(),todo},...todos])
        setTodo("")
      }
      console.log(todos)
  }
 const handleDelete=(ids)=>{
      const deletedTodo=todos.filter((data)=>data.id!==ids)
      setTodos([...deletedTodo])
 }

 const handleEdit=(id)=>{
  const editTodo=todos.find((data)=>data.id===id);
  setTodo(editTodo.todo);
  setEditId(id)
 }
  return (
    <>
    <div style={{textAlign:"center",justifyContent:"center",margin:"10px"}}>
    <div><h1>Todo App</h1></div>
    <div style={{margin:"10px"}}><input style={{width:"250px",textAlign:"center",position:"relative",left:"41%"}} class="form-control" type="text" placeholder="EnterTask" aria-label="task" value={todo} onChange={(e)=>setTodo(e.target.value)}/></div>
    <div style={{margin:"10px"}}><button type="button" className="btn btn-secondary" onClick={()=>handleClick()}>{editId ? "Edit Task" : "Add Task"}</button></div>
    </div>
    <ol>
      {
        todos.map((data)=>{
          return(
            <>
              <li style={{justifyContent:"center",margin:"10px",width:"30%",position:"relative",left:"34%",height:"40px",borderRadius:"10px"}}>
                <span style={{margin:"10px"}}>{data.todo}</span>
                <span style={{margin:"10px"}}><button type="button" className="btn btn-secondary" onClick={()=>handleEdit(data.id)}>Edit</button></span>
                <span style={{margin:"10px"}}><button type="button" className="btn btn-secondary" onClick={()=>handleDelete(data.id)}>Delete</button></span>
              </li>
              
            </>
          )
        })
      }
    </ol>
    </>
  );
}

export default App;
