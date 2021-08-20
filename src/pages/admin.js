import './main.css';
import React, { useState , useEffect} from 'react'
import AddProjectPopUp from '../components/addProjectPopUp/addProjectPopUp';
import Alert from "../components/alert/alert"

const Admin = () =>{
    const[projects, setProjects] = useState()
    const[updateList, setUpdateList] = useState(false)
    const[success, setSuccess] = useState(false)
    const[error, setError] = useState(false)

    function openProject(name){
        
        const body = {
            project: name
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("http://localhost:8000/execExternal", options)
        .then(response=>response.json())
        .then(json =>{
            console.log(json)
        })
    }

    function addProject(name, server, folder){
        const body = {
            name: name,
            server: server,
            folder: folder
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("http://localhost:8000/addProject", options)
        .then(response=>response.json())
        .then(json =>{
            if(json.success){
                setSuccess(true)
                setUpdateList(!updateList)
            }else{
                setError(true)
            }
        })
    }


    useEffect(async() =>{
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
        await fetch("http://localhost:8000/getProjectsNames", options)
        .then(response=>response.json())
        .then(async json =>{
            console.log(json)
            let projectsComponent = []
            for(let i = 0; i < json.length; i++){
                projectsComponent.push(<div className="panel__content__container">
                    <div className="panel__content__button">
                        <button className="project__button" onClick={() => openProject(json[i].name)}>{json[i].name}</button>    
                    </div>
                </div>)
            }
            await setProjects(projectsComponent)
        }) 
    }, [updateList])
    
    return(
        <div>
        <div
        className={`alert alert-success ${success ? 'alert-shown' : 'alert-hidden'}`}
        onTransitionEnd={() => setSuccess(false)}
        >
            <Alert type="success" text="Project created successfully!" margin="-45px"/>                            
        </div>

        <div
        className={`alert alert-success ${error ? 'alert-shown' : 'alert-hidden'}`}
        onTransitionEnd={() => setError(false)}
        >
            <Alert type="error" subtext="Project failed to create!" margin="-5px"/>                            
        </div>

        <div className="panel__container">
            <div className="panel__heading__container">
                
                    <h4 className="panel__heading__text">PROJECTS LIST</h4>
                
            </div>
            <div className="elements__container">
                <div className="menu">
                    {projects}                  
                </div>
            </div> 
            <div style={{float:"right"}}>
                <AddProjectPopUp addProject={addProject.bind(this)}/>
            </div>
              
        </div>
        
    </div>
    );
};

export default Admin;