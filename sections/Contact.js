import React from "react";

const Contact = () => {
  return (
    <div className="h-[100vh] lg:h-[78vh]">
      <h1
        id="contact"
        className="text-5xl text-center mt-28 mb-16 relative before:absolute before:center before:bottom-[-10px] before:h-[5px] before:translate-x-[-6%] before:w-[60px] before:bg-[#ee7813] after:absolute after:bottom-[-8px] after:translate-x-[-98%] after:h-[1px] after:w-[210px] after:bg-[#ee7813]"
      >
        Contact
      </h1>

      <div className="w-[80%] lg:grid lg:grid-cols-2 lg:mt-14 items-center mx-auto mb-5">
        <div>
          <div>
            <p>
              <img
                src="mail.png"
                className="text-primary-orange w-[5%] inline m-5 text-left"
              />
              jonathan.theron@gmx.fr
            </p>
            <p>
              <img
                src="phone.png"
                className="text-primary-orange w-[5%] inline m-5 text-left"
              />
              06.66.63.11.07
            </p>
            <p>
              <img
                src="location.svg"
                className="text-primary-orange w-[5%] inline m-5 text-left"
              />
              3 bd Paul Chenguelia 38230 Pont-de-cheruy
            </p>
          </div>
          <div>
            <ul>
              <li>
                <img src="" />
              </li>
              <li>
                <img src="" />
              </li>
              <li>
                <img src="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center my-14 lg:mt-0">
          <form
            className=""
            autoComplete="off"
            action="https://formsubmit.co/jonathan.theron@gmx.fr"
            method="POST"
          >
            <div className="grid grid-cols-2 lg:m-0 mx-auto">
              <div>
                <input
                  type="text"
                  name="Nom"
                  placeholder="Nom"
                  required
                  autoComplete="off"
                  className="text-center bg-transparent w-[75%] m-3 border-b  rounded-md text-white"
                />
                <input
                  type="text"
                  name="Prenom"
                  placeholder="Prénom"
                  autoComplete="off"
                  className="text-center bg-transparent w-[75%] m-3 border-b  rounded-md"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="Téléphone"
                  placeholder="Téléphone"
                  autoComplete="off"
                  className="text-center bg-transparent w-[75%] m-3 border-b  rounded-md"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="text-center bg-transparent w-[75%] m-3 border-b  rounded-md"
                  required
                  autoComplete="off"
                />
              </div>
              <input
                type="hidden"
                name="_subject"
                value="Portfolio - Nouvel email"
              />
            </div>
            <textarea
              rows="4"
              cols="60"
              name="Message"
              placeholder="Votre message ici"
              className="text-center bg-transparent m-3 border-b text-white rounded-md max-w-[80%]"
              required
              autoComplete="off"
              id="lol"
            />

            <button
              type="submit"
              className="flex my-2 mx-auto items-center justify-center box-shadow1 w-40 h-fit py-2 px-4 bg-[#d8d5d5] rounded-[32px] gap-[12px]"
            >
              <span className="font-normal text-[20px] text-black">
                Envoyer →
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="cv.pdf"
          download="CV_jonathan_theron"
          className=" text-black box-shadow1 text-[25px] py-2 px-4 bg-[#EE7813] rounded-[32px]"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
};

export default Contact;
