import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Ngocontrol.css"


const ApproveNGOs = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/admin/pending-ngos");
        setNgos(res.data.getngo);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNGOs();
  }, []);

  const approveNGO = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:8080/api/v1/ngo/approve/${id}`);
      alert(res.data.message);
      setNgos(ngos.filter((ngo) => ngo._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error approving NGO");
    }
  };
  const updateNGO = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:8080/api/v1/ngo/update/${id}`);
      alert(res.data.message);
      setNgos(ngos.filter((ngo) => ngo._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error update NGO");
    }
  };
  const deleteNGO = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/v1/ngo/delete/${id}`);
      alert(res.data.message);
      setNgos(ngos.filter((ngo) => ngo._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting NGO");
    }
  };

  return (<>
    <div className="ngo-control">
    <div className="add-ngo">
      <h1>Add NGOs</h1>
      {ngos.length > 0 ? (
        ngos.map((ngo) => (
          <div key={ngo._id}>
            <h3>{ngo.name}</h3>
            <button onClick={() => approveNGO(ngo._id)}>Add</button>
          </div>
        ))
      ) : (
        <p>No pending NGO requests</p>
      )}
    </div>
    <div className="update-ngo">
    <h1>Update NGOs</h1>
      {ngos.length > 0 ? (
        ngos.map((ngo) => (
          <div key={ngo._id}>
            <h3>{ngo.name}</h3>
            <button onClick={() => updateNGO(ngo._id)}>Update</button>
          </div>
        ))
      ) : (
        <p>No pending NGO requests</p>
      )}
    </div>
    <div className="delete-ngo">
    <h1>Delete NGOs</h1>
      {ngos.length > 0 ? (
        ngos.map((ngo) => (
          <div key={ngo._id}>
            <h3>{ngo.name}</h3>
            <button onClick={() => deleteNGO(ngo._id)}>delete</button>
          </div>
        ))
      ) : (
        <p>No pending NGO requests</p>
      )}
    </div>
    </div>
    </>
  );
};

export default ApproveNGOs;
