import { useState  } from "react";

const Modal =({mode, setShowModal, task})=> {
  
  const editMode=mode==="edit" ? true : false;

  const [data, setData]=useState({
    user_email:editMode ? task.user_email : "test@t.com",
    title:editMode ? task.title : "",
    progress:editMode ? task.progress : 50,
    date:editMode ? task.date : new Date()
  });

  const postData = async (e) =>{
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/todos',{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  

  const handleChange=(e)=>{
      
      const {name, value}=e.target

      setData(data=>({
        ...data,
        [name]:value
      }))
      console.log(data)
  }

    return (
      <div className="overlay">
        <div className="modal">
          <div className="form-title-container">
            <h3>Let's {mode} you task</h3>
            <button onClick={()=>setShowModal(false)}>x</button>
          </div>
          <form>
            <input
              required
              maxLength={30}
              placeholder=" Your task goes here"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="range">Drag to select your current progress</label>
            <input
              required  
              type="range"
              id="range"
              min="0"
              max="100"
              value={data.progress}
              onChange={handleChange}
            />
            <input className={mode} type="submit" onClick={editMode ? '':postData}/>
          </form>
        </div>
      </div>
    );
  }
  
  export default Modal;