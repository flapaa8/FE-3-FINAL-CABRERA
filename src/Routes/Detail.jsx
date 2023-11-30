import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); 
  console.log('ID:', id);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <>
      {userData ? (
        <>
          <h1>Detalle del Dentista {userData.id}</h1>
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
            
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Detail;