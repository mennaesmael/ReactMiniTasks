import React from 'react'
interface props{
    children : string;
    color?: string;
 onClick : ()=> void;

}
const Button = ({children , color='primary', onClick}:props) => {
  return (
    <button className={'btn btn-'+color} onClick={onClick}>{children}</button >
  )
}

export default Button