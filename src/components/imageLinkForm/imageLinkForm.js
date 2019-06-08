import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return ( 
        < div >
            <p className = 'subtext f4 grey' > {
                'This magic Brain will detect faces in your pictures. Give it a try'
            } 
            </p>

            <
            div className = 'center' >
                <div className='center form br1 shadow-5'>
                <
                input className = 'f4 pa2 w-70 center'
                type = 'text' 
    onChange={onInputChange}
        / >

                <
                button className = 'w-30 grow f4 link ph3 pv2 dib white btn' onClick={onButtonSubmit} > Detect < /button> 
            
            </div>

            </div>
        
        </div>
    );
}

export default ImageLinkForm;
