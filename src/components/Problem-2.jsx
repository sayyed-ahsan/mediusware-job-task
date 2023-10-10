import React, { useEffect, useState } from "react";
import AllContacts from "./AllContacts";
import USContacts from "./USContacts";
import axios from "axios";
import "./Style.css";

const Problem2 = () => {
  const [showALLContactsModal, setAllContactsModal] = useState(false);
  const [showUSContactsModal, setUSContactsModal] = useState(false);

  const [allContactsData, setAllContacts] = useState([]);

  const fetchAllContacts = async () => {
    try {
      const response = await axios.get(
        "https://contact.mediusware.com/api/contacts/"
      );
      // console.log(response);
      setAllContacts(response?.data?.results);
    } catch (error) {
      // console.error("Error fetching all contacts:", error);
    }
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);
  // console.log(allContactsData);
  // console.log(allContacts, usContacts);

  const AllContactsModal = (prop) => {
    setAllContactsModal(prop);
    setUSContactsModal(false);
  };

  const USContactsModal = (prop) => {
    setUSContactsModal(prop);
    setAllContactsModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => AllContactsModal(true)}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={() => USContactsModal(true)}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>

      <div>
        {/* All Contacts */}
        {showALLContactsModal && (
          <AllContacts
            {...{ AllContactsModal, USContactsModal, allContactsData }}
          />
        )}
        {/* All Contacts */}
      </div>
      <div>
        {/* US Contacts */}
        {showUSContactsModal && (
          <USContacts
            {...{ USContactsModal, AllContactsModal, allContactsData }}
          />
        )}
        {/* US Contacts */}
      </div>
    </div>
  );
};

export default Problem2;
