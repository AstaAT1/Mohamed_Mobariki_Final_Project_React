import { useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    //* get the serviceId, templateId, publickey from your EmailJs  account
    const serviceId = "service_aczgw1t";
    const templateId = "template_y3gu98p";
    const publicKey = "419JkC7-U2D3c2TGn";

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: "Asta_AT1",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log("Email Sent Successfully");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setEmail("");
        setName("");
        setMessage("");
      });
  };

  return (
    <section className="dark:bg-gray-800 bg-[#F9F9F9]">
      <div className="max-w-[556px] px-4 py-10 mx-auto  flex flex-col ">
        <div className="w-full flex flex-col gap-5">
          <div className="flex gap-9">
            <label className="flex items-center gap-4">
              <input type="radio" className="w-7 h-7  accent-[#b9ff66]" />
              <span className="justify-start dark:text-white text-black text-base sm:text-lg font-normal ">
                Say Hi
              </span>
            </label>

            <label className="flex items-center gap-4">
              <input type="radio" className="w-7 h-7  accent-[#b9ff66]" />
              <span className="justify-start dark:text-white text-black text-base sm:text-lg font-normal ">
                Get a Quote
              </span>
            </label>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full">
              <label className=" dark:text-white text-black text-base font-normal  leading-7">
                Name*
              </label>
              <input
                placeholder="Name"
                type="text"
                className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "
              />
            </div>

            <div className="w-full">
              <label className="dark:text-white text-black text-base font-normal  leading-7">
                Email*
              </label>
              <input
                placeholder="Email"
                type="email"
                className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "
              />
            </div>

            <div className="w-full">
              <label className="dark:text-white text-black text-base font-normal  leading-7">
                Message*
              </label>
              <textarea
                className="mt-2 w-full resize-none px-5 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "
                placeholder="Message"
                cols="40"
                rows="10"
              ></textarea>
            </div>
          </div>

          <button
            onClick={sendEmail}
            className=" px-9 py-5 bg-[#191a23] rounded-2xl  dark:bg-white text-center dark:text-[#191a23]  text-white text-xl font-normal  leading-7"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;