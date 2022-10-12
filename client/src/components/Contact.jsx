import {useEffect, useState} from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      await fetch("http://localhost:8080/contacts")
        .then((res) => res.json())
        .then((res) => setContacts(res));
    };

    getContacts();
  }, []);
  return (
    <>
      <div className="contact-container">
        <h2>Contact Me:</h2>
        <p>
          <ul>
            {contacts.map((contact, ind) => {
              return (
                <li>
                  <a href={contact.link}>{contact.type}</a>
                </li>
              );
            })}
          </ul>
        </p>
      </div>
    </>
  );
};

export default Contact;
