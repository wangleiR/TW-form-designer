import { connect } from 'react-redux';
import React from 'react';
import Button from "react-bootstrap/es/Button";
import OpenDialog from './OpenDialog';

class Preview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {
            previewStatus,
            isOpenDialog,
            onClickOpenDialog,
            items,
            onPreview,
            onDeleteItem,
        } = this.props;
        // console.log(" items "+items);
        return(
            <div>
                {
                    !previewStatus ? <Button onClick={onPreview}>Edit</Button> :<div><Button onClick={onPreview}>Preview</Button><Button onClick={onClickOpenDialog}>+</Button></div>
                }
                {
                    isOpenDialog ?  <OpenDialog /> : ""
                }
                {

                    items && items.map(it => {
                        if (it['type'] === 'input'){
                           return  previewStatus ? <div><input></input><Button onClick={onDeleteItem}>x</Button></div> : <div><input></input></div>
                        }else if(it['type'] === 'date'){
                            return  previewStatus ? <div><label>label</label><Button onClick={onDeleteItem}>x</Button></div> : <div><label>label</label></div>
                        }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        previewStatus : state.previewStatus,
        isOpenDialog : state.isOpenDialog,
        items: state.items,
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onPreview : () => {
            dispatch({type:'IS_PREVIEW'})
        },
        onClickOpenDialog : () => {
            dispatch({type:'OPEN_DIALOG',isOpenDialog: true})
        },
        onDeleteItem : ()=>{
            dispatch({type:'DELETE_ITEM',id : 4})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
