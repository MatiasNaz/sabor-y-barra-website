import "./SignatureMenu.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import luzVerdeImage from "../../assets/images/drinks/luz-verde.jpg";
import canelaVerdeImage from "../../assets/images/drinks/Canela Verde.jpg";
import susurroImage from "../../assets/images/drinks/susurro.jpg";
import mentaDOroImage from "../../assets/images/drinks/menta-d-oro.jpg";
import monjeDePlataImage from "../../assets/images/drinks/monje-de-plata.jpg";
import rougeSoleilImage from "../../assets/images/drinks/rouge-soleil.jpg";
import laPerleBlancheImage from "../../assets/images/drinks/la-perle-blanche.jpg";
import arawakAmaroImage from "../../assets/images/drinks/arawak-amaro.jpg";
import mulaDoradaImage from "../../assets/images/drinks/mula-dorada.jpg";
import mulaDeLosAndesImage from "../../assets/images/drinks/mula-de-los-andes.jpg";
import solDeUvaImage from "../../assets/images/drinks/sol-de-uva.jpg";
import solDeCentenoImage from "../../assets/images/drinks/sol-de-centeno.jpg";
import medianocheImage from "../../assets/images/drinks/medianoche.jpg";
import solArdienteImage from "../../assets/images/drinks/sol-ardiente.jpg";
import sombraArdienteImage from "../../assets/images/drinks/sombra-ardiente.jpg";
import elGauchoRiquenoImage from "../../assets/images/drinks/El Gaucho Riqueño.jpg";

import { useTranslation } from "react-i18next";

function SignatureMenu() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section id="signature-menu" className="signature-menu__section">
        <main>
          <div className="menu__container">
            <div className="menu__content">
              {/* start of header container */}
              <div className="menu__header-container">
                <div className="menu__eyebrow">
                  {t("signatureMenu.eyebrow")}
                </div>
                <div className="menu__header">
                  <h4>{t("signatureMenu.intro")}</h4>
                </div>
              </div>
              {/* end of header container */}

              {/* start of menu cards */}
              <div className="menu__card-container">
                {/* 1: LUZ VERDE */}
                <div className="menu__card menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.luzVerde.name")}</h4>
                    <p>{t("signatureMenu.drinks.luzVerde.description")}</p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--luz-verde"
                      src={luzVerdeImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.luzVerde.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 2: CANELA VERDE */}
                <div className="menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--canela-verde"
                      src={canelaVerdeImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.canelaVerde.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.canelaVerde.name")}</h4>
                    <p>{t("signatureMenu.drinks.canelaVerde.description")}</p>
                  </div>
                </div>

                {/* 3: SUSURRO */}
                <div className="menu__card menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.susurro.name")}</h4>
                    <p>{t("signatureMenu.drinks.susurro.description")}</p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--susurro"
                      src={susurroImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.susurro.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 4: MENTA D'ORO */}
                <div className="menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--menta-d-oro"
                      src={mentaDOroImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.mentaDOro.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.mentaDOro.name")}</h4>
                    <p>{t("signatureMenu.drinks.mentaDOro.description")}</p>
                  </div>
                </div>

                {/* 5: MONIE DE PLATA */}
                <div className="menu__card menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.monjeDePlata.name")}</h4>
                    <p>{t("signatureMenu.drinks.monjeDePlata.description")}</p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--monje-de-plata"
                      src={monjeDePlataImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.monjeDePlata.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 6: ROUGE SOLEIL */}
                <div className="menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--rouge-soleil"
                      src={rougeSoleilImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.rougeSoleil.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.rougeSoleil.name")}</h4>
                    <p>{t("signatureMenu.drinks.rougeSoleil.description")}</p>
                  </div>
                </div>

                {/* 7: LA PERLE BLANCHE */}
                <div className="menu__card menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.laPerleBlanche.name")}</h4>
                    <p>
                      {t("signatureMenu.drinks.laPerleBlanche.description")}
                    </p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--la-perle-blanche"
                      src={laPerleBlancheImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.laPerleBlanche.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 8: ARAWAK AMARO */}
                <div className="menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--arawak-amaro"
                      src={arawakAmaroImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.arawakAmaro.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.arawakAmaro.name")}</h4>
                    <p>{t("signatureMenu.drinks.arawakAmaro.description")}</p>
                  </div>
                </div>

                {/* 9: MULA DORADA */}
                <div className="menu__card menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.mulaDorada.name")}</h4>
                    <p>{t("signatureMenu.drinks.mulaDorada.description")}</p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--mula-dorada"
                      src={mulaDoradaImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.mulaDorada.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 10: MULA DE LOS ANDES */}
                <div className="menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--mula-de-los-andes"
                      src={mulaDeLosAndesImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.mulaDeLosAndes.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.mulaDeLosAndes.name")}</h4>
                    <p>
                      {t("signatureMenu.drinks.mulaDeLosAndes.description")}
                    </p>
                  </div>
                </div>

                {/* 11: SOL DE UVA */}
                <div className="menu__card menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.solDeUva.name")}</h4>
                    <p>{t("signatureMenu.drinks.solDeUva.description")}</p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--sol-de-uva"
                      src={solDeUvaImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.solDeUva.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 12: SOL DE CENTENO */}
                <div className="menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--sol-de-centeno"
                      src={solDeCentenoImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.solDeCenteno.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.solDeCenteno.name")}</h4>
                    <p>{t("signatureMenu.drinks.solDeCenteno.description")}</p>
                  </div>
                </div>

                {/* 13: MEDIANOCHE */}
                <div className="menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.medianoche.name")}</h4>
                    <p>{t("signatureMenu.drinks.medianoche.description")}</p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--medianoche"
                      src={medianocheImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.medianoche.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 14: SOL ARDIENTE */}
                <div className="menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--sol-ardiente"
                      src={solArdienteImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.solArdiente.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.solArdiente.name")}</h4>
                    <p>{t("signatureMenu.drinks.solArdiente.description")}</p>
                  </div>
                </div>

                {/* 15: SOMBRA ARDIENTE */}
                <div className="menu__card-content-left-card">
                  <div className="menu__card-desc-left">
                    <h4>{t("signatureMenu.drinks.sombraArdiente.name")}</h4>
                    <p>
                      {t("signatureMenu.drinks.sombraArdiente.description")}
                    </p>
                  </div>
                  <div className="menu__card-img-left">
                    <img
                      className="menu__drink-image--sombra-ardiente"
                      src={sombraArdienteImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.sombraArdiente.name"),
                      })}
                    />
                  </div>
                </div>

                {/* 16: EL GAUCHO RIQUEÑO */}
                <div className="gaucho-last-card menu__card menu__card-content-right-card">
                  <div className="menu__card-img-right">
                    <img
                      className="menu__drink-image--el-gaucho-riqueno"
                      src={elGauchoRiquenoImage}
                      alt={t("signatureMenu.imageAlt", {
                        drink: t("signatureMenu.drinks.elGauchoRiqueno.name"),
                      })}
                    />
                  </div>
                  <div className="menu__card-desc-right">
                    <h4>{t("signatureMenu.drinks.elGauchoRiqueno.name")}</h4>
                    <p>
                      {t("signatureMenu.drinks.elGauchoRiqueno.description")}
                    </p>
                  </div>
                </div>
              </div>
              {/* end of menu cards */}
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default SignatureMenu;
