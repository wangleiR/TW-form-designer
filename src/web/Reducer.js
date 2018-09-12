
const initState = {
    isOpenDialog: false,
    previewStatus: true,
    items: [{
        id:1,
        type:'date',
    }]
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return {
                ...state,
                isOpenDialog: action.isOpenDialog,
            };
        case 'CLOSE_DIALOG':
            return {
                ...state,
                isOpenDialog: action.isOpenDialog,
            };
        case 'IS_PREVIEW':
            return {
                ...state,
                previewStatus: !state.previewStatus,
            };

        case 'ADD_ITEM':
            return {
                ...state,
                isOpenDialog: action.isOpenDialog,
                items: [
                    ...state.items,
                    {
                        id:action.id,
                        type:action.items,
                    }
                ],
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                isOpenDialog: action.isOpenDialog,
                items: state.items.filter(it=> it.id !== action.id),
            };

        default:
            return state;
    }
};

export {
    Reducer
};