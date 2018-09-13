import { connect } from 'react-redux';
import React from 'react';
import Button from "react-bootstrap/es/Button";
import OpenDialog from './OpenDialog';

class Preview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            previewStatus : true,
        }
    }

    changeToPreview = () => {
        this.setState({
            previewStatus : true,
        });
    };

    changeToEdit =() => {
        this.setState({
            previewStatus : false,
        });
    };

    render(){
        const {
            isOpenDialog,
            onClickOpenDialog,
            items,
            onDeleteItem,
        } = this.props;

        return(
            <div>
                {
                    this.state.previewStatus ? <div><Button onClick={this.changeToEdit}>Preview</Button><Button onClick={onClickOpenDialog}>+</Button></div> :<Button onClick={this.changeToPreview}>Edit</Button>
                }
                {
                    isOpenDialog ?  <OpenDialog /> : ""
                }
                {

                    items && items.map(it => {
                        if (it['type'] === 'input'){
                           return  this.state.previewStatus ? <div key={it.id}><input></input><Button onClick={()=>onDeleteItem(it.id)} >x</Button> </div> : <div><input></input></div>
                        }else if(it['type'] === 'date'){
                            return  this.state.previewStatus ? <div key={it.id}><label>label</label><Button onClick={()=>onDeleteItem(it.id)}>x</Button></div> : <div><label>label</label></div>
                        }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOpenDialog: state.isOpenDialog,
        items: state.items,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickOpenDialog : () => {
            dispatch({type:'OPEN_DIALOG',isOpenDialog: true})
        },
        onDeleteItem : (id)=>{
            dispatch({type:'DELETE_ITEM',id : id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
