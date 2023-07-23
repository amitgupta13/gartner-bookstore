import { useRef, useState } from "react";
import { changePasswordInputs } from "./formStructure";
import classes from "./Signin.module.css";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useChangePasswordMutation, setCredentials } from "../store";
import { useToast } from "../hooks/useToast";
import { useDispatch } from "react-redux";

export default function ChangePassword() {
  const [doChange] = useChangePasswordMutation();
  const { showToast, ToastContainer } = useToast();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    valid: false,
  });

  const onChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      valid: formRef.current.checkValidity(),
    });

  const handleOnSubmit = async (e) => {
    if (!formRef.current.checkValidity()) return;
    e.preventDefault();
    try {
      const data = await doChange({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      }).unwrap();
      localStorage.setItem("accessToken", data?.accessToken);
      localStorage.setItem("refreshToken", data?.refreshToken);
      dispatch(setCredentials(data));
      formRef.current.reset();
      showToast("Password changed successfully", "success");
    } catch (err) {
      showToast(`Error changing password ${err?.data?.message}`, "error");
    }
  };

  return (
    <Card>
      <h1 className={classes.heading}>Change Password</h1>
      <form ref={formRef} onSubmit={handleOnSubmit}>
        <div className={classes["form-signin"]}>
          {changePasswordInputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button className={classes["auth-button"]} primary>
            Change Password
          </Button>
        </div>
      </form>
      <ToastContainer />
    </Card>
  );
}
