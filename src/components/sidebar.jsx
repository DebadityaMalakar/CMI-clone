import { useLocation } from "@solidjs/router";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { href: "/", text: "Home" },
    { href: "#link2", text: "About" },
    { href: "#link3", text: "Services" },
    { href: "#link4", text: "Portfolio" },
    { href: "#link5", text: "Blog" },
    { href: "#link6", text: "Contact" },
    { href: "#link7", text: "FAQ" },
    { href: "#link8", text: "Testimonials" },
    { href: "#link9", text: "Careers" },
    { href: "#link10", text: "Events" },
    { href: "#link11", text: "Support" },
    { href: "#link12", text: "Partners" },
  ];

  return (
    <aside class="w-full md:w-[10%] bg-gray-200 p-4 flex-col">
      <nav class="flex-grow">
        <ul class="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                class={`block text-blue-600 hover:underline hover:text-blue-700 ${location.pathname === link.href ? "text-red-600 font-bold" : "text-black"}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div class="mt-4">
        <p class="font-bold text-lg text-brown">For CMI-ites</p>
        <a href="https://webmail.cmi.ac.in/" class="text-black hover:underline hover:text-blue-700">Email</a>
      </div>

      <div class="mt-4 border-t-4 border-red-700 pt-4">
        <ul class="space-y-2">
          <li><a class="text-black hover:underline hover:text-blue-700" href="http://www.google.com/custom?q=&sa=Google+Search&cof=S%3Ahttp%3A%2F%2Fwww.cmi.ac.in%2F%3BVLC%3Adarkred%3BAH%3Aleft%3BBGC%3Awhite%3BLH%3A75%3BLC%3Adarkgreen%3BGFNT%3Agrey%3BL%3Ahttp%3A%2F%2Fwww.cmi.ac.in%2Fpix%2Fcmi-header.png%3BALC%3Adarkgreen%3BLW%3A340%3BT%3Ablack%3BGIMP%3Abrown%3BAWFID%3A397b7bb0161c34a6%3B&domains=cmi.ac.in&sitesearch=cmi.ac.in">Google Search</a></li>
          <li><a class="text-black hover:underline hover:text-blue-700 tex-xs" href="https://www.cmi.ac.in/cacert.crt">CMI's CA Certificate</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
