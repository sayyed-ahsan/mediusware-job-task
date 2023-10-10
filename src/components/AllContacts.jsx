import React, { useState } from "react";

const AllContacts = ({
  AllContactsModal,
  USContactsModal,
  allContactsData,
}) => {
  const [showEvenContacts, setShowEvenContacts] = useState(false);

  const handleCheckboxChange = () => {
    setShowEvenContacts(!showEvenContacts);
  };

  const evenIdContacts = allContactsData.filter(
    (contact) => contact.id % 2 === 0
  );

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> All Contacts</h5>
          </div>
          <div className="modal-body">
            {showEvenContacts
              ? evenIdContacts.map((contact, index) => (
                  <div className="card p-3 m-1" key={index}>
                    <p className="mb-0">Name: {contact.country.name}</p>
                    <p className="mb-0">Phone: {contact.phone}</p>
                  </div>
                ))
              : allContactsData.map((contact, index) => (
                  <div className="card p-3 m-1" key={index}>
                    <p className="mb-0">Name: {contact.country.name}</p>
                    <p className="mb-0">Phone: {contact.phone}</p>
                  </div>
                ))}
          </div>

          <div className="modal-footer">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={showEvenContacts} // Bind the checked state to showEvenContacts
                onChange={handleCheckboxChange} // Handle checkbox change
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Only even
              </label>
            </div>

            <div className="modal-footer border-0">
              <button
                onClick={() => AllContactsModal(true)}
                type="button"
                className="btn custom-button"
              >
                All Contacts
              </button>
              <button
                onClick={() => USContactsModal(true)}
                type="button"
                className="btn custom-buttonB"
              >
                US Contacts
              </button>

              <button
                type="button"
                className="btn custom-buttonC"
                onClick={() => AllContactsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContacts;
