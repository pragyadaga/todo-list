import React from 'react';

const AddItem = props => (
    <div>
        <div className="input-field col">
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
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "10px"
        }}
            onClick={props.onAddTodoClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
            Add New ToDo Item
        </button>
    </div>
);

export default AddItem;