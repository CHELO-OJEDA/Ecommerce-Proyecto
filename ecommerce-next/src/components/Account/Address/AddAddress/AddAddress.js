import { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from "./AddAddress.module.scss";

export function AddAddress() {
    const [show, setShow] = useState(false);
    
    const onOpenClose = () => setShow((prevState) => !prevState);
    
    console.log(show);

    return (
    <>
      <Button primary 
      className={styles.addBtn} 
      onClick={onOpenClose}
      > 
        Crear
      </Button>
    </>
  );
}
