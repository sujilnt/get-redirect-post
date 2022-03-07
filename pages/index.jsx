import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";

function Home() {
  const router  =  useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  const onSubmit= async (e) => {
      e.preventDefault();
      try{
         const response = await fetch(`${window.location.origin}/api/checknumber`,{
              method: 'POST',
              redirect: 'follow',
              body: value
          });

         if(response.redirected){
             localStorage.clear();
             router.push(response.url);
         } else {
            await Promise.reject(response);
         }

      } catch (error) {
          localStorage.setItem("numberValidator", value);
          const errorMessage = await error.json();
          setError(errorMessage);
      }
  }



  useEffect(()=>{
  const previousValue =  localStorage.getItem("numberValidator") || "";
  setValue(previousValue);
  },[]);


  const onChange=(value)=>{
      setValue(value);
      setError(undefined)
    }


  return (
    <div className={styles.mainContainer}>
        <h3>Validate Number</h3>
        {!!error ? (
            <div className={styles.errorMessage}>
                <p><span className={styles.capitalize}>
                    {error.error}</span>: {error.message}
                </p>
            </div>
        ): null }
      <form onSubmit={onSubmit} className={styles.form}>
        <input
            className={styles.numberInput}
            type="text"
            maxLength="10"
            placeholder={"enter a number "}
            value={value}
            onChange={(e)=> onChange(e.target.value)} />
        <button
            className={styles.submitButton}
            disabled={value.length < 10}>
            validate
        </button>
      </form>
    </div>
  )
}

export default Home;
