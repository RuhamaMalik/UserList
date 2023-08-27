import "./Home.css";
import React, { useState, useEffect } from 'react';
import user from "../../assets/user.png"
import Card from '../../components/Card/Card';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => { //FETCH USER DATA
        const fetchDat = async () => {
            try {
                const response = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                throw new Error('Error is ---- :', error)
            }
        }
        fetchDat()

    }, [])

    //SELECTED USERS ARRAY

    const [selectedUsers, setSelectedUsers] = useState([]);

    const selectUser = (user, AnimateBtn) => {
        setSelectedUsers((prevSelectedUsers) => {
            if (prevSelectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
                return prevSelectedUsers.filter((selectedUser) => selectedUser.id !== user.id);
            } else {
                return [...prevSelectedUsers, user];
            }
        });
        AnimateBtn()  
      };





    // SHOW SELECTED USERS Div
    const [isDataVisible, setDataVisible] = useState(false);
    const visible = () => {
        const dataDiv = document.querySelector(".data");
        setDataVisible(!isDataVisible);
        isDataVisible === true ? dataDiv.style.display = "none" : dataDiv.style.display = "block";
    };

    return (
        <>
            <nav><h1><img src={user} alt="" width="35px" />UserData...</h1></nav>

            <h3 className="selected" onClick={() => visible()}>
                <img src={user} width="25px" /><br /> SU  </h3>
            <div className="data">
                <h3 onClick={() => visible()}>X</h3>

                <div className="container">
                    <h3 >NAME</h3>
                    <h3 >AGE</h3>
                    <h3 >CONTACT</h3>
                    <div className="item">
                        {selectedUsers.map((ele, index) => (
                            <p key={index}>{ele.firstName}</p>
                        ))}
                    </div>
                    <div className="item">
                        {selectedUsers.map((ele, index) => (
                            <p key={index}>{ele.age}</p>
                        ))}
                    </div>
                    <div className="item">
                        {selectedUsers.map((ele, index) => (
                            <p key={index}>{ele.contactNumber}</p> 
                        ))}
                    </div>

                </div>
            </div>

            <div className='user-data-list'>
                {data.map((user) => (
                    <Card key={user.id}
                        user={user}
                         selectUser={selectUser}br
                    />
                ))}
            </div>
        </>
    );
}

export default Home;
