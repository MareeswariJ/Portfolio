import { Fragment, useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "87797686-d2c1-4623-ba82-7deacf1662c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message sent successfully!"); 
      alert("Send Message successfully !")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("There was an error submitting the form."); // Display error toast
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <div className="input-box">
                <input type="text" name="fullname" placeholder="Fullname" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <input type="tel" name="phone" placeholder="Phone" required />
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <textarea name="message" cols="20" rows="10" placeholder="Your message" required></textarea>
            </div>
          </div>
          <div className="contact-btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <p>{result}</p>
    </Fragment>
  );
}
