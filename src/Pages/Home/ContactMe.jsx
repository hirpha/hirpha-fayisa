// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// export default function ContactMe() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
// .sendForm(
//   "service_t4pv7qb",
//   "template_7x2j8qh",
//   form.current,
//   "mLEklz_EgN18Rwu7a"
// )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           alert("Failed to send message, please try again.");
//         }
//       );
//   };

//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           Reach out for inquiries or collaborations—I’d be glad to discuss how I
//           can help with your project!
//         </p>
//       </div>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="contact--form--container"
//       >
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
// <label htmlFor="last-name" className="contact--label">
//   <span className="text-md">Last Name</span>
//   <input
//     type="text"
//     className="contact--input text-md"
//     name="last-name"
//     id="last-name"
//     required
//   />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">Phone Number</span>
//             <input
//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="choose-topic" className="contact--label">
//           <span className="text-md">Choose a Topic</span>
//           <select
//             id="choose-topic"
//             name="topic"
//             className="contact--input text-md"
//             required
//           >
//             <option value="">Select One...</option>
//             <option value="Application Development">
//               Application Development
//             </option>
//             <option value="Backend">Backend</option>
//             <option value="Website Development">Website Development</option>
//             <option value="UI/UX Design">UI/UX Design</option>
//           </select>
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             name="message"
//             rows="8"
//             placeholder="Type your message..."
//             required
//           />
//         </label>
//         <label htmlFor="checkbox" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button type="submit" className="btn btn-primary contact--form--btn">
//             Submit
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t4pv7qb",
        "template_7x2j8qh",
        form.current,
        "mLEklz_EgN18Rwu7a"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Reach out for inquiries or collaborations—I’d be glad to discuss how I
          can help with your project!
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_name" // Maps to {{from_name}}
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />{" "}
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email" // Maps to {{from_email}}
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone_number" // Maps to {{phone_number}}
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input text-md"
            required
          >
            <option value="">Select One...</option>
            <option value="Application Development">
              Application Development
            </option>
            <option value="Backend">Backend</option>
            <option value="Website Development">Website Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message" // Maps to {{message}}
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
