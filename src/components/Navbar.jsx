import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation();

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.state === false ? 'light' : 'dark'} bg-${props.state === false ? 'light' : 'dark'}`} style={{ transition: '0.5s' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link className="nav-link" aria-current="page" to="/" style={{ color: location.pathname === '/' ? 'green' : '', transition: 'color 0.5s'}}>
                                Home
                            </Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`} >
                            <Link className="nav-link" to="/about" style={{ color: location.pathname === '/about' ? 'green' : '', transition: 'color 0.5s'}}>
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    <FormControl component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={props.state} onChange={props.handleChange} name="tog" />}
                                label={`Enable ${props.state === false ? 'Dark' : 'Light'} Mode`}
                                className={`text-${props.state === false ? 'dark' : 'light'}`}
                            />
                        </FormGroup>
                    </FormControl>
                </div>
            </div>
        </nav>
    );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}