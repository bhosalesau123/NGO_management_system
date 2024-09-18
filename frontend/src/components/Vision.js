
import '../styles/Vision.css';

import React from 'react';

const VisionPage = () => {
    return (
        <div className="vision-page">
            <section id="vision" className="vision-section">
                <div className="container">
                    <h1 className="section-title">Our Vision</h1>
                    <p className="section-content">
                        Our vision is to transform business management with innovative solutions and advanced technologies. We are dedicated to empowering organizations to achieve their goals efficiently by providing a versatile management system tailored to their needs.
                    </p>
                </div>
            </section>
            <section id="objectives" className="objectives-section">
                <div className="container">
                    <h2 className="section-title">Objectives</h2>
                    <ul className="objectives-list">
                        <li>Deliver an intuitive and user-friendly management system.</li>
                        <li>Integrate features that enhance productivity and streamline processes.</li>
                        <li>Provide outstanding customer support and ongoing improvements.</li>
                        <li>Encourage innovation and adapt to evolving business needs.</li>
                    </ul>
                </div>
            </section>
            
        </div>
    );
};

export default VisionPage;
