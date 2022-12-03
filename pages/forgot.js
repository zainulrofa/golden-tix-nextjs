import Image from "next/image";
import styles from "../styles/Forgot.module.css";

import logo from "../assets/logo.png";
import eye from "../assets/eye.png";
import facebook from "../assets/Facebook.png";
import google from "../assets/google.png";
import logo2 from "../assets/logo2.png";

export default function Signup() {
  return (
    <main className={styles["main"]}>
      <aside className={styles["aside-left"]}>
        <Image className={styles["aside-left-image-1"]} src={logo} alt="img" />
        <h1 className={styles["aside-left-header-1"]}>
          Lets reset your password
        </h1>
        <p className={styles["aside-left-text-1"]}>
          To be able to use your account again, please complete the following
          steps.
        </p>
        <div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-1"]}>1</div>
            <p className={styles["aside-left-text-2"]}>
              Fill your complete email
            </p>
          </div>
          <div className={styles["aside-left-line-1"]}></div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-3"]}>2</div>
            <p className={styles["aside-left-text-3"]}>Activate your email</p>
          </div>
          <div className={styles["aside-left-line-1"]}></div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-3"]}>3</div>
            <p className={styles["aside-left-text-3"]}>
              Enter your new password
            </p>
          </div>
          <div className={styles["aside-left-line-1"]}></div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-3"]}>4</div>
            <p className={styles["aside-left-text-3"]}>Done</p>
          </div>
        </div>
      </aside>
      <aside className={styles["aside-right"]}>
        <Image
          className={styles["aside-right-image-2"]}
          src={logo2}
          alt="img"
        />
        <h1 className={styles["aside-right-header-2"]}>Forgot password</h1>
        <h1 className={styles["aside-right-header-1"]}>
          Fill your complete email
        </h1>
        <p className={styles["aside-right-text-1"]}>
          we'll send a link to your email shortly
        </p>
        <p className={styles["aside-right-label-1"]}>Email</p>
        <input
          className={styles["aside-right-input-1"]}
          type="text"
          placeholder="Write your email"
        />
        <button className={styles["aside-right-btn-1"]}>
          <p className={styles["aside-right-text-7"]}>Activate now</p>
        </button>
      </aside>
    </main>
  );
}