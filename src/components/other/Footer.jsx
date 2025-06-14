import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-white/70 py-6 border-t border-white/10 text-sm bg-transparent backdrop-blur-sm">
      <p className="mb-1">
        © {new Date().getFullYear()} <span className="text-white font-medium">Employee Management System</span> — Built with ❤️ by <span className="text-white font-semibold">Paxto</span>
      </p>
      <p className="mt-1">
        📧 <a href="mailto:hafizwaseemahmed2002@gmail.com" className="text-blue-400 hover:underline">hafizwaseemahmed2002@gmail.com</a> &nbsp; | &nbsp;
        📞 <a href="tel:+923412011877" className="text-blue-400 hover:underline">+92-341-2011877</a>
      </p>
    </footer>
  );
};

export default Footer;
