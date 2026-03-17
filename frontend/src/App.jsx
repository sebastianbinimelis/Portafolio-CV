const profile = {
  name: "Sebastián Binimelis Durán",
  title: "Ingeniero Civil Industrial | Data Analyst | Data Science",
  summary:
    "Ingeniero Civil Industrial con mas de 10 anos de experiencia en gestion de operaciones, logistica y proyectos. Especializado en analisis de datos y recientemente certificado en Data Science, con manejo de Python, SQL y herramientas de visualizacion para convertir informacion en decisiones.",
  phone: "(+56 9) 98746621",
  email: "se.binimelis@gmail.com",
  address: "Cerro Melosas Oriente #2815, Puente Alto",
};

const technicalSkills = [
  {
    category: "Analisis de Datos",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "SQL",
      "Analisis exploratorio",
    ],
  },
  {
    category: "Visualizacion",
    items: ["Power BI", "Tableau", "Excel Avanzado", "Storytelling con datos"],
  },
  {
    category: "Gestion y Procesos",
    items: ["SAP", "Quickbase", "Bizagi", "Control de KPI", "Mejora de procesos"],
  },
  {
    category: "Machine Learning",
    items: [
      "Modelos supervisados",
      "Clasificacion",
      "Evaluacion de modelos",
      "Redes neuronales",
    ],
  },
];

const experience = [
  {
    role: "Ingeniero Logistica y Mantenimiento",
    company: "IN GROUPE (IDEMIA)",
    period: "Feb 2024 - Mar 2026",
    bullets: [
      "Gestion y seguimiento del mantenimiento de equipamiento bajo contrato SLA con oficinas regionales y MINREL.",
      "Coordinacion de proveedores para habilitacion de nuevas estaciones y cumplimiento de plazos operativos.",
      "Control y analisis de inventario para asegurar disponibilidad de equipos e insumos.",
      "Gestion de abastecimiento a nivel nacional en coordinacion con operador logistico.",
      "Seguimiento y resolucion de tickets asociados a mantenimiento de equipos.",
      "Generacion de formularios y documentacion de respaldo para procesos de pago a proveedores.",
      "Apoyo en cotizacion y evaluacion de proveedores para licitaciones.",
    ],
  },
  {
    role: "Planner Despliegue Fibra Optica | Planificacion",
    company: "Telefonica",
    period: "Abr 2021 - Nov 2023",
    bullets: [
      "Planificacion y control de proyectos de implementacion de fibra optica.",
      "Coordinacion de materiales y movimientos logisticos para habilitacion de infraestructura.",
      "Seguimiento de avances del proyecto y coordinacion con empresas colaboradoras.",
      "Elaboracion de propuestas de diseno y planificacion de despliegue de red.",
      "Gestion de informacion y control de proyectos utilizando Quickbase, Excel, Power BI y SAP.",
    ],
  },
  {
    role: "Coordinador de Gestion Gerencia Comercial",
    company: "PYG",
    period: "May 2020 - Ene 2021",
    bullets: [
      "Elaboracion de reportes comerciales periodicos y analisis de indicadores utilizando Excel.",
      "Gestion y control de cargas horarias del personal mediante Quickbase.",
      "Seguimiento de KPI comerciales y apoyo en control de desempeno de equipos regionales.",
      "Coordinacion de lineamientos operativos con jefaturas zonales.",
      "Gestion y carga de promociones para canales comerciales y mercaderistas.",
    ],
  },
  {
    role: "Product Manager Mercados Internacionales | Gerencia Comercial",
    company: "Audiomusica",
    period: "Ago 2017 - Mar 2020",
    bullets: [
      "Liderazgo de equipo de ventas para mercados internacionales.",
      "Analisis de compras, ventas e inventario para planificacion comercial.",
      "Elaboracion de forecast mensual y anual utilizando Excel.",
      "Seguimiento de KPI comerciales asociados a ventas, margen e inventario.",
      "Desarrollo de planes de accion para posicionamiento de marcas y productos.",
      "Coordinacion de visitas comerciales y participacion en eventos internacionales.",
    ],
  },
  {
    role: "Ingeniero Proyecto Implementacion SAP",
    company: "Tigre Chile SA",
    period: "Ene 2014 - Jul 2017",
    bullets: [
      "Levantamiento de informacion y preparacion de planillas de carga para modulos SAP FI, PP y QM.",
      "Analisis y definicion de procesos criticos para implementacion del sistema.",
      "Participacion en pruebas de implementacion en casa matriz en Joinville, Brasil.",
      "Capacitacion a equipos internos en uso del modulo SAP FI.",
      "Soporte en el proceso de puesta en marcha de SAP en Chile.",
    ],
  },
];

