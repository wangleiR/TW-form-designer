import React from 'react';
import ModalDialog from "react-bootstrap/es/ModalDialog";
import ModalHeader from "react-bootstrap/es/ModalHeader";
import ModalTitle from "react-bootstrap/es/ModalTitle";
import ModalBody from "react-bootstrap/es/ModalBody";
import FormGroup from "react-bootstrap/es/FormGroup";
import Radio from "react-bootstrap/es/Radio";
import ModalFooter from "react-bootstrap/es/ModalFooter";
import Button from "react-bootstrap/es/Button";
import connect from "react-redux/es/connect/connect";


class OpenDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: "input",
        }
    }

    setItemType = (event) => {
        this.setState({
           type: event.target.value,
        });
    };
    getItem = () =>{
        return {
            id: new Date().getTime(),
            type: this.state.type,
        }
    };

    render() {
        const {
            onCloseDialog,
            onAddItem,
        } = this.props;
        return (
            <div className="static-modal">
                <ModalDialog>
                    <ModalHeader>
                        <ModalTitle>Select Field Type</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup onChange={(event)=>this.setItemType(event)}>
                            <Radio name="radioGroup" value='input' >
                                Text Input
                            </Radio>
                            <Radio name="radioGroup" value='date'>
                                Date Picker
                            </Radio>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button bsStyle="primary" onClick={()=>onAddItem(this.getItem())}>Add</Button>
                        <Button onClick={onCloseDialog}>Close</Button>
                    </ModalFooter>
                </ModalDialog>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return{
        // items: state.items,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem : (item) => {
            console.log("1111"+item);
            dispatch({type:'ADD_ITEM',isOpenDialog: false, items : item.type, id : item.id})
        },
        onCloseDialog : () => {
            dispatch({type:'CLOSE_DIALOG',isOpenDialog: false})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenDialog);
