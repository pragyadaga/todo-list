import React from 'react';

const AddItem = props => (
    <div>
        <div className="input-field col s12">
            <input
                onChange={props.onChange}
                value={props.value}
                // error={errors.newItemTitle}
                id="newItemTitle"
                type="newItemTitle"
            />
        </div>
        <button
            style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
        }}
            onClick={props.onAddTodoClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
            Add New Todo Item
        </button>
    </div>
);

export default AddItem;