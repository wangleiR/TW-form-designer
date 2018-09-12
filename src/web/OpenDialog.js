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
    }


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
                        <FormGroup>
                            <Radio name="radioGroup" id='inputText'>
                                Text Input
                            </Radio>
                            <Radio name="radioGroup" id='datePicker'>
                                Date Picker
                            </Radio>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button bsStyle="primary" onClick={onAddItem}>Add</Button>
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

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onAddItem : (items,id) => {
            dispatch({type:'ADD_ITEM',isOpenDialog: false, items : 'input', id : 4})
            // dispatch({type:'ADD_ITEM',isOpenDialog: false, items : items, id : id})
        },
        onCloseDialog : () => {
            dispatch({type:'CLOSE_DIALOG',isOpenDialog: false})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenDialog);
