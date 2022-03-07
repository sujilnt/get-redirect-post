import React, {useEffect, useState} from 'react';
import styles from '../../../styles/Home.module.css';

function Success(){
    const  [value,setValue] = useState();
    useEffect(() => {
        const inputValue = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1);
        setValue(inputValue);
    },[]);

    return (
        <div className={styles.successPage}>
          <p className={styles.text}>
              The entered {value} is a valid Number.
          </p>
        </div>
    )
}


export default Success;
