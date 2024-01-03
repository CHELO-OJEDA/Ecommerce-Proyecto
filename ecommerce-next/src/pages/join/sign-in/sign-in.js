import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h3>Iniciar sesion</h3>
      </div>
    </JoinLayout>
    </>

  )
}
