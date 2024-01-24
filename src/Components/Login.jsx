import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "./Button";
import { RegisterNav } from "./RegisterNav";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <RegisterNav />
        <div className="flex-grow flex justify-center items-center">
          <div className="flex flex-col border border-gray-600 bg-slate-200 p-5 items-center rounded-md min-w-[20%] ">
            <h2 className="text-2xl font-bold mb-6 capitalize flex justify-center">
              Login
            </h2>
            <div className="flex gap-5 pt-4 flex-col ">
              <TextField id="email" label="Email" required variant="outlined" />
              <TextField
                id="password"
                label="Password"
                className="max-w-[224px]"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="pt-4">
              <Button text="Login" />
            </div>

            <div className=" ml-auto">
              <div>
                <p className=" font-light text-sm cursor-default pt-">
                  Non un account?{" "}
                  <Link
                    to="/register"
                    className="underline hover:text-yellow-600"
                  >
                    Registrati
                  </Link>
                </p>
              </div>
            </div>
            <img src="/logo.png" alt="logo" className="max-w-28 pt-4" />
          </div>
        </div>
      </div>
    </>
  );
};
