import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About(props) {

    const aboutStyle = {
        color: props.state === false ? "black" : "white",
        backgroundColor: props.state === false ?  "white":"#212529",
        transition: "0.5s",
        border: props.state === false ? "" : "0.5px solid white",
    }

    return (
        <div >
            <h1 className={`text-${props.state === false ? "dark" : "light"}`}>About Us</h1>
            <Accordion className={`text-${props.state === false ? "dark" : "light"}`} style={aboutStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={`text-${props.state === false ? "dark" : "light"}`}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={`text-${props.state === false ? "dark" : "light"}`} style={aboutStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={`text-${props.state === false ? "dark" : "light"}`}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}