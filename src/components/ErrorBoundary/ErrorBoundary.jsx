import React from 'react';
import { withRouter } from 'react-router-dom';
import { Main as MainLayout, Minimal as MinimalLayout } from '../../layouts';
import Button from '../CustomButtons/Button';
import { Grid } from '@material-ui/core'

import './ErrorBoundary.styles.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidMount() {
        const { history } = this.props;

        history.listen((location, action) => {
            if (this.state.hasError) {
                this.setState({
                    hasError: false,
                });
            }
        });
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log({ error, errorInfo });
    }

    reloadHandler = () => {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <MainLayout>
                    
                            <div className="err-img-lay" style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "auto"
                            }}>
                                <div style={{
                                    display: "inline-block",
                                    backgroundImage: "url('https://i.imgur.com/A040Lxr.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "40vh",
                                    height: "40vh"
                                }}>

                                </div>
                                <h2 style={{
                                    fontSize: "28px",
                                    color: "#2f8e89"
                                }}>Something went wrong.</h2>
                                <Button onClick={this.reloadHandler} color="success">
                                    {"Reload"}
                                </Button>
                            </div>
                        
                </MainLayout >
            );
        }

        return this.props.children;
    }
}

export default withRouter(ErrorBoundary);