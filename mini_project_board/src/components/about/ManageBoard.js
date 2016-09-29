import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import BoardForm from './BoardForm';
import * as boardActions from '../../actions/boardActions'
import toastr from 'toastr';

export class ManageBoard extends Component {

   constructor(props, context) {
        super(props, context);

        this.state = {
            contents: Object.assign({}, props.contents),
            formTitle: props.formTitle
        }
    }

    updateChangeState(event) {
        const field = event.target.name;
        let contents = this.state.contents;

        contents[field] = event.target.value;
        return this.setState({contents: contents});
    }

    callWrite(event) {
        event.preventDefault();

        this.props.actions.writeBoard(this.state.contents)
        .then(() => this.redirect('saved'))
        .catch(error => {
            console.log(error);
        })
    }

    callModify() {
        this.setState({formTitle:'Update'});
    }

    callUpdate(event) {
        event.preventDefault();

          this.props.actions.updateBoard(this.state.contents)
        .then(() => this.redirect('updated'))
        .catch(error => {
            console.log(error);
        })
    }

    redirect(value) {
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.success(`content ${value}`);
        this.context.router.push('/about');
    }

    render() {
            let formTitle     = this.state.formTitle,
                contentResult = this.props.contents,
                changeState   = this.updateChangeState.bind(this),
                onClickTypes  = '',
                buttonName    = '',
                isActivate    = false;

                 switch (formTitle) {
                    case 'Content':
                        buttonName   = 'Modify';
                        onClickTypes = this.callModify.bind(this);
                        isActivate   = true;
                    break;

                    case 'Update' :
                        buttonName   = 'Update';
                        onClickTypes = this.callUpdate.bind(this);
                    break;

                    case 'Write' :
                        buttonName   = 'Save';
                        onClickTypes = this.callWrite.bind(this);
                    break;
                    default : buttonName = 'unknown'; break;
                 }

        return (
            <BoardForm
                isActivate  = {isActivate}
                readContent = {contentResult}
                formTitle   = {formTitle}
                buttonName  = {buttonName}
                onChange    = {changeState}
                onSave      = {onClickTypes} />
            );
    }

}
ManageBoard.contextTypes = {
    router: PropTypes.object.isRequired
}

ManageBoard.propTypes = {
    contents:  PropTypes.object.isRequired,
    actions:   PropTypes.object.isRequired,
    formTitle: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
    let initContent = {},
          formTitle = '',
            paramId = ownProps.params.id;

    if (paramId) {
        formTitle   = 'Content';
        initContent = state.contents.filter((content) => content.id === paramId)[0];
    }
    else {
        formTitle   = 'Write';
        initContent = {
                id: '',
                title:'',
                content: '',
                author:'',
                date:''
        }
    }

    return {
        contents: initContent,
        formTitle: formTitle,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(boardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBoard);

