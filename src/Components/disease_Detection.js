// import { fontSize, positions } from '@mui/system';
import { useState } from 'react';
import React from 'react';


const DiseaseDetection = () => {
        // State to manage visibility of the upload screen
        const [isVisible, setIsVisible] = useState(false);
      
        const handleUploadClick = () => {
          setIsVisible(true);
        };
       
  return (
    <div>
        {!isVisible && (

                <div style={{ display: 'flex', backgroundColor: '#5f7e6f', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{color: '#ffff', fontSize: 24, fontWeight: 700, position: 'absolute', top: 50, left: 205}}>Upload Image</p>
                <div style={{
                width: '1174px',
                height: '639px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
                border: '3px dotted #fff',
                boxSizing: 'border-box',
                borderRadius: '10px',
                position: 'relative',
                top: '20px'
                }}>
                <img width="330" height="330" src="/Group 96.png" alt="Upload Icon" />
                <p style={{ marginTop: '56px', textAlign: 'center', color: '#fff', fontSize: 26, fontWeight: 700}}>
                Drag and Drop Files <br />
                or <span><a href='https://www.google.com/' style={{color: '#00B2EB', margin: '5px 5px'}}>Click here</a></span>to select from your Device
                </p>
                <button 
                onClick={handleUploadClick}
                style={{ marginTop: '12px', padding: '16px 104px', backgroundColor: 'white', color: '#000000', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', cursor: 'pointer', fontSize: 17, fontWeight: 600 }}>
                Upload
                </button>
                </div>
                </div>

                )}

            {isVisible && (<div style={{ display: 'flex', backgroundColor: '#5f7e6f', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{
                        width: '1174px',
                        height: '717px',
                        padding: '32px',
                        border: '4px dotted #344E41', 
                        backgroundColor: '#344E41', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '100%', 
                            }}>
                        <div style={{
                            width: '300px',
                            height: '150px',
                            backgroundColor: '#5A7C6B',
                            borderRadius: '8px',
                            marginBottom: '20px'
                        }}><p style={{display: 'flex', flexDirection: 'column', fontSize: 20, color: '#fff', alignItems: 'center', marginTop: 20}}><span style={{fontSize: 60}}>+</span>Add More</p></div>
                        </div>


                    
                        <form style={{ width: '100%' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="cropName" style={{ display: 'block', color: '#fff' }}>Crop Name:</label>
                            <input id="cropName" type="text" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="disease" style={{ display: 'block', color: '#fff' }}>Disease:</label>
                            <input id="disease" type="text" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="treatment" style={{ display: 'block', color: '#fff' }}>Treatment:</label>
                            <input id="treatment" type="text" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
                        </div>

                      
                        <p style={{ color: '#fff' }}>Additional Information:</p>
                        <div style={{ marginBottom: '10px' }}>
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1" style={{ color: '#fff', marginLeft: '8px' }}>Checkbox 1</label>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input type="checkbox" id="checkbox2" />
                            <label htmlFor="checkbox2" style={{ color: '#fff', marginLeft: '8px' }}>Checkbox 2</label>
                        </div>
                        <textarea
                            rows="4"
                            placeholder="Description"
                            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                        />
                        </form>
                    </div>
                    </div>
                    )}

    </div>
  );
};

export default DiseaseDetection;
