import data from "./data.json";

const Footer = () => (
  <footer className="py-10 text-sm text-center text-gray-400">
    {data.footer.text}
  </footer>
);

export default Footer;
