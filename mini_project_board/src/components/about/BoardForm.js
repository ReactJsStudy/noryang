import React , { PropTypes } from 'react';
import FormInput from './FormInput';

const BoardForm = ({onChange, onSave, formTitle, readContent, isActivate, buttonName}) => {
    return (
        <form>
        <h1>{formTitle}</h1>
            <FormInput name="author"
                       label="Author"
                       onChange={onChange}
                       defaultValue={readContent.author}
                       disabled={isActivate} />

            <FormInput name="title"
                       label="Title"
                       onChange={onChange}
                       defaultValue={readContent.title}
                       disabled={isActivate} />

            <div className="form-group">
                 <label htmlFor="content">Content</label>
                 <textarea name="content"
                             id="content"
                      className="form-control"
                       onChange={onChange}
                   defaultValue={readContent.content}
                   disabled={isActivate}></textarea>
            </div>
            <input type="button"
                   value={buttonName}
                   onClick={onSave}
                   className="btn btn-success"/>
        </form>
        );
}

BoardForm.propTypes = {
    onChange:    PropTypes.func.isRequired,
    onSave:      PropTypes.func.isRequired,
    formTitle:   PropTypes.string.isRequired,
    readContent: PropTypes.object.isRequired,
    isActivate:  PropTypes.bool.isRequired,
    buttonName:  PropTypes.string.isRequired
}

export default BoardForm;

