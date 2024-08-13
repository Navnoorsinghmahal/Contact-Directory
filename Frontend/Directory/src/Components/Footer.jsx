import React from 'react';

const footerStyle = {
    backgroundColor: '#343a40', // Dark background color
    color: '#fff', // White text color
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
    width: '100%',
};

const containerStyle = {
    maxWidth: '1140px', // Adjust based on your design
    margin: '0 auto',
    padding: '0 15px',
};

const AppWrapper = {
    display: 'flex',
    flexDirection: 'column'

};

const mainContentStyle = {
    flex: '1',
};

const Footer = () => {
    return (
        <div style={AppWrapper}>
            <div style={mainContentStyle}>
            </div>
            <footer style={footerStyle}>
                <div style={containerStyle}>
                    <div className="row">
                        <div className="col-6">&copy; 2024</div>
                        <div className="col-6">Navnoor</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
