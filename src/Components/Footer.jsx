import fb from '../assets/fb.png';
import linkedIn from '../assets/linkedIn.png'
import msg from '../assets/msg.png';
import twter from '../assets/twter.png';

const Footer = () => {
    return (
          <div className='bg-neutral w-full '>
            <footer className=" footer md:w-11/12 mx-auto space-y-4  grid md:grid-cols-5 text-neutral-content p-12 ">
                <nav className='pr-10'>
                    <h6 className="font-bold text-lg">CS — Ticket System</h6>
                    <a className="link link-hover text-[#a1a1aa]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a>
                    
                </nav>
                <nav >
                    <h6 className=" font-bold text-lg">Company</h6>
                    <a className="link link-hover text-[#a1a1aa]">About us</a>
                    <a className="link link-hover text-[#a1a1aa]">Our Mission</a>
                    <a className="link link-hover text-[#a1a1aa]">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Services</h6>
                    <a className="link link-hover text-[#a1a1aa]">Products & Services</a>
                    <a className="link link-hover text-[#a1a1aa]">Customer Stories</a>
                    <a className="link link-hover text-[#a1a1aa]"> Download Apps</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Information</h6>
                    <a className="link link-hover text-[#a1a1aa]">Privacy policy</a>
                    <a className="link link-hover text-[#a1a1aa]">Terms & Conditions</a>
                    <a className="link link-hover text-[#a1a1aa]">Join Us</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-lg">Social Links</h6>
                    <div className="flex justify-between items-center">
                        <img src={twter} alt="" />
                        <a className="link link-hover text-[#a1a1aa]">@CS — Ticket System</a>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={linkedIn} alt="" />
                        <a className="link link-hover text-[#a1a1aa]">@CS — Ticket System</a>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={fb} alt="" />
                        <a className="link link-hover text-[#a1a1aa]">@CS — Ticket System</a>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={msg} alt="" />
                        <a className="link link-hover text-[#a1a1aa]">support@cst.com</a>
                    </div>
                   
                </nav>
              
                
            </footer>
              <hr />
            <div className="footer sm:footer-horizontal footer-center bg-neutral text-white p-8">
                <aside>
                    <p>© 2025 CS — Ticket System. All rights reserved.</p>
                </aside>
            </div>
            
        </div>
    );
};

export default Footer;