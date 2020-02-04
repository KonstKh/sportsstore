import React from 'react';

export const ValidationError = (props: any) => {
  if (!props.errors) { return null; }
  return props.errors.map((err: any) => <h6 className="text-danger" key={err}>{err}</h6>)
}
