"use client";
import React, { useState } from "react";
import InputComponent from "../inputComponent";
import SVGIcon from "@/app/assets/svgIcon";
import {
  Form,
  Heading,
  InputIconRight,
  MainDiv,
  OuterDiv,
  RightSection,
} from "./style";
import { Button } from "../button/button";
import { BUTTON_TYPE } from "../../global/constant";
import ImageSection from "./leftSection";

interface LoginSignupFormProps {
  initialType?: "login" | "signup";
  onSubmit?: (data: {
    email: string;
    password: string;
    confirmPassword?: string;
    type: "login" | "signup";
  }) => void;
}

const LoginSignupForm: React.FC<LoginSignupFormProps> = ({
  initialType = "login",
  onSubmit,
}) => {
  // const inputType = showPasswordToggle
  //   ? showPassword
  //     ? "text"
  //     : "password"
  //   : type;

  const [type, setType] = useState<"login" | "signup">(initialType);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // if (type === "signup" && form.password !== form.confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }
    if (onSubmit) {
      onSubmit({ ...form, type });
    }
  };

  return (
    <OuterDiv>
      <ImageSection />
      <RightSection>
        <MainDiv>
          <Heading>{type === "login" ? "Login" : "Sign Up"}</Heading>
          <Form onSubmit={handleSubmit}>
            {type === "signup" && (
              <InputComponent
                label="Name"
                name="Name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            )}
            <InputComponent
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <InputComponent
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              suffix={
                <InputIconRight
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={0}
                  // aria-label={showPassword ? "Hide password" : "Show password"}
                  role="button"
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter" || e.key === " ")
                  //     setShowPassword((prev) => !prev);
                  // }}
                >
                  <SVGIcon
                    name={showPassword ? "eye-open" : "eye-slash"}
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  />
                </InputIconRight>
              }
              required
            />

            {error && (
              <div style={{ color: "red", margin: "8px 0" }}>{error}</div>
            )}
            <Button
              title={type === "login" ? "Login" : "Sign Up"}
              buttonType="submit"
              width="100%"
              variant={BUTTON_TYPE.PRIMARY}
            />
          </Form>
          <div style={{ textAlign: "center", marginTop: 16 }}>
            {type === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  style={{
                    color: "#0070f3",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setType("signup")}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  style={{
                    color: "#0070f3",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setType("login")}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </MainDiv>
      </RightSection>
    </OuterDiv>
  );
};

export default LoginSignupForm;
