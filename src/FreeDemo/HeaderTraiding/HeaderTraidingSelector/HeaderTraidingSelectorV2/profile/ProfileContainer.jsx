import React, { useState, useRef } from "react";
import styles from "../profile/profileContainer.module.css";
import avatarr from "../../../../../images/avatarr.svg";

export default function ProfileContainer() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(avatarr);
  const [showInput, setShowInput] = useState(Array(3).fill(false));
  const [showInputAdd, setShowInputAdd] = useState(Array(3).fill(false));
  const [phoneNumber, setPhoneNumber] = useState("+37498224498");
  const [editable, setEditable] = useState(false);
  const [inputValues, setInputValues] = useState(Array(6).fill(""));

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const inputDots = ["Name", "SurName", "NickName"];
  const inputDotsAdditional = ["Country", "Address", "Date of birth"];

  const handleToggleEdit = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.startsWith("+374") && value.length <= 12) {
      setPhoneNumber(value);
    }
  };

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
    if (event.target.value === "") {
      const newShowInput = [...showInput];
      newShowInput[index] = false;
      setShowInput(newShowInput);
    }
  };

  const handleInputClick = (index, type) => {
    if (type === "main") {
      const newShowInput = [...showInput];
      newShowInput[index] = true;
      setShowInput(newShowInput);
    } else {
      const newShowInputAdd = [...showInputAdd];
      newShowInputAdd[index] = true;
      setShowInputAdd(newShowInputAdd);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.accountInfoContainer}>
        <div className={styles.targetInformation}>Account Information</div>
        <div className={styles.wrapperProfileContent}>
          <div className={styles.profileImgContainer}>
            <div className={styles.profileAvatar}>
              <img src={selectedImage} alt="" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <button onClick={handleButtonClick}>Change</button>
          </div>
          <div className={styles.profileContentContainer}>
            <div className={styles.aboutProfileContant}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "55%",
                }}
              >
                <p>User Profile ID</p>
                <p>1034658</p>
              </div>
            </div>
            {inputDots.map((title, index) => (
              <div className={styles.aboutProfileContant} key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "55%",
                    height: "80%",
                  }}
                >
                  <p>{title}</p>
                  {showInput[index] ? (
                    <input
                      className={styles.inputContantIndex}
                      type="text"
                      placeholder={title}
                      value={inputValues[index]}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  ) : (
                    <div
                      onClick={() => handleInputClick(index, "main")}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                      &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.contactInfoContainer}>
        <div className={styles.targetInformation}>Contact information</div>
        <div className={styles.contactContentContainer}>
          <div className={styles.aboutEmailContant}>
            <p>Email</p>
            <p>jeffbezos122@gmail.com</p>
            <button>verified</button>
          </div>
          <div className={styles.aboutEmailContant}>
            <p>Phone</p>
            {editable ? (
              <input
                type="text"
                value={phoneNumber}
                onChange={handleChange}
                onBlur={handleToggleEdit}
                autoFocus
                className={styles.inputContantAddindex}
              />
            ) : (
              <p onClick={handleToggleEdit}>{phoneNumber}</p>
            )}
            <button>verified</button>
          </div>
        </div>
      </div>
      <div className={styles.additionalInfoContainer}>
        <div className={styles.targetInformation}>Additional information</div>
        {inputDotsAdditional.map((title, index) => (
          <div className={styles.aboutAddContant} key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
                height: "80%",
              }}
            >
              <p>{title}</p>
              {showInputAdd[index] ? (
                <input
                  className={styles.inputContantAddindex}
                  type="text"
                  placeholder={title}
                  value={inputValues[index + 3]}
                  onChange={(event) =>
                    handleInputChange(index + 3, event)
                  }
                />
              ) : (
                <div
                  onClick={() => handleInputClick(index, "additional")}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                  &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
