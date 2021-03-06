import  '../styles/button.css';
import {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
  return(
    <div>
       <button className="button" {...props}/>
    </div>
  );
}