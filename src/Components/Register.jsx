import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { RegisterNav } from "./RegisterNav";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <RegisterNav />
        <div className="flex-grow flex justify-center items-center">
          <div className="flex flex-col border border-gray-600 bg-slate-200 p-5 items-center rounded-md">
            <h2 className="text-2xl font-bold mb-6 capitalize flex justify-center">
              Registrati
            </h2>
            <div className="flex gap-5 pt-4">
              <TextField id="nome" label="Nome" required variant="outlined" />
              <TextField
                id="cognome"
                label="Cognome"
                variant="outlined"
                required
              />
            </div>
            <div className="flex gap-5 pt-4">
              <TextField
                id="email"
                label="E-mail"
                type="email"
                required
                variant="outlined"
              />
              <TextField
                id="rptemail"
                label="Ripeti e-mail"
                type="email"
                variant="outlined"
                required
              />
            </div>
            <div className="flex gap-5 pt-4">
              <TextField id="città" label="Città" variant="outlined" required />
              <TextField id="via" label="Via" variant="outlined" required />
            </div>
            <div className="flex gap-5 pt-4">
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
              <TextField
                id="rptpassword"
                className="max-w-[224px]"
                label="Ripeti password"
                variant="outlined"
                type={showRepeatPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle repeat password visibility"
                        onClick={handleClickShowRepeatPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showRepeatPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="pt-4">
              <Button text="Registrati" />
            </div>

            <div className=" ml-auto">
              <div>
                <p className=" font-light text-sm cursor-default">
                  Hai già un account?{" "}
                  <Link to="/login" className="underline hover:text-yellow-600">
                    Accedi
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
