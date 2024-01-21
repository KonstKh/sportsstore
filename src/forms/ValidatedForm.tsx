import React, { useState, useRef } from 'react';
import { ValidationError } from './ValidationError';
import { GetMessages } from './ValidationMessages';

interface ValidationErrors {
  [key: string]: string[];
}

export const ValidatedForm = (props: any) => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const formElements: { [key: string]: any } = {};

  const handleSubmit = () => {
    setInitialLoad(false);
    return Object.values(formElements).forEach((elem: any) => {
      if (!elem.checkValidity()) {
        const messages = GetMessages(elem);
        setValidationErrors(validationErrors => ({ ...validationErrors, [elem.name]: messages }));
      } 
      else {
        const validationErrorsCopy = validationErrors;
        delete validationErrorsCopy[elem.name];
        setValidationErrors(validationErrors => ({ ...validationErrors, ...validationErrorsCopy}));
      }
    })
  }

  // TODO: useRef instead
  useRef(() => {
    if(initialLoad) return;
    if(Object.keys(validationErrors).length === 0) {
      const entries = Object.entries(formElements).map(e => ({[e[0]]: e[1].value}))
      const data =  Object.assign( {}, entries)
      props.submitCallback(data);
    }
  });

  const registerRef = (elem: any) => {
    if (elem !== null) {
      formElements[elem.name] = elem;
    }
  }

  const renderElement = (modelItem: any) => {
    const name: string = modelItem.name || modelItem.label.toLowerCase();
    return <div className="form-group" key={modelItem.label}>
      <label htmlFor="">{modelItem.label}</label>
      <ValidationError errors={(validationErrors as any)[name]} />
      <input type="text" className="form-control" name={name} ref={registerRef} {...props.defaultAttrs} {...modelItem.attrs} />
    </div>
  }

  return (
    <React.Fragment>
      {props.formModel.map((m: any) => renderElement(m))}
      <div className="text-center">
        <button className="btn btn-secondary m-1" onClick={props.cancelCallback}>{props.cancelText || 'Cancel'}</button>
        <button className="btn btn-primary m-1" onClick={handleSubmit}>{props.submitText || 'Submit'}</button>
      </div>
    </React.Fragment>
  )
}