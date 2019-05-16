import React from 'react';
import StudentLookup from '../../components/StudentLookup/StudentLookup';

import './BackOffice.css';

class BackOffice extends React.Component {
    render() {
        return (
            <div className="container">
                <StudentLookup />
            </div>
        );
    }
}

export default BackOffice;