const education = [
  {
    title: "Bootcamp Data Science / Data Analytics",
    institution: "Desafio Latam",
    detail:
      "Python, SQL, Machine Learning, analisis y visualizacion de datos. Certificacion obtenida en 2026.",
  },
  {
    title: "Ingenieria Civil Industrial",
    institution: "Universidad Andres Bello",
    detail: "Titulado con distincion en 2014.",
  },
  {
    title: "Educacion Media",
    institution: "Colegio Altazor",
    detail: "2002 - 2008.",
  },
  {
    title: "Educacion Basica",
    institution: "Colegio Los Aromos",
    detail: "1996 - 2001.",
  },
];

const strengths = [
  "Analisis exploratorio y visualizacion de datos con Python.",
  "Desarrollo y entrenamiento de modelos de Machine Learning supervisado.",
  "Implementacion y evaluacion de redes neuronales para clasificacion.",
  "Generacion de insights para apoyar decisiones y optimizacion de procesos.",
];

function App() {
  return (
    <div className="app-shell">
      <div className="background-grid" aria-hidden="true" />

      <header className="hero-section">
        <nav className="nav">
          <a className="nav-brand" href="#top">
            SB
          </a>
          <div className="nav-links">
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#skills">Skills</a>
            <a href="#educacion">Educacion</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <section className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Curriculum Vitae Digital</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button-primary" href="#experiencia">
                Ver experiencia
              </a>
              <a className="button-secondary" href="#contacto">
                Datos de contacto
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">Enfoque profesional</p>
            <ul className="signal-list">
              <li>10+ anos en operaciones, logistica y gestion de proyectos</li>
              <li>Transicion consolidada hacia Data Analytics y Data Science</li>
              <li>Experiencia combinando negocio, procesos y tecnologia</li>
              <li>Capacidad para traducir datos en decisiones accionables</li>
            </ul>
          </aside>
        </section>
      </header>

      <main className="main-layout">
        <section className="card wide" id="perfil">
          <div className="section-heading">
            <p className="section-kicker">Perfil</p>
            <h2>Resumen ejecutivo</h2>
          </div>
          <p className="body-copy">{profile.summary}</p>
        </section>

        <section className="card" id="contacto">
          <div className="section-heading">
            <p className="section-kicker">Contacto</p>
            <h2>Informacion base</h2>
          </div>
          <div className="contact-grid">
            <div>
              <span className="contact-label">Celular</span>
              <p>{profile.phone}</p>
            </div>
            <div>
              <span className="contact-label">Correo</span>
              <p>{profile.email}</p>
            </div>
            <div>
              <span className="contact-label">Direccion</span>
              <p>{profile.address}</p>
            </div>
          </div>
        </section>

        <section className="card" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Capacidades tecnicas</h2>
          </div>
          <div className="skills-grid">
            {technicalSkills.map((skill) => (
              <article className="skill-block" key={skill.category}>
                <h3>{skill.category}</h3>
                <div className="chip-row">
                  {skill.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card wide" id="experiencia">
          <div className="section-heading">
            <p className="section-kicker">Experiencia</p>
            <h2>Trayectoria profesional</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="bullet-list">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="section-heading">
            <p className="section-kicker">Data</p>
            <h2>Foco analitico</h2>
          </div>
          <ul className="bullet-list compact">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card" id="educacion">
          <div className="section-heading">
            <p className="section-kicker">Educacion</p>
            <h2>Formacion y especializacion</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={`${item.title}-${item.institution}`}>
                <h3>{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
