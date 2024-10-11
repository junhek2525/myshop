import styles  from "./sign.module.css"
import { TextField, Fade } from "@mui/material"
import { useState } from "react"

export default function Sign() {
    const [idValue, setIdValue] = useState("");
    const [showPwField,setShowPwFild] = useState(false);
    const headleIdChange = (event) => {
        const value = event.target.value;
        setIdValue(value);

        if(value.length > 0)
            {
                console.log(value);
                setShowPwFild(true);
            }else{
                setShowPwFild(false);
            }
        
    }
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.form}>
            <TextField 
                // required
                id="id-required"
                label="ID"
                // defaultValue="dd"
                placeholder="ID"
                helperText="이이잉"
                size=""
                value={idValue}
                onChange={headleIdChange}
            ></TextField>
            {showPwField && (
                <Fade in={showPwField} timeout={500}>
                    <TextField
                        id="password-required"
                        label="Password"
                        type="password"
                        placeholder="password"
                        helperText="8-16자 이내 영문, 특수문자 사용 가능"
                    >

                    </TextField>
                </Fade>
            )}
                </div>
                <h2>회원가입</h2>
            </div>
            
            
        </div>
        </>
    )
}