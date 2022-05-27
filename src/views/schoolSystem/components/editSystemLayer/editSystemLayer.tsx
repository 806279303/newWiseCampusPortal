import React from 'react';
import {BaseComponent} from "../../../../type/BaseComponent";

class EditSystemLayer extends BaseComponent<{}> {
    protected getClassNamePrefix(): string {
        return "edit-systemLayer";
    }

    constructor(props:any, context:any) {
        super(props, context);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default EditSystemLayer;