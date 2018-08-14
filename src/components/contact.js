import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  return (
      <section className="contact" id={`contact-${props.index}`}>
          <img src={props.photo} className="contact-photo" alt="{props.name}'s avatar"/>
          <h2 className="contact-name">{props.name}</h2>
          <address className="contact-address">{props.address}</address>
      </section>
  );
};

Contact.defaultProps = {
  photo: '',
  name: '',
  address: ''
};
