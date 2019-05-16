import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import './Signature.css'


class Signature extends React.Component {
    constructor(props) {
        super(props);
        this.signaturePad = React.createRef();
    }

    componentDidMount() {
        console.log(this.signaturePad);
        this.signaturePad.current.fromDataURL(this.props.signatureString, {width: 350, height: 200});
    }

    clearSignature() {
        this.signaturePad.current.clear();
        this.props.handleSignatureChange(this.signaturePad.current)
    }

    addSignature() {
        this.props.handleSignatureChange(this.signaturePad.current);
    }

    render() {
        return (       
            <div className="signature__container">
                <h3>Please sign here:</h3>
                <SignatureCanvas
                        canvasProps={{width: 350, height: 200, className: 'sigCanvas'}} 
                        ref={this.signaturePad}
                        onEnd={this.addSignature.bind(this)}
                />
                <Button size="small" color="primary" onClick={this.clearSignature.bind(this)}>Clear</Button>
            </div>
        );
    }
    
}


Signature.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Signature;