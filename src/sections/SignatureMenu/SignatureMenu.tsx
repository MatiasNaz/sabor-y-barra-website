import "./SignatureMenu.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function SignatureMenu() {
  return (
    <>
      <Header />
      <section id="signature-menu" className="signature-menu__section">
        <main>
          <div className="menu__container">
            <div className="menu__content"></div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default SignatureMenu;
