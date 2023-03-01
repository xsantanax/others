import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import MyButton from '../../util/MyButton'

//Mui stuff
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'


//Redux stuff
import {connect} from 'react-redux'
//remember to add on connect at the end
import {postScream, clearErrors} from '../../redux/actions/dataActions'

const styles = theme => ({
    ...theme.spreadIt,
    submitButton: {
        position: 'relative',
        float: 'right'
    },
    progressSpinner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        right:'0%'
        // top:'0%'
    }
})

class PostScream extends Component {
    state = {
        open: false,
        body: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ body: '', open: false, errors: {} })
        }
    }
    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.props.clearErrors()
        this.setState({open: false, errors: {}})
    }
    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postScream({ body: this.state.body })
    }
    render() {
        const {errors} = this.state
        const {classes, UI: {loading}} = this.props
        return (
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Post a scream!">
                    <AddIcon/>
                </MyButton>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">
                    <MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton}>
                        <CloseIcon/>
                    </MyButton>
                    <DialogTitle>Post a new scream</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField name="body"
                                type="text"
                                label="SCREAM!!"
                                multiline
                                rows="3"
                                placeholders="Scream at your fellow apes"
                                error={errors.body ? true : false}
                                helperText={errors.body}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <Button type="submit" variant="contained" color="primary"
                                className={classes.submitButton} disabled={loading}>
                                    Submit
                                    {loading && (
                                        <CircularProgress size={30} className={classes.progressSpinner}/>
                                    )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

PostScream.propTypes = {
    postScream: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(
    mapStateToProps, 
    {postScream, clearErrors}
    )(withStyles(styles)(PostScream))
