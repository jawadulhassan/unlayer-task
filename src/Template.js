import React, { useState } from "react";
import EmailEditor from "react-email-editor";
import { Link } from "react-router-dom";

import { Input, Button, HeadingWrapper } from "./styles";
import { addTemplate, editTemplate } from "./helpers/storage";

function Template({ location = {} }) {
  const [templateName, setTemplateName] = useState(
    location.state ? location.state.name : null
  );

  const handleChange = event => {
    event.preventDefault();
    if (event.target.value) setTemplateName(event.target.value);
  };

  const addTemplateFunc = template => {
    addTemplate(template);
  };

  const editTemplateFunc = (id, template) => {
    editTemplate(id, template);
  };

  const handleFunc = location.state
    ? () => editTemplateFunc(location.state._id, templateName)
    : () => addTemplateFunc(templateName);

  return (
    <>
      <HeadingWrapper>
        <Input
          type="text"
          value={templateName}
          onChange={event => handleChange(event)}
          placeholder={
            templateName ? templateName : "Please enter template name"
          }
        />
        <Link to="/">
          <Button primary={true} onClick={handleFunc}>
            Save Template
          </Button>
        </Link>
      </HeadingWrapper>
      <div>
        <EmailEditor />
      </div>
    </>
  );
}

export default Template;
