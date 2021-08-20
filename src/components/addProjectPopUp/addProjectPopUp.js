import "./addProjectPopUp.css"
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Alert from "../alert/alert"


export default class AddProjectPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            name: null,
            server: null,
            folder: null,
            blankError: null
        }
    }
    async openModal() {  
        this.setState({
            visible : true,
        });
    }

    async closeModal() {
        await this.setState({
            visible : false,
        });
    }

    addProject(){
        if(this.state.name !== null && this.state.server !== null && this.state.folder !== null){
            this.props.addProject(this.state.name, this.state.server, this.state.folder)
            this.closeModal();
        }else{
            this.setState({blankError: true})
        }
        
    }

    render() {
        return (
            <section style={{float:"left"}}>
                <button value="Force claim" className="action__btn"  onClick={() => this.openModal()}>Add project</button>               
                <div>
                    <Modal visible={this.state.visible} width="300" height="250" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div
                    className={`alert alert-success ${this.state.blankError ? 'alert-shown' : 'alert-hidden'}`}
                    onTransitionEnd={() => this.setState({blankError: false})}
                    >
                        <Alert type="warning" text="Complete all the fields" margin="-60px"/>                            
                    </div>
                        <div className="popUp__container" >
                            <center className="popUp__title"><h1>Add project</h1></center>          
                        </div>
                        <div className="params__container">
                            <div className="popUp__element">
                                <input type="text" placeholder="Project name" id="name" className="popUp__input__text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} ></input>
                            </div>
                            <div className="popUp__element">
                                <input type="text" placeholder="Server" id="server" className="popUp__input__text" value={this.state.server} onChange={(e) => this.setState({server: e.target.value})} ></input>
                            </div>
                            <div className="popUp__element">
                                <input type="text" placeholder="Folder" id="folder" className="popUp__input__text" value={this.state.folder} onChange={(e) => this.setState({folder: e.target.value})} ></input>                            
                            </div>
                            <div className="popUp__element__buttons">
                                <button class="save__button" style={{fontSize:"15px"}} onClick={()=>this.addProject()}>Save</button>   
                                <button class="cancel__button" style={{fontSize:"15px"}} onClick={()=>this.closeModal()}>Cancel</button>  
                            </div>
                                
                        </div>
                    </Modal>
                </div>
            </section>
            
        );
    }
}