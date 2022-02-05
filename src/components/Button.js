import React from 'react';

export default function Button({link, text, onclick}) {
  return <a href={link} className='button'>{text}</a>;
}
