import React from 'react';
import Header from "../Components/Header"
import { Link } from "gatsby"

const Test = () => {
    return (
        <div>
            <Header headerText={"Test"} />
            <Link to="/">Home</Link>
        </div>
    );
}
 
export default Test;