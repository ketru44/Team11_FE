import { useEffect, useState } from "react";

const useValid = (initialValue) => {
  const [validText, setValidText] = useState({
    nameText:'',
    emailText:'',
    passwordText:'',
    passwordConfirmText:''
  })
  const [isValid, setIsValid] = useState({
    isName:false,
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false
  })

  // name validation
  useEffect(()=>{
    if(!initialValue.name){
      setValidText({...validText, nameText: '닉네임은 필수 입력사항입니다'})
      setIsValid({...isValid, isName: false})
    } else{
      setValidText('')
      setIsValid({...isValid, isName: true})
    }
  },[initialValue.name])
  // email validation
  useEffect(()=>{
    const exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (initialValue.email && !exp.test(initialValue.email)){
      setValidText({...validText, emailText:'이메일을 확인해주세요!' })
      setIsValid({...isValid, isEmail: false})
    } else{
      setValidText('')
      setIsValid({...isValid, isEmail: true})
    }
  }, [initialValue.email])

  // password validation
  useEffect(()=>{
    const exp = /[\s\S]{8,}/
    if(initialValue.password && !exp.test(initialValue.password)){
      setValidText({...validText, passwordText:'8글자 이상 입력해주세요!' })
      setIsValid({...isValid, isPassword: false})
    } else{
      setValidText('')
      setIsValid({...isValid, isPassword: true})
    }
  }, [initialValue.password])

  // passwordConfirm validation
  useEffect(()=>{
    if(initialValue.passwordConfirm && initialValue.password !== initialValue.passwordConfirm){
      setValidText({...validText, passwordConfirmText:'비밀번호가 같지 않습니다!'})
      setIsValid({...isValid, isPasswordConfirm: false})
    } else{
      setValidText('')
      setIsValid({...isValid, isPasswordConfirm: initialValue.passwordConfirm ? true : false})
    }
  },[initialValue.passwordConfirm, initialValue.password])
  return {validText, isValid}
}

export default useValid;