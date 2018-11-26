import React from 'react';

const AprovalCard = props => {
    console.log(props);
    return(
        <div className="ui card">
            <div className="content">{ props.children }</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <a href="/" className="ui basic green button">Approve</a>
                    <a href="/" className="ui basic red button">Reject</a>
                </div>
            </div>
        </div>
    );
};

export default AprovalCard;