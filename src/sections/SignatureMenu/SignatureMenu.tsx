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
            <div className="menu__content">
              <div className="menu__header-container">
                <div className="menu__eyebrow">our signature menu</div>
                <div className="menu__header">
                  <h4>
                    Cocktails made with house-made syrups and fresh ingredients.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default SignatureMenu;
