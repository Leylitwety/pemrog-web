import NavbarAdmin from "./navbarAdmin";
import FooterAdmin from "./footerAdmin";
export default function Home({ children }) {
  return (
    <div id="wrapper">
      <NavbarAdmin />
      {children}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <FooterAdmin />
    </div>
  );
}
