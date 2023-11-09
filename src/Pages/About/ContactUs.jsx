import Swal from "sweetalert2";

const ContactUs = () => {
     const contact = () => {
        Swal.fire("Thanks!", "we will get you soon!", "success");
     }
    return (
      <div>
        
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Get in Touch with Us
          </h3>
          <p className="md:w-3/4 mb-8 text-center text-2xl md:text-2xl font-semibold">
            Feel free to reach out to us with any questions, inquiries, or
            requests. We're here to assist you and make your event planning
            experience exceptional
          </p>
        </div>
        <div className="">
          <div className="my-6  flex flex-col gap-6 items-center justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="text-3xl font-semibold input input-bordered input-xs h-[72px] w-3/4 md:w-1/2"
            />
            <input
              type="text"
              placeholder="Your email"
              className="text-3xl font-semibold input input-bordered input-sm h-[72px] w-3/4 md:w-1/2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="text-3xl font-semibold input input-bordered input-sm h-[72px] w-3/4 md:w-1/2"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="text-3xl font-semibold input input-bordered input-lg h-[162px] w-3/4 md:w-1/2"
            />
            <button onClick={contact} className="btn btn-accent text-white text-2xl w-3/4 md:w-1/2">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;