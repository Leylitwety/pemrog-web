export default function Home() {
  return (
    <div>
      <footer className="footer-basic">
        <div className="social">
          <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
          <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">By Leyli Twety Eventari</p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
