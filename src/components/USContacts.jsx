import React, { useState } from "react";

const USContacts = ({ USContactsModal, AllContactsModal, allContactsData }) => {
  //
  const [showEvenContacts, setShowEvenContacts] = useState(false);

  const handleCheckboxChange = () => {
    setShowEvenContacts(!showEvenContacts);
  };
  const evenIdContacts = allContactsData.filter(
    (contact) => contact.id % 2 === 0
  );
  const evenIdContactsCountryUSA = allContactsData.filter(
    (contact) => contact.country.name === "United States"
  );

  console.log(evenIdContacts, evenIdContactsCountryUSA, "sssssss");
  //
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
            <h5 className="modal-title"> US Contacts</h5>
          </div>

          <div className="modal-body">
            {allContactsData?.map((contact, index) => (
              <>
                {contact.country.name === "United States" && (
                  <div className="card p-3 m-1" key={index}>
                    <p className="mb-0">Name: {contact?.country?.name}</p>
                    <p className="mb-0">Phone: {contact.phone}</p>
                  </div>
                )}
              </>
            ))}
          </div>

          <div className="modal-footer">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
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
                {" "}
                US Contacts
              </button>

              <button
                type="button"
                className="btn custom-buttonC"
                onClick={() => USContactsModal(false)}
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

export default USContacts;
