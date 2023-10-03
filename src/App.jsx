import iconCopy from "./assets/icon-copy.svg";
import iconCheck from "./assets/icon-check.svg";
import iconArrowRight from "./assets/icon-arrow-right.svg";
import { useState } from "react";

function App() {
  const [sliderValue, setSliderValue] = useState(10);

  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);

  const [passwordStrength, setPasswordStrangth] = useState("MEDIUM");

  const [password, setPassword] = useState("ert345!@!");

  const sliderChangeHandler = (event) => {
    setSliderValue(event.target.value);
  };

  const backgroundPercentage = (sliderValue / 20) * 100;
  const backgroundColor = `linear-gradient(90deg, #a4ffaf ${backgroundPercentage}%, white ${backgroundPercentage}%)`;

  const uppercaseSelectHandler = () => {
    setIncludeUppercase(!includeUppercase);
  };
  const lowercaseSelectHandler = () => {
    setIncludeLowercase(!includeLowercase);
  };
  const numberSelectHandler = () => {
    setIncludeNumber(!includeNumber);
  };
  const symbolSelectHandler = () => {
    setIncludeSymbol(!includeSymbol);
  };

  const generatePasswordHandler = (event) => {
    event.preventDefault();

    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumber &&
      !includeSymbol
    ) {
      return;
    }

    const uppercaseLatters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";

    if (includeUppercase) {
      characters += uppercaseLatters;
    }
    if (includeLowercase) {
      characters += lowercaseLetters;
    }
    if (includeNumber) {
      characters += numbers;
    }
    if (includeSymbol) {
      characters += symbols;
    }

    let newPassword = "";
    const passwordLength = parseInt(sliderValue);

    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomNumber);
    }

    setPassword(newPassword);
    console.log(newPassword);

    if (
      includeUppercase &&
      !includeLowercase &&
      !includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("TOO WEAK!");
    }
    if (
      !includeUppercase &&
      includeLowercase &&
      !includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("TOO WEAK!");
    }
    if (
      !includeUppercase &&
      !includeLowercase &&
      includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("TOO WEAK!");
    }
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("TOO WEAK!");
    }
    if (
      includeUppercase &&
      includeLowercase &&
      !includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("WEAK");
    }

    if (
      !includeUppercase &&
      includeLowercase &&
      includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("WEAK");
    }
    if (
      includeUppercase &&
      !includeLowercase &&
      !includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("WEAK");
    }
    if (
      !includeUppercase &&
      includeLowercase &&
      !includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("WEAK");
    }
    if (
      includeUppercase &&
      !includeLowercase &&
      includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("WEAK");
    }

    if (
      includeUppercase &&
      includeLowercase &&
      includeNumber &&
      !includeSymbol
    ) {
      setPasswordStrangth("MEDIUM");
    }
    if (
      includeUppercase &&
      includeLowercase &&
      !includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("MEDIUM");
    }
    if (
      includeUppercase &&
      !includeLowercase &&
      includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("MEDIUM");
    }

    if (
      !includeUppercase &&
      includeLowercase &&
      includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("MEDIUM");
    }

    if (
      includeUppercase &&
      includeLowercase &&
      includeNumber &&
      includeSymbol
    ) {
      setPasswordStrangth("STRONG");
    }
  };
  console.log("includeUppercase", includeUppercase);
  console.log("includeUppercase", includeUppercase);
  console.log(passwordStrength);

  // console.log(passwordStrength);

  const [copied, setCopied] = useState(false);

  const passwordCopyHandler = (event) => {
    setCopied(!copied);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopied(copied);
    }, 1000);
  };

  console.log(copied);

  return (
    <>
      <div className="header">
        <h1 className="title">Password Generator</h1>
        <form className="form-1">
          <h1>{password}</h1>

          <div className={"icon-copy-container"}>
            <div className="copied-status-container">
              {copied && <p className="copied-status">COPIED</p>}
            </div>

            <svg
              value={password}
              onClick={passwordCopyHandler}
              className="icon-copy"
              width="21"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="#A4FFAF"
                className="icon-copy"
              />
            </svg>
          </div>
        </form>

        <form className="form-2" onSubmit={generatePasswordHandler}>
          <div className="character-length">
            <h1>Character Length</h1>
            <h2>{sliderValue}</h2>
          </div>

          <div className="slider-container">
            <div
              className="slider-background"
              style={{ background: backgroundColor }}
            ></div>

            <input
              className="slider"
              type="range"
              id="password-length"
              min="1"
              max="20"
              onChange={sliderChangeHandler}
              value={sliderValue}
            />
          </div>

          <div className="">
            <div className={"checkbox-container"}>
              <div
                className={includeUppercase ? "checkbox" : "empty-checkbox"}
                onClick={uppercaseSelectHandler}
              >
                {includeUppercase && <img src={iconCheck} />}
              </div>
              <h1>Include Uppercase Latters</h1>
            </div>

            <div className="checkbox-container">
              <div
                className={includeLowercase ? "checkbox" : "empty-checkbox"}
                onClick={lowercaseSelectHandler}
              >
                {includeLowercase && <img src={iconCheck} />}
              </div>
              <h1>Include Lowercase Letters</h1>
            </div>

            <div className="checkbox-container">
              <div
                className={includeNumber ? "checkbox" : "empty-checkbox"}
                onClick={numberSelectHandler}
              >
                {includeNumber && <img src={iconCheck} />}
              </div>
              <h1>Include Numbers</h1>
            </div>

            <div className="checkbox-container">
              <div
                className={includeSymbol ? "checkbox" : "empty-checkbox"}
                onClick={symbolSelectHandler}
              >
                {includeSymbol && <img src={iconCheck} />}
              </div>
              <h1>Include Symbols</h1>
            </div>
          </div>

          <form className="strength-form">
            <h1>STRENGTH</h1>
            <div className="strength-indicator">
              <h2>{passwordStrength}</h2>
              <div className="indicator-boxes">
                <div
                  className="indicator-box-black"
                  style={{
                    background:
                      passwordStrength === "TOO WEAK!"
                        ? "#f64a4a"
                        : passwordStrength === "WEAK"
                        ? "#fb7c58"
                        : passwordStrength === "MEDIUM"
                        ? "#f8cd65"
                        : passwordStrength === "STRONG"
                        ? " #a4ffaf"
                        : "",
                  }}
                ></div>

                <div
                  className="indicator-box-black"
                  style={{
                    background:
                      passwordStrength === "WEAK"
                        ? "#fb7c58"
                        : passwordStrength === "STRONG"
                        ? " #a4ffaf"
                        : passwordStrength === "MEDIUM"
                        ? "#f8cd65"
                        : " ",
                  }}
                ></div>

                <div
                  className="indicator-box-black"
                  style={{
                    background:
                      passwordStrength === "MEDIUM"
                        ? "#f8cd65"
                        : passwordStrength === "STRONG"
                        ? " #a4ffaf"
                        : "",
                  }}
                ></div>

                <div
                  className="indicator-box-black"
                  style={{
                    background: passwordStrength === "STRONG" ? " #a4ffaf" : "",
                  }}
                ></div>
              </div>
            </div>
          </form>

          <button className="button">
            <div className="button-text-and-icon">
              <h1 className="button-text">GENERATE</h1>

              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="button-img"
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
