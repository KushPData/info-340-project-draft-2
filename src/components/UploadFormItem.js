import React from 'react';

export function UploadFormItem(props) {
    return(
        <div>
            <label for="descript">{props.name}</label>
            <input type="text" id="descript" name="descript" />
        </div>
    );
}