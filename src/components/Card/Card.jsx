import React, { useState } from 'react';
import './Card.css';

 const Card = ({ user,selectUser }) => {
    // const Card = (user) => {

    const { id, imageUrl, firstName, lastName, email, contactNumber, age, dob, salary, address } = user;

    const [showAnimateDiv, setShowAnimateDiv] = useState(false); //AnimateBtn 
    const [buttonText, setButtonText] = useState('Select');
    const [selected, setSelected] = useState(false);

    const AnimateBtn = () => {
        if (selected) {
            setShowAnimateDiv(false);
            setButtonText('Select');
        } else {

            setShowAnimateDiv(true);
            setButtonText('Selecting...');

            setTimeout(() => {

                setShowAnimateDiv(false);
                setButtonText('done');
                setTimeout(() => {

                    setButtonText('UnSelect');

                }, 1000);
            }, 1500);

        }

        setSelected(!selected);
    };


    return (
        <>
            <div className='user-data'>
                <div className="wrpper">
                    <div className="row"> <img src={imageUrl} alt="" style={{ borderRadius: "50%", width: "80px", border: "4px solid lightBlue " }} /> <b style={{ color: "lightBlue", }}>{firstName} {lastName}</b> </div>
                    <div className="row"><h3>ID : </h3> <p>{id}</p></div>
                    <div className="row"><h3>DOB : </h3> <p>{dob}</p></div>
                    <div className="row"><h3>AGE : </h3> <p>{age}</p></div>
                    <div className="row"><h3>Contact : </h3> <p>{contactNumber}</p></div>
                    <div className="row"><h3>Email : </h3> <p>{email}</p></div>
                    <div className="row"><h3>Address : </h3> <p>{address}</p></div>
                </div>
                <button onClick={() => selectUser(user, AnimateBtn)}>{buttonText}</button>
                <div className={`animate ${showAnimateDiv ? 'show' : ''}`}></div>
            </div>
        </>
    );
}

export default Card;






// 