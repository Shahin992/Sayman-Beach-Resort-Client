
const Footer = () => {
    return (
        <div>
            <footer className="footer p-4 md:p-10 bg-[#2a2b33] text-white ">
                <div>
                <div className="flex flex-col justify-center items-center">
                <img className="h-14 w-14 " src="https://i.ibb.co/fCPFdn9/sayeman-beach-resort-logo-final.png" alt="" />
    <p className="text-2xl font-bold">Sayeman Beach Resort</p>
                </div>
                </div>
               
<div className="flex justify-between gap-20">  
<nav className="flex flex-col">
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="flex flex-col"> 
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> </div>
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
            
        </div>
    );
};

export default Footer;