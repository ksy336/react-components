import React from "react";
import '../Home/home.css';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            <p className="main-info">This is web-site about news articles.
                If you want to know some news- just write down some ley words and you will see the articles connected with this words.</p>
        </div>
    );
}
export default About;