'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from 'lucide-react';
import Image from 'next/image';

const machines = [
  {
    name: 'Pelle sur chenilles',
    category: 'Terrassement',
    description:
      'Pour les travaux de fouille, de terrassement et de préparation de terrain.',
    image: 'photo-1580901368919-7738efb0f87e',
    tag: 'Terrassement',
  },
  {
    name: 'Chargeuse',
    category: 'Manutention',
    description:
      'Une solution polyvalente pour déplacer et charger les matériaux du chantier.',
    image: 'photo-1579412690850-bd41cd0af397',
    tag: 'Manutention',
  },
  {
    name: 'Camion benne',
    category: 'Transport',
    description:
      'Le transport de vos matériaux et déblais, au rythme de votre chantier.',
    image: 'photo-1519003722824-194d4455a60c',
    tag: 'Transport',
  },
  {
    name: 'Niveleuse',
    category: 'Terrassement',
    description:
      'Pour le nivellement et la finition de vos plateformes et voies d’accès.',
    image: 'photo-1504307651254-35680f356dfd',
    tag: 'Terrassement',
  },
  {
    name: 'Chariot télescopique',
    category: 'Manutention',
    description:
      'La manutention en hauteur pour les opérations qui demandent précision.',
    image: 'photo-1581092160562-40aa08e78837',
    tag: 'Manutention',
  },
  {
    name: 'Bulldozer',
    category: 'Terrassement',
    description:
      'Un appui solide pour le déplacement de terre et les travaux de grande ampleur.',
    image: 'photo-1504917595217-d4dc5ebe6122',
    tag: 'Terrassement',
  },
];
const categories = [
  {
    number: '01',
    title: 'Terrassement',
    text: 'Préparez, creusez et façonnez vos terrains avec des équipements adaptés.',
    image: 'photo-1580901368919-7738efb0f87e',
  },
  {
    number: '02',
    title: 'Transport',
    text: 'Déplacez matériaux et déblais avec un partenaire logistique de confiance.',
    image: 'photo-1519003722824-194d4455a60c',
  },
  {
    number: '03',
    title: 'Manutention',
    text: 'Optimisez le déplacement et la mise en place de vos charges.',
    image: 'photo-1579412690850-bd41cd0af397',
  },
  {
    number: '04',
    title: 'Solutions chantier',
    text: 'Un accompagnement qui s’adapte aux réalités de votre projet.',
    image: 'photo-1504307651254-35680f356dfd',
  },
];
const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Delta Service, accueil">
        {/* <span className="brand-mark"> */}
        <Image
          src="/logo.webp"
          alt="Logo"
          width={150}
          height={50}
          className=""
        />
        {/* </span> */}
        {/* <span className="brand-name">
          DELTA<span>SERVICE</span>
          <small>NIAMEY · NIGER</small>
        </span> */}
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        <a onClick={() => setOpen(false)} href="#expertise">
          Nos expertises
        </a>
        <a onClick={() => setOpen(false)} href="#parc">
          Nos engins
        </a>
        <a onClick={() => setOpen(false)} href="#engagements">
          Nos engagements
        </a>
        <a onClick={() => setOpen(false)} href="#contact">
          Contact
        </a>
        <a className="nav-cta" onClick={() => setOpen(false)} href="#devis">
          Demander un devis <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function QuoteForm() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [equipment, setEquipment] = useState('');
  const [sent, setSent] = useState(false);
  const filtered = machines.filter((m) => !category || m.category === category);
  return (
    <div className="quote-card" id="devis">
      <div className="quote-top">
        <div>
          <span className="eyebrow">DEMANDE DE DEVIS</span>
          <h3>Parlons de votre chantier.</h3>
        </div>
        <span className="step-counter">
          0{step} <i>/ 05</i>
        </span>
      </div>
      {sent ? (
        <div className="success-state">
          <span className="success-icon">
            <Check />
          </span>
          <h3>Votre demande est prête.</h3>
          <p>
            Merci. Notre équipe Delta Service prendra contact avec vous pour
            étudier votre besoin.
          </p>
          <button
            className="text-link"
            onClick={() => {
              setSent(false);
              setStep(1);
            }}
          >
            Faire une nouvelle demande <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <>
          <div className="progress-track">
            <span style={{ width: `${step * 20}%` }} />
          </div>
          <div className="form-body">
            {step === 1 && (
              <>
                <label className="field-label">
                  De quel type d’engin avez-vous besoin ?
                </label>
                <div className="choice-grid">
                  {['Terrassement', 'Transport', 'Manutention'].map((item) => (
                    <button
                      key={item}
                      className={
                        category === item ? 'choice selected' : 'choice'
                      }
                      onClick={() => {
                        setCategory(item);
                        setEquipment('');
                      }}
                    >
                      {item}
                      <span>
                        {category === item ? (
                          <Check size={16} />
                        ) : (
                          <ArrowUpRight size={16} />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <label className="field-label">
                  Quel équipement souhaitez-vous ?
                </label>
                <div className="equipment-options">
                  {filtered.map((m) => (
                    <button
                      key={m.name}
                      className={
                        equipment === m.name
                          ? 'equipment-option selected'
                          : 'equipment-option'
                      }
                      onClick={() => setEquipment(m.name)}
                    >
                      <img src={photo(m.image, 160)} alt="" />
                      <span>{m.name}</span>
                      {equipment === m.name && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 3 && (
              <div className="input-stack">
                <label>
                  Lieu du chantier
                  <input placeholder="Ex. Niamey, quartier…" />
                </label>
                <div className="input-row">
                  <label>
                    Date souhaitée
                    <input type="date" />
                  </label>
                  <label>
                    Durée estimée
                    <select defaultValue="">
                      <option value="" disabled>
                        À préciser
                      </option>
                      <option>Quelques jours</option>
                      <option>1 à 2 semaines</option>
                      <option>Plus de 2 semaines</option>
                      <option>À définir ensemble</option>
                    </select>
                  </label>
                </div>
                <label>
                  Parlez-nous de votre besoin
                  <textarea
                    placeholder="Nature des travaux, contraintes particulières…"
                    rows={3}
                  />
                </label>
              </div>
            )}
            {step === 4 && (
              <div className="input-stack">
                <p className="form-hint">
                  Comment pouvons-nous vous recontacter ?
                </p>
                <div className="input-row">
                  <label>
                    Nom et prénom
                    <input placeholder="Votre nom" autoComplete="name" />
                  </label>
                  <label>
                    Entreprise <span className="optional">OPTIONNEL</span>
                    <input placeholder="Nom de l’entreprise" />
                  </label>
                </div>
                <div className="input-row">
                  <label>
                    Téléphone
                    <input placeholder="+227 …" type="tel" autoComplete="tel" />
                  </label>
                  <label>
                    Email
                    <input
                      placeholder="vous@exemple.com"
                      type="email"
                      autoComplete="email"
                    />
                  </label>
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="review">
                <span className="review-label">VOTRE DEMANDE</span>
                <div>
                  <span>Catégorie</span>
                  <strong>{category || 'À préciser'}</strong>
                </div>
                <div>
                  <span>Équipement</span>
                  <strong>{equipment || 'À préciser'}</strong>
                </div>
                <div>
                  <span>Chantier & coordonnées</span>
                  <strong>Renseignés dans les étapes précédentes</strong>
                </div>
                <p>
                  Cette demande n’est pas une réservation. L’équipe Delta
                  Service vous recontactera pour préciser votre besoin et
                  établir un devis.
                </p>
              </div>
            )}
          </div>
          <div className="form-actions">
            {step > 1 && (
              <button className="back-btn" onClick={() => setStep(step - 1)}>
                <ChevronLeft size={17} /> Retour
              </button>
            )}
            <button
              className="form-next"
              onClick={() => (step < 5 ? setStep(step + 1) : setSent(true))}
            >
              {step === 5 ? 'Envoyer ma demande' : 'Continuer'}{' '}
              <ChevronRight size={17} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function DeltaSite() {
  const [filter, setFilter] = useState('Tous les engins');
  const [showAll, setShowAll] = useState(false);
  const filters = [
    'Tous les engins',
    'Terrassement',
    'Transport',
    'Manutention',
  ];
  const shown = machines
    .filter((m) => filter === 'Tous les engins' || m.category === filter)
    .slice(0, showAll ? 6 : 4);
  return (
    <main>
      <section className="hero" id="accueil">
        <div className="hero-image" />
        <Header />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span /> AU SERVICE DE VOS PROJETS DEPUIS NIAMEY
            </div>
            <h1>
              VOS CHANTIERS
              <br />
              MÉRITENT LES
              <br />
              <span>MEILLEURS ENGINS.</span>
            </h1>
            <p>
              Location d’engins de chantier, transport et solutions logistiques
              pour accompagner vos projets en toute confiance.
            </p>
            <div className="hero-actions">
              <a className="button-yellow" href="#parc">
                Explorer nos engins <ArrowRight size={17} />
              </a>
              <a className="button-ghost" href="#devis">
                Demander un devis <ArrowUpRight size={16} />
              </a>
            </div>
            <span className="hero-motto">
              « Votre mission, notre passion. »
            </span>
          </div>
          <div className="hero-aside">
            <span className="aside-line" />
            <span>
              CONSTRUIRE
              <br />
              AVEC CONFIANCE
            </span>
            <span className="aside-index">01 — 04</span>
          </div>
        </div>
        {/* <a className="scroll-cue" href="#intro">
          <span>FAITES DÉFILER</span>
          <ArrowDown size={14} />
        </a> */}
        <div className="hero-bottom">
          <span>NIAMEY, NIGER</span>
          <span>ENGINS · TRANSPORT · LOGISTIQUE</span>
          <span>13°30′N 2°07′E</span>
        </div>
      </section>
      <section className="intro section-pad" id="intro">
        <div className="intro-index">
          <span>01 / QUI NOUS SOMMES</span>
          {/* <div className="intro-symbol">Δ</div> */}
          <Image
            src="/logo.webp"
            alt="Logo"
            width={250}
            height={150}
            className=""
          />
        </div>
        <div className="intro-copy">
          <span className="eyebrow">UN PARTENAIRE DE TERRAIN</span>
          <h2>
            Bien plus qu’une location,
            <br />
            <span>un partenaire de confiance.</span>
          </h2>
          <p>
            Delta Service accompagne les professionnels du BTP, les entreprises
            et les particuliers dans leurs projets. De la préparation du terrain
            au transport des matériaux, nous mettons les bons équipements et les
            bonnes solutions au service de votre chantier.
          </p>
          <a href="#engagements" className="text-link">
            En savoir plus sur notre approche <ArrowRight size={16} />
          </a>
        </div>
        <div className="intro-note">
          <span className="note-rule" />
          <p>
            DU PREMIER ÉCHANGE
            <br />À LA FIN DU CHANTIER
          </p>
        </div>
      </section>
      <section className="expertise section-pad" id="expertise">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CE QUE NOUS FAISONS</span>
            <h2>
              Un chantier, plusieurs besoins.
              <br />
              <span>Trouvez le bon engin.</span>
            </h2>
          </div>
          <p>
            Des solutions pensées pour avancer sur le terrain, avec un
            interlocuteur qui comprend vos enjeux.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <a className="category-card" href="#parc" key={c.title}>
              <img
                src={photo(c.image, 760)}
                alt={`Engin de chantier pour ${c.title.toLowerCase()}`}
                loading="lazy"
              />
              <div className="category-shade" />
              <span className="category-number">{c.number} / SERVICE</span>
              <div className="category-info">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="category-link">
                  Découvrir les engins <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="fleet section-pad" id="parc">
        <div className="fleet-heading">
          <div>
            <span className="eyebrow">LE PARC DELTA SERVICE</span>
            <h2>
              Des équipements adaptés
              <br />
              <span>à vos ambitions.</span>
            </h2>
          </div>
          <p>
            Une sélection d’engins pour les besoins de vos projets.
            Contactez-nous pour préciser votre demande.
          </p>
        </div>
        <div
          className="filter-row"
          role="group"
          aria-label="Filtrer les engins"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? 'filter active' : 'filter'}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="machine-grid">
          {shown.map((m, i) => (
            <article className="machine-card" key={m.name}>
              <a href="#devis" className="machine-image">
                <img src={photo(m.image, 760)} alt={m.name} loading="lazy" />
                <span className="machine-num">DS — 0{i + 1}</span>
                <span className="machine-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <div className="machine-info">
                <span className="machine-category">{m.tag}</span>
                <h3>{m.name}</h3>
                <p>{m.description}</p>
                <a className="machine-cta" href="#devis">
                  Demander un devis <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-note">
          Les équipements présentés sont des exemples de démonstration. Le parc
          réel et les disponibilités sont à confirmer auprès de Delta Service.
        </p>
        <div className="fleet-more">
          <button className="text-link" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Voir moins' : 'Voir tous les engins'}{' '}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
      <section className="steps-section section-pad">
        <div className="steps-heading">
          <span className="eyebrow">SIMPLE, CLAIR, EFFICACE</span>
          <h2>
            Louez votre engin
            <br />
            <span>en 4 étapes simples.</span>
          </h2>
        </div>
        <div className="steps-grid">
          {[
            {
              n: '01',
              t: 'Parlez-nous du projet',
              d: 'Partagez la nature de vos travaux et vos besoins.',
            },
            {
              n: '02',
              t: 'Choisissez votre engin',
              d: 'Nous vous orientons vers la solution adaptée.',
            },
            {
              n: '03',
              t: 'Recevez votre devis',
              d: 'Nous étudions votre demande et revenons vers vous.',
            },
            {
              n: '04',
              t: 'Place au chantier',
              d: 'Les modalités sont définies avec notre équipe.',
            },
          ].map((s, i) => (
            <div className="step-item" key={s.n}>
              <div className="step-top">
                <span>{s.n}</span>
                {i < 3 && <span className="step-dash" />}
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="commitments section-pad" id="engagements">
        <div className="commitment-intro">
          <span className="eyebrow">L’ESPRIT DELTA SERVICE</span>
          <h2>
            Nos engagements,
            <br />
            <span>votre tranquillité.</span>
          </h2>
          <p>
            Sur un chantier, chaque détail compte. Notre engagement : vous
            accompagner avec sérieux, proximité et transparence.
          </p>
        </div>
        <div className="commitment-grid">
          {[
            {
              icon: <ShieldCheck />,
              t: 'La confiance avant tout',
              d: 'Un échange direct et transparent à chaque étape.',
            },
            {
              icon: <Wrench />,
              t: 'Des équipements adaptés',
              d: 'Des solutions pensées pour vos besoins réels.',
            },
            {
              icon: <Truck />,
              t: 'Un partenaire de proximité',
              d: 'Une équipe implantée à Niamey, proche du terrain.',
            },
            {
              icon: <HardHat />,
              t: 'La sécurité en priorité',
              d: 'Une attention constante portée aux enjeux du chantier.',
            },
            {
              icon: <Check />,
              t: 'Un accompagnement humain',
              d: 'Des interlocuteurs à l’écoute de votre projet.',
            },
            {
              icon: <ArrowRight />,
              t: 'La parole tenue',
              d: 'Des engagements clairs, définis ensemble.',
            },
          ].map((a) => (
            <div className="commitment" key={a.t}>
              <span className="commitment-icon">{a.icon}</span>
              <div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="quote-section section-pad" id="contact">
        <div className="quote-photo" />
        <div className="quote-overlay" />
        <div className="quote-content">
          <div className="quote-left">
            <span className="eyebrow">PARLONS DE VOTRE PROJET</span>
            <h2>
              Votre prochain
              <br />
              chantier commence
              <br />
              <span>ici.</span>
            </h2>
            <p>
              Faites confiance à Delta Service pour vos besoins en équipements
              et solutions logistiques.
            </p>
            <a className="phone-line" href="tel:+22792195019">
              <Phone size={17} /> +227 92 19 50 19 <ArrowUpRight size={15} />
            </a>
            <span className="quote-caption">
              CITÉ DES PROGRÈS · NIAMEY, NIGER
            </span>
          </div>
          <QuoteForm />
        </div>
      </section>
      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#accueil">
            {/* <span className="brand-mark">
              <span>Δ</span>
            </span>
            <span className="brand-name">
              DELTA<span>SERVICE</span>
              <small>NIAMEY · NIGER</small>
            </span> */}
            <Image
              src="/logo.webp"
              alt="Logo"
              width={150}
              height={50}
              className=""
            />
          </a>
          <p className="footer-promise">
            Votre mission,
            <br />
            <em>notre passion.</em>
          </p>
          <div className="footer-col">
            <span className="footer-label">NAVIGATION</span>
            <a href="#expertise">Nos expertises</a>
            <a href="#parc">Nos engins</a>
            <a href="#engagements">Nos engagements</a>
          </div>
          <div className="footer-col">
            <span className="footer-label">CONTACT</span>
            <a href="tel:+22792195019">+227 92 19 50 19</a>
            <a href="tel:+22798060626">+227 98 06 06 26</a>
            <a href="mailto:contact@deltaserviceniger.com">
              contact@deltaserviceniger.com
            </a>
          </div>
          <div className="footer-col">
            <span className="footer-label">NOUS TROUVER</span>
            <span>Cité des progrès</span>
            <span>Niamey, Niger</span>
            <a className="footer-cta" href="#devis">
              Demander un devis <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} DELTA SERVICE. TOUS DROITS RÉSERVÉS.
          </span>
          <span>CONSTRUIRE AVEC CONFIANCE.</span>
          <a href="#accueil">RETOUR EN HAUT ↑</a>
        </div>
      </footer>
    </main>
  );
}
