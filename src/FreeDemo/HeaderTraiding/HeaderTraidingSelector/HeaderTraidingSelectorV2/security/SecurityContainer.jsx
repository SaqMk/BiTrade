import React from "react";
import styles from "../security/securityContainer.module.css";

export default function SecurityContainer() {
  return (
    <div className={styles.securityContainer}>
      <div className={styles.targetInformation}>Security</div>
      <div className={styles.changePass}>
        <p className={styles.changePass_title}>Change Password</p>
        <div className={styles.changePass_contantWrapper}>
          <div className={styles.changePass_inputContainer}>
            <input
              placeholder="Current Password"
              type="text"
              className={styles.changePass_input}
            />
          </div>
          <div className={styles.changePass_inputContainer}>
            <input
              placeholder="New Password"
              type="text"
              className={styles.changePass_input}
            />
          </div>
          <div className={styles.changePass_inputContainer}>
            <input
              placeholder="Confirm Password"
              type="text"
              className={styles.changePass_input}
            />
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <p className={styles.forgotPass_ph}>Forgot Your Password?</p>
        </div>
        <button>Save</button>
      </div>
    </div>
  );
}
