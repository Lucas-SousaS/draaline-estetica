import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-screen flex  bottom-[0%] justify-around gap-20 p-10">
      <div className="flex flex-col gap-4 text-xl">
        <div className="flex gap-4">
          <span>₢ 2025</span>
          <p>Privacy Policy</p>
        </div>

        <div>
          <p>Termos de Serviços</p>
        </div>
      </div>

      <div>
        <nav className="flex items-center justify-center gap-4 text-3xl">
          <FaInstagram className=" hover:text-[#EACDC3] cursor-pointer transition-all" />
          <FaFacebook className=" hover:text-[#EACDC3] cursor-pointer transition-all" />
          <FaLinkedin className=" hover:text-[#EACDC3] cursor-pointer transition-all" />
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
