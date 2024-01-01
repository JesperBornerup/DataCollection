"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CookiesProvider, useCookies } from "react-cookie";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const recaptcha = useRef();
  const [ifield, setIfield] = useState("");
  const [selectedValue, setSelectedValue] = useState("Facebook");
  const router = useRouter();
  const [uidCookies, setuidCookie] = useCookies(["userID"]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setIfield(e.target.value);
  };

  const createUser = async (event) => {
    event.preventDefault();
    // const captchaValue = recaptcha.current.getValue();
    // if (!captchaValue) {
    //   alert("Please verify you are a human!");
    // } else {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ifield,
          category: selectedValue,
        }),
      });
      if (response.status === 200) {
        console.log("success");
        setuidCookie("userID", ifield, {
          path: "/",
          maxAge: 2592000,
          sameSite: "lax",
        });
        const pageArray = JSON.parse(localStorage.getItem("pagesArray"));
        console.log(pageArray);
        if (pageArray === null || pageArray.lenght === 0) {
          localStorage.setItem("pagesArray", JSON.stringify([]));
        }
        router.push(`/start2/${ifield}`);
      } else {
        setIsLoading(false);
        alert("User already exists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  else
    return (
      <div>
        <form className="flex flex-col items-center bg-gray-800 px-4 py-2 w-full max-w-xs">
          <div className="flex flex-col mb-4">
            <label className="text-white font-bold mb-2">
              Indtast et navn her (eventuelt anonymt)
            </label>
            <input
              className="bg-gray-700 rounded-md py-2 px-4 text-white "
              type="text"
              id="message"
              onChange={handleChange}
              value={ifield}
            />
          </div>
          {/* <ReCAPTCHA
            ref={recaptcha}
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          /> */}
          <button
            onClick={createUser}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mb-4"
          >
            Begynd
          </button>
        </form>
      </div>
    );
}

export default Login;
