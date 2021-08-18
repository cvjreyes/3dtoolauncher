import './main.css';

//Página de home con el menú para ir a las aplicaciones de isotracker

const Main = () =>{

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
    
    return(
        <div>
        
        <div className="panel__container">
            <div className="panel__heading__container">
                
                    <h4 className="panel__heading__text">PROJECTS LIST</h4>
                
            </div>
            <div className="elements__container">
                <div className="menu">
                    <div className="panel__content__container">
                        <div className="panel__content__button">
                            <button className="project__button" onClick={() => openProject("BIXLOZONE")}>BIXLOZONE</button>    
                        </div>
                    </div>   
                    <div className="panel__content__container">
                        <div className="panel__content__button">
                            <button className="project__button" onClick={() => openProject("COCAPI")}>COCAPI</button>    
                        </div>
                    </div>  
                   
                </div>
            </div>   
        </div>
    </div>
    );
};

export default Main;