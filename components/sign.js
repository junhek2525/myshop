import styles from "./sign.module.css";
import { TextField, Fade, button } from "@mui/material";
import { useState } from "react";

export default function Sign() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [pwCheckValue, setPwCheckValue] = useState("");
  const [showPwField, setShowPwFild] = useState(false);
  const [showPwCheckField, setShowPwCheckField] = useState(false);

  const [helpText, setHelpText] = useState("6-12자 이내 영문, 숫자 사용가능");
  const [pwhelpText, setPwHelpText] = useState("");
  const [pwCheckHelpText,setPwCheckHelpText] = useState("");

  const [iderror, setIderror] = useState(false);
  const [pwerror, setPwerror] = useState(false);
  const [pwCheckError,setPwCheckError] = useState(false);
  const headleIdChange = (event) => {
    const value = event.target.value;
    setIdValue(value);

    const regexId = /^[a-zA-Z0-9]{6,12}$/;
    if (regexId.test(value)) {
      setShowPwFild(true);
      console.log("유효한 ID입니다");
      setHelpText("유효한 ID입니다");
      setIderror(false)
    } else {
      setShowPwFild(false);
      setIderror(true)
      console.log("유효하지 않니다");
      setHelpText("유효하지 않는 ID입니다 6-12자 이내 영문, 숫자 사용가능");
    }

    // if(value.length > 0)
    //     {
    //         console.log(value);
    //
    //     }else{
    //
    //     }
  };
  const handlePwChange = (event) =>{
    const value = event.target.value;
    setPwValue(value);

    const regexpw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if(regexpw.test(value)){
      setShowPwCheckField(true);
      setPwerror(false);
      setPwHelpText("사용 가능한 PW 입니다.");
    } else{
      setShowPwCheckField(false);
      setPwerror(true);
      setPwHelpText("비밀번호는 8~16자 이내 영문,숫자,특수숫자를 포함해야 합니다.");
    }
    // if (regexpw.test(value)) {

    //   console.log("유효한 ID입니다");
    //   setHelpText("유효한 ID입니다");
    //   seterror(false)
    // } else {

    //   seterror(true)
    //   console.log("유효하지 않니다");
    //   setHelpText("유효하지 않는 ID입니다 6-12자 이내 영문, 숫자 사용가능");
    // }
  };
  const handlePwCheckChange = (event) => {
    const value = event.target.value;
    setPwCheckValue(value);

    if(pwValue == pwCheckValue){
      setPwCheckError(false)
      setPwCheckHelpText("1")
    }else{
      setPwCheckError(true)
      setPwCheckHelpText("비밀번호가 일치하지 않습니다.")
    }
  }
  const headleUserNameChange = (event) => {
      const value = event.target.value
      setUserNameValue(value);
      if(value.length>0){
        setUserNameValue(value);
      }
  }
  const handleSubmit = () => {
    if(!iderror && !pwerror && !pwCheckError && !userNameValue> 0 && idValue.length > 0)
    {
      alert("회원가입")
    }else{
      alert("언회원가입")
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          
          <div className={styles.form}>
          <h2>회원가입</h2>
          <TextField
            id="username-required"
            label="Username"
            placeholder="닉네임"
            helperText="사용하실 닉네임을 입력해주세요"
            value={userNameValue}
            onChange={headleUserNameChange}
            fullWidth
          >

          </TextField>
            <TextField
              // required
              error={iderror}
              id="id-required"
              label="ID"
              // defaultValue="dd"
              placeholder="ID"
              helperText={helpText}
              size=""
              value={idValue}
              onChange={headleIdChange}
            ></TextField>
            {showPwField && (
              <Fade in={showPwField} timeout={500}>
                <TextField
                error={pwerror}
                  id="password-required"
                  label="Password"
                  type="password"
                  placeholder="password"
                  helperText={pwhelpText}
                  value={pwValue}
                  onChange={handlePwChange}
                  fullWidth
                ></TextField>
              </Fade>
            )}
            {showPwCheckField && (
              <Fade in={showPwCheckField} timeout={500}>
                <TextField
                error={pwCheckError}
                  id="password-match"
                  label="Password 재확인"
                  type="password"
                  placeholder="password 다시 입력"
                  helperText={pwCheckHelpText}
                  value={pwCheckValue}
                  onChange={handlePwCheckChange}
                  fullWidth
                ></TextField>
              </Fade>
            )}
            <button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              style={{marginTop : '20px'}}
              >Continue
            </button>
          </div>

        </div>
      </div>
    </>
  );
  }
