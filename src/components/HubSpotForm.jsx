// components/HubSpotForm.jsx
import React, { useEffect, useState } from 'react';

const HubSpotForm = ({ formId, portalId }) => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/shell.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          target: '#hubspotForm',
        });
        setFormLoaded(true);
      }
    };
    document.body.appendChild(script);
  }, [formId, portalId]);

  return (
    <div id="hubspotForm">
      {!formLoaded && <p>Loading form...</p>}
    </div>
  );
};

export default HubSpotForm;