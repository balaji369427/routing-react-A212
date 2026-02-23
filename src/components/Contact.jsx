import React from "react";
import { useSearchParams } from "react-router-dom";

function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      {/*http://localhost:5173/contact?name=Balaji&phoneNo=9629453075*/}
      <p>Name: {searchParams.get("name")}</p>
      <p>Phone No: {searchParams.get("phoneNo")}</p>

      <button
        className="btn btn-primary m-3"
        onClick={() => setSearchParams({ email: "balaji@gmail.com" })}
      >
        Set Search Parameters
      </button>
    </div>
  );
}

export default Contact;