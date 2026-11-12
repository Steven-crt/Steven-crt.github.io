/**
 * Steven Saman Casas - Portafolio Profesional
 * JavaScript Interactivo: Filtros, Modal de Proyectos, Animaciones y WhatsApp
 */

// Base de Datos de Proyectos Detallados
const proyectosData = {
    "sifem": {
        title: "SIFEM — Suite de Facturación Electrónica Multi-País",
        category: "Facturación & SUNAT",
        badge: "SUNAT / DIAN",
        image: "img/proyectos/facturacion_sifem.png",
        shortDesc: "Suite integral para emitir, validar, firmar digitalmente y enviar comprobantes electrónicos (facturas, boletas, notas y guías de remisión) con arquitectura multi-empresa.",
        longDesc: "Plataforma empresarial de alto rendimiento diseñada bajo arquitectura modular para gestionar el ciclo completo de facturación electrónica conforme a la normativa SUNAT. Integra generación y firma de XML, validación de CDRs, control de series y correlativos por sucursal, y paneles analíticos en tiempo real.",
        features: [
            "Firma digital y generación de XML bajo estándares UBL 2.1",
            "Emisión masiva de Facturas, Boletas, Notas de Crédito y Débito",
            "Dashboard analítico con KPIs de ventas y recaudación (Recharts)",
            "Documentación interactiva de endpoints con Swagger",
            "Autenticación segura basada en tokens JWT y roles",
            "Generación automatizada de representaciones impresas en PDF con QR"
        ],
        stack: ["NestJS", "Prisma ORM", "React", "TypeScript", "TailwindCSS", "MySQL", "Docker", "Swagger"]
    },
    "vetcare-mobile": {
        title: "VetCare Pro — App Móvil & Web Veterinaria",
        category: "App Móvil & Cloud",
        badge: "Mobile & Web",
        image: "img/proyectos/WhatsApp Image 2026-01-29 at 5.03.49 PM.jpeg",
        shortDesc: "Aplicación móvil multiplataforma (Android/iOS) y panel de control web para clínicas veterinarias con gestión de historias clínicas y citas.",
        longDesc: "Ecosistema móvil completo desarrollado con React Native y Expo para médicos veterinarios y recepcionistas. Permite registrar diagnósticos, monitorear constantes vitales de mascotas, programar citas médicas sin colisiones de horario y automatizar avisos a clientes por WhatsApp.",
        features: [
            "Historias clínicas digitales completas (anamnesis, peso, temperatura, vacunas)",
            "Agenda médica con detección de cruces de turnos y salas",
            "Recordatorios automatizados de citas y refuerzos vía WhatsApp",
            "Control de inventario de fármacos, insumos y alimentos",
            "Módulo de quirófano, hospitalización y fichas de propietarios",
            "Soporte multiplataforma Android, iOS y versión Web"
        ],
        stack: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MySQL", "REST API"]
    },
    "auditcheck-gastronomia": {
        title: "AuditCheck Pro — Auditorías de Calidad Gastronómica",
        category: "Auditorías & Calidad",
        badge: "HACCP / BPM",
        image: "img/proyectos/auditcheck_gastronomia.png",
        shortDesc: "Sistema de control de calidad e inspecciones sanitarias en tiempo real para cadenas de restaurantes, fast food y catering.",
        longDesc: "Solución tecnológica para auditores y administradores de alimentos que agiliza las evaluaciones sanitarias según normas DIGESA y BPM. Automatiza el levantamiento de no-conformidades con evidencias fotográficas y firmas digitales in situ.",
        features: [
            "Checklists dinámicos parametrizables según áreas de cocina y salón",
            "Cálculo automático de porcentajes de cumplimiento sanitario",
            "Generación instantánea de actas de auditoría oficiales en PDF",
            "Registro de evidencias fotográficas por cada punto evaluado",
            "Firma digital del auditor y del encargado del establecimiento",
            "Historial comparativo de evolución de higiene y calidad"
        ],
        stack: ["React", "Vite", "Node.js", "Express", "MySQL", "PDF Generator", "CSS3"]
    },
    "auditcheck-consumo": {
        title: "AuditCheck Pro — Control Operativo de Consumo Masivo",
        category: "ERP & Operaciones",
        badge: "Calidad Industrial",
        image: "img/proyectos/auditcheck_consumo.png",
        shortDesc: "Plataforma de auditorías operativas, control de mermas y trazabilidad de materia prima para empresas de distribución y consumo.",
        longDesc: "Diseñado para industrias y distribuidoras masivas que necesitan auditar almacenes centrales, cadenas de frío y cumplimiento de protocolos operativos con métricas en tiempo real.",
        features: [
            "Monitoreo de mermas y control de recepción de proveedores",
            "Trazabilidad de lotes con fechas de vencimiento críticas",
            "Dashboards de rendimiento por sucursal y centro logístico",
            "Exportación de reportes ejecutivos en formato Excel y PDF",
            "Alertas automáticas de desviaciones de calidad",
            "Gestión multi-usuario con perfiles de auditor y supervisor"
        ],
        stack: ["React", "TypeScript", "Node.js", "MySQL", "Chart.js", "Bootstrap"]
    },
    "crm-condominio": {
        title: "ERP Smart Condominio 360",
        category: "ERP & Gestión Inmobiliaria",
        badge: "Inmobiliaria & Finanzas",
        image: "img/proyectos/crm_condominio.png",
        shortDesc: "Plataforma integral para administración de edificios, residenciales y condominios con cobranza automatizada y control de visitas.",
        longDesc: "Sistema financiero y administrativo que centraliza la emisión de recibos de mantenimiento, control de morosos, reservas online de áreas sociales (quincho, piscina, canchas) y control de acceso en garita.",
        features: [
            "Emisión masiva de recibos de mantenimiento con prorrateo de agua y luz",
            "Control de cuentas por cobrar y cálculo de moras automáticas",
            "Módulo de reserva de zonas comunes con calendario interactivo",
            "Portal del residente para consultar estados de cuenta y pagos",
            "Registro de visitas vehiculares y peatonales en conserjería",
            "Notificaciones y comunicados masivos por correo y WhatsApp"
        ],
        stack: ["PHP Laravel", "Livewire", "MySQL", "TailwindCSS", "JavaScript"]
    },
    "crm-odontologia": {
        title: "DentalCare CRM — Sistema Odontológico Especializado",
        category: "Salud & Clínicas",
        badge: "Odontología Digital",
        image: "img/proyectos/crm_odontologia.png",
        shortDesc: "Software clínico para consultorios dentales con odontograma interactivo digital 2D/3D y presupuestos por fases.",
        longDesc: "Herramienta especializada creada para odontólogos. Facilita el diagnóstico visual de piezas dentales, asignación de tratamientos (endodoncia, ortodoncia, cirugías) y seguimiento financiero del plan de tratamiento del paciente.",
        features: [
            "Odontograma interactivo digital con codificación de colores internacional",
            "Presupuestos por fases con simulación de pagos y descuentos",
            "Historia clínica periodontal y registro de evolución clínica",
            "Control de consentimientos informados firmados digitalmente",
            "Agenda de turnos con confirmación de asistencia",
            "Inventario de instrumental e insumos odontológicos"
        ],
        stack: ["PHP", "JavaScript", "MySQL", "SVG Interactivo", "Bootstrap", "AJAX"]
    },
    "saas-clinica": {
        title: "CliniSaaS — Gestión Médica y Consultorios",
        category: "Salud & Clínicas",
        badge: "Gestión Hospitalaria",
        image: "img/proyectos/saas_clinica.png",
        shortDesc: "Software de gestión clínica con historia clínica electrónica (HCE), triaje de constantes vitales y recetas digitales.",
        longDesc: "Plataforma multi-especialidad que optimiza el flujo de atención desde la recepción del paciente hasta la emisión de la receta médica, permitiendo la gestión eficiente de múltiples consultorios simultáneos.",
        features: [
            "Historia clínica electrónica unificada por paciente",
            "Módulo de triaje de enfermería (presión, saturación, pulso, IMC)",
            "Generador de recetas médicas e indicaciones para farmacia",
            "Sala de espera virtual con llamados en pantalla",
            "Caja y facturación por consultas y procedimientos médicos",
            "Reportes epidemiológicos y estadísticas de atenciones"
        ],
        stack: ["PHP", "MySQL", "FullCalendar", "JavaScript", "ChartJS", "HTML5"]
    },
    "erp-taller-automotriz": {
        title: "AutoTaller ERP — Gestión de Talleres Automotrices",
        category: "ERP & Operaciones",
        badge: "Automotriz & Talleres",
        image: "img/proyectos/erp_taller_automotriz.png",
        shortDesc: "Solución de administración automotriz con checklist de recepción digital, órdenes de trabajo (OT) y kardex de repuestos.",
        longDesc: "Sistema para talleres mecánicos, de pintura y detailing. Agiliza la recepción del vehículo registrando kilometraje, nivel de combustible y fotos de daños existentes para garantizar transparencia total.",
        features: [
            "Checklist de recepción vehicular con diagrama de carrocería",
            "Generación y seguimiento de Órdenes de Trabajo (OT) por mecánico",
            "Descuento automático de repuestos e insumos desde almacén",
            "Liquidación de mano de obra y cotizaciones para clientes",
            "Historial mecánico completo asociado a la placa del vehículo",
            "Avisos de mantenimiento preventivo (cambio de aceite, frenos)"
        ],
        stack: ["PHP Laravel", "MySQL", "JavaScript", "Blade", "CSS3"]
    },
    "erp-educativo": {
        title: "EducaSmart ERP — Gestión Escolar y Académica",
        category: "ERP & Educación",
        badge: "Educativo & Colegios",
        image: "img/proyectos/erp_educativo.png",
        shortDesc: "Sistema integral para colegios e instituciones: matrículas, libretas de notas automatizadas, asistencia QR y pensiones.",
        longDesc: "Plataforma escolar completa que moderniza las tareas administrativas docentes. Permite a los profesores subir notas y competencias en línea, generar boletas oficiales y llevar un control estricto de las pensiones mensuales.",
        features: [
            "Matrículas en línea con asignación de grados, secciones y tutores",
            "Libreta de notas automatizada bajo diseño de competencias",
            "Control de asistencia de alumnos y docentes mediante código QR",
            "Módulo de caja con cobranza de pensiones y cálculo de moras",
            "Portal para padres de familia con seguimiento académico",
            "Emisión de certificados de estudio y constancias de matrícula"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "Reportes PDF", "Bootstrap"]
    },
    "erp-farmacia": {
        title: "FarmaSaaS — Sistema para Boticas y Farmacias",
        category: "Retail & TPV",
        badge: "Farmacia & Salud",
        image: "img/proyectos/erp_farmacia.png",
        shortDesc: "Control de ventas y stock para boticas con gestión rigurosa de fechas de caducidad, lotes y búsqueda por principio activo.",
        longDesc: "Diseñado para farmacias independientes y cadenas. Permite a los dispensadores encontrar rápidamente equivalentes genéricos de medicamentos de marca, reduciendo el desabastecimiento y previniendo pérdidas por vencimientos.",
        features: [
            "Búsqueda instantánea por nombre comercial o principio activo genérico",
            "Semáforo de alertas para productos próximos a caducar",
            "Gestión de recetas controladas y psicotrópicos",
            "Punto de venta ágil con soporte para lectores de código de barras",
            "Apertura, arqueo y cierre de caja ciega por turno",
            "Kardex físico y valorizado por sucursal"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "Lector Código Barras", "CSS3"]
    },
    "tpv-fastfood": {
        title: "GastroRest TPV — Fast Food & Restaurantes",
        category: "Retail & TPV",
        badge: "Gastronomía & TPV",
        image: "img/proyectos/tpv_fastfood.png",
        shortDesc: "Punto de venta táctil con comanderas para mozos, panel KDS para cocina en tiempo real, división de cuentas y delivery.",
        longDesc: "Ecosistema gastronómico de alta velocidad. Agiliza la rotación de mesas conectando la comanda tomada en la mesa directamente con las impresoras o pantallas de cocina (KDS), eliminando errores y demoras.",
        features: [
            "Mapa interactivo de mesas con estados (libre, ocupada, por cobrar)",
            "Comandera web para mozos compatible con tablets y celulares",
            "Pantalla de cocina (KDS) en tiempo real con tiempos de preparación",
            "División de cuentas por comensal y múltiples formas de pago",
            "Módulo de delivery y pedidos para llevar (take away)",
            "Control de recetas estándar y descuento de insumos en cocina"
        ],
        stack: ["PHP", "WebSockets", "MySQL", "JavaScript", "Impresión Térmica"]
    },
    "saas-ventas-inventario": {
        title: "Minimarket PRO — Punto de Venta Retail",
        category: "Retail & TPV",
        badge: "Retail & Supermercados",
        image: "img/proyectos/saas_ventas_inventario.png",
        shortDesc: "Sistema de ventas rápido con soporte de balanzas electrónicas, lectores de barras, tickets térmicos y kardex SUNAT.",
        longDesc: "Desarrollado para bodegas, minimarkets y tiendas de conveniencia que requieren transacciones ultrarrápidas, control de promociones (pack 2x1) y auditoría constante de faltantes de stock.",
        features: [
            "Venta ultrarrápida compatible con balanzas y escáneres láser",
            "Emisión instantánea de boletas, facturas y tickets térmicos",
            "Control de compras, cuentas por pagar y cuentas corrientes de clientes",
            "Alertas automáticas de reposición de stock mínimo",
            "Múltiples cajas de cobro sincronizadas en red local",
            "Reportes diarios de ganancia neta y productos más vendidos"
        ],
        stack: ["C# .NET / PHP", "MySQL", "ESC/POS", "JavaScript", "Bootstrap"]
    },
    "saas-prestamos": {
        title: "CrediExpress — Sistema de Préstamos y Cobranzas",
        category: "ERP & Finanzas",
        badge: "Fintech & Créditos",
        image: "img/proyectos/saas_prestamos.png",
        shortDesc: "Plataforma financiera para control de préstamos diarios, semanales o mensuales con cálculo de mora y liquidación en ruta.",
        longDesc: "Solución completa para financieras, prestamistas y cajas de crédito. Facilita el seguimiento de las cobranzas diarias en terreno, la liquidación de agentes de campo y el historial crediticio de clientes.",
        features: [
            "Generación automática de cronogramas bajo sistemas francés, diario y simple",
            "Cálculo de penalidades e intereses moratorios por día de atraso",
            "Panel de cobrador móvil para registrar cobros en tiempo real",
            "Impresión de recibos de cobro por impresora térmica bluetooth",
            "Cierre y arqueo de caja diario con conciliación bancaria",
            "Estados de cuenta transparentes para los prestatarios"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "Node.js", "API WhatsApp"]
    },
    "gestor-documental": {
        title: "DocuManage — Gestor Documental Jurídico & Municipal",
        category: "ERP & Negocios",
        badge: "Legal & Mesa de Partes",
        image: "img/proyectos/gestor_documental.png",
        shortDesc: "Mesa de partes virtual y trazabilidad de expedientes legales mediante códigos QR únicos con control estricto de plazos.",
        longDesc: "Diseñado para bufetes de abogados, notarías y municipalidades. Digitaliza el flujo de expedientes, permitiendo a los ciudadanos o clientes consultar el estado exacto de su trámite mediante un código QR sin desplazarse.",
        features: [
            "Mesa de partes virtual para recepción de documentos las 24 horas",
            "Etiquetado de expedientes con código QR único para seguimiento",
            "Control de plazos legales con alertas por vencimiento de términos",
            "Derivación interna de documentos entre distintas gerencias y áreas",
            "Almacenamiento seguro e indexado de documentos PDF firmados",
            "Reportes estadísticos de carga laboral y expedientes resueltos"
        ],
        stack: ["PHP", "PostgreSQL", "JavaScript", "Códigos QR", "TailwindCSS"]
    },
    "saas-gimnasio": {
        title: "SmartGym — Gestión de Gimnasios y Membresías",
        category: "Retail & TPV",
        badge: "Fitness & Biometría",
        image: "img/proyectos/saas_gimnasio.png",
        shortDesc: "Control de socios, planes de suscripción, integración con torniquetes de acceso biométrico/QR y fichas antropométricas.",
        longDesc: "Plataforma integral para centros de fitness y academias deportivas. Bloquea automáticamente el torniquete si el socio tiene una cuota vencida, reduciendo drásticamente la tasa de morosidad.",
        features: [
            "Control de accesos automatizado mediante QR dinámico y biometría",
            "Gestión de planes diarios, mensuales, trimestrales y anuales",
            "Fichas de valoración antropométrica (peso, % grasa, medidas)",
            "Asignación de rutinas de entrenamiento y dietas personalizadas",
            "Punto de venta para suplementos, bebidas y merchandising",
            "Avisos automáticos de renovación de membresía por WhatsApp"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "Control Biométrico", "Bootstrap"]
    },
    "boutique-moda": {
        title: "Boutique Moda — E-commerce & TPV Textil",
        category: "Retail & TPV",
        badge: "Moda & E-Commerce",
        image: "img/proyectos/tineda.png",
        shortDesc: "Tienda online y catálogo dinámico con matriz de tallas y colores, control de stock y checkout directo por WhatsApp.",
        longDesc: "Solución de comercio electrónico diseñada para tiendas de ropa y calzado. Permite a los clientes navegar por colecciones de temporada, seleccionar talla y color, y finalizar el pedido directamente con un clic a WhatsApp.",
        features: [
            "Matriz dinámica de variantes por prenda (talla, color y stock)",
            "Catálogo interactivo con filtros rápidos por categoría y precio",
            "Carrito de compras optimizado para conversión móvil",
            "Botón de compra inmediata enviando el detalle exacto a WhatsApp",
            "Panel de administración para actualización de precios e imágenes",
            "Diseño responsivo optimizado para alta velocidad de carga"
        ],
        stack: ["JavaScript", "Node.js", "Express", "TailwindCSS", "HTML5"]
    },
    "gestion-almacenes": {
        title: "SmartStock — Gestión de Almacenes e Inventarios",
        category: "ERP & Logística",
        badge: "Logística & Kardex",
        image: "img/proyectos/gestion_almacenes.png",
        shortDesc: "Sistema logístico con ingresos, salidas y transferencias entre sucursales, control de stock crítico y kardex valorizado.",
        longDesc: "Herramienta robusta de control de suministros y almacenes que garantiza que cada movimiento de mercadería cuente con su respectiva guía y justificación, manteniendo la concordancia fiscal del inventario.",
        features: [
            "Kardex valorizado bajo métodos Promedio Ponderado y PEPS",
            "Guías de remisión de traslado interno entre múltiples almacenes",
            "Control de recepciones con órdenes de compra vinculadas",
            "Alertas preventivas de quiebre de stock",
            "Toma de inventario físico y ajuste por diferencias",
            "Exportación de libros electrónicos de inventario"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "Reportes Excel/PDF", "CSS3"]
    },
    "crm-celulares": {
        title: "MobileStore CRM & Servicio Técnico",
        category: "Retail & TPV",
        badge: "Servicio Técnico",
        image: "img/proyectos/crm_celulares.png",
        shortDesc: "Gestión de órdenes de reparación con patrón de desbloqueo, estados en línea para clientes y venta de repuestos.",
        longDesc: "Diseñado para talleres y tiendas de telefonía móvil. Permite registrar el equipo con su IMEI, fotos de recepción, patrón de seguridad y emitir un comprobante con el cual el cliente puede consultar el avance desde la web.",
        features: [
            "Recepción técnica con registro de IMEI, modelo y patrón visual",
            "Seguimiento online del estado de reparación (Recibido, En Diagnóstico, Listo)",
            "Venta de accesorios y repuestos con descuento automático de stock",
            "Asignación de comisiones a los técnicos por servicio completado",
            "Notificación automática al cliente cuando su equipo esté listo",
            "Garantía impresa en tickets térmicos"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "CSS3", "Tickets Térmicos"]
    },
    "sistema-moda-licen": {
        title: "Sistema de Gestión de Moda (Con Administrador de Licencias)",
        category: "Sistemas en Venta / Licencias",
        badge: "Licencia Permanente / Código Fuente",
        image: "img/proyectos/sistema_moda_licencia.png",
        shortDesc: "Sistema comercial para tiendas de ropa con módulo independiente de generación de licencias, matriz de tallas/colores y facturación.",
        longDesc: "Solución comercial lista para implementar o revender. Incluye dos módulos independientes: el Administrador de Licencias (para generar claves de activación por cliente y controlar fechas de vigencia) y el Sistema de Moda (punto de venta, catálogo de prendas, control de existencias por variantes y cierre de caja).",
        features: [
            "Módulo independiente para generar y revocar llaves de licencia por cliente",
            "Catálogo de prendas con matriz dinámica de tallas, colores y fotos",
            "Punto de venta táctil compatible con lectores de código de barras",
            "Emisión de comprobantes térmicos de venta y control de caja diaria",
            "Gestión de proveedores, compras y rotación de stock por temporada",
            "Código fuente completo listo para instalar en hosting o localhost"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "FPDF", "CSS3", "Licenciamiento"]
    },
    "sistema-panaderia-licen": {
        title: "Sistema Panadería & Pastelería TPV (Con Módulo de Licencias)",
        category: "Sistemas en Venta / Licencias",
        badge: "Licencia Permanente / Código Fuente",
        image: "img/proyectos/sistema_panaderia.png",
        shortDesc: "Sistema TPV especializado en panaderías y confiterías con panel de licencias, recetario de producción y arqueo de caja.",
        longDesc: "Diseñado para panificadoras y pastelerías. Integra un panel maestro de licenciamiento para comercializarlo a múltiples panaderías, control de ingredientes para recetas estándar, ventas en mostrador y reportes de rentabilidad diaria.",
        features: [
            "Generador de licencias de activación por sucursal o cliente",
            "Recetario estándar con descuento de insumos (harina, levadura, manteca)",
            "Venta rápida por unidad, docena o por peso (balanza)",
            "Apertura, arqueo y cierre ciego de caja por turno",
            "Módulo de pedidos anticipados de tortas y banquetes con fecha de entrega",
            "Totalmente configurable con logo, moneda y razón social"
        ],
        stack: ["PHP Laravel", "MySQL", "JavaScript", "Tickets Térmicos", "Licenciamiento"]
    },
    "saas-hospedaje": {
        title: "Sistema Hotelero & Hospedaje (Check-in, Cuartos & Bar)",
        category: "Sistemas en Venta / Licencias",
        badge: "Hoteles & Hostales",
        image: "img/proyectos/saas_hospedaje.png",
        shortDesc: "Gestión visual de habitaciones (Libre, Ocupada, Limpieza, Mantenimiento), check-in de huéspedes, consumos adicionales y cobro.",
        longDesc: "Plataforma hotelera ágil que muestra en tiempo real un mapa interactivo de todas las habitaciones del hotel. Facilita el ingreso rápido con documento de identidad, control de tarifas por hora/noche y cobro de servicios a la habitación.",
        features: [
            "Mapa interactivo de pisos y habitaciones con código de colores",
            "Registro rápido de pasajeros con cálculo de estadía y depósito de garantía",
            "Control de consumos de frigobar y restaurante cargados a la habitación",
            "Asignación de tareas al personal de limpieza con cambio de estado automático",
            "Reportes de ocupación promedio y recaudación diaria por recepcionista",
            "Código limpio y modular para fácil despliegue en cualquier servidor"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"]
    },
    "saas-botica": {
        title: "Sistema Botica & Farmacia (Control de Lotes & Vencimiento)",
        category: "Sistemas en Venta / Licencias",
        badge: "Farmacia & Boticas",
        image: "img/proyectos/saas_botica.png",
        shortDesc: "Control estricto de fechas de caducidad, lotes farmacéuticos, búsqueda por principio activo genérico y ventas en mostrador.",
        longDesc: "Sistema de gestión farmacéutica optimizado para prevenir pérdidas por productos vencidos. Alerta con semáforo preventivo y permite al dependiente buscar medicamentos por su nombre genérico para ofrecer alternativas al cliente.",
        features: [
            "Semáforo de vencimientos (Verde, Amarillo, Rojo) con avisos preventivos",
            "Búsqueda por principio activo (Paracetamol, Amoxicilina) o nombre comercial",
            "Lectura ultra-rápida de código de barras para venta en caja",
            "Kardex por lote y laboratorio farmacéutico",
            "Control de medicamentos bajo receta médica y psicotrópicos",
            "Disponible para instalación inmediata en red local o web"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "CSS3", "Tickets Térmicos"]
    },
    "taller-textil": {
        title: "Sistema de Producción Textil & Confecciones",
        category: "Sistemas en Venta / Licencias",
        badge: "Textil & Producción",
        image: "img/proyectos/taller_textil.png",
        shortDesc: "Control de órdenes de corte y confección, seguimiento por operario, costeo de insumos y entrega a clientes.",
        longDesc: "Herramienta especializada para talleres de confección y fábricas de ropa. Permite rastrear cada lote de prendas desde el corte de tela hasta el estampado, costura y embolsado, calculando el rendimiento y mano de obra.",
        features: [
            "Órdenes de producción textil con desglose por modelo, talla y color",
            "Control de rendimiento por operario de costura para pago a destajo",
            "Costeo preciso de materia prima (rollos de tela, cierres, botones, hilos)",
            "Seguimiento de etapas: Corte, Estampado, Confección, Acabados, Empaque",
            "Fechas de entrega comprometidas y alertas de retraso",
            "Exportación de reportes de costo unitario y márgenes de ganancia"
        ],
        stack: ["PHP", "MySQL", "JavaScript", "ChartJS", "Bootstrap"]
    }
};

// Variable para el estado del menú responsive
let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}

// Efecto de header con fondo al hacer scroll y botón scroll top
window.addEventListener("scroll", () => {
    const header = document.querySelector(".contenedor-header");
    const scrollTopBtn = document.getElementById("btnScrollTop");

    if (window.scrollY > 50) {
        header?.classList.add("scrolled");
    } else {
        header?.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
        scrollTopBtn?.classList.add("visible");
    } else {
        scrollTopBtn?.classList.remove("visible");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Animación de Barras de Progreso con IntersectionObserver
function inicializarAnimacionSkills() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    const progressFills = document.querySelectorAll(".progress-fill");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressFills.forEach(fill => {
                    const width = fill.getAttribute("data-width") || "80%";
                    fill.style.width = width;
                });
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(skillsSection);
}

// Filtro interactivo de la Galería de Proyectos
function inicializarFiltrosPortfolio() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".proyecto-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remover estado activo de los botones
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filterValue === "all" || category.includes(filterValue)) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 250);
                }
            });
        });
    });
}

// Lógica del Modal de Proyecto Detallado
function abrirDetalleProyecto(projectId) {
    const modal = document.getElementById("projectModal");
    const project = proyectosData[projectId];

    if (!project || !modal) return;

    document.getElementById("modalImg").src = project.image;
    document.getElementById("modalImg").alt = project.title;
    document.getElementById("modalBadge").textContent = project.badge;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalLongDesc").textContent = project.longDesc;

    // Renderizar Lista de Características
    const featuresList = document.getElementById("modalFeaturesList");
    featuresList.innerHTML = "";
    project.features.forEach(feat => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feat}</span>`;
        featuresList.appendChild(li);
    });

    // Renderizar Tags del Stack
    const stackTags = document.getElementById("modalStackTags");
    stackTags.innerHTML = "";
    project.stack.forEach(tech => {
        const span = document.createElement("span");
        span.className = "stack-tag";
        span.textContent = tech;
        stackTags.appendChild(span);
    });

    // Configurar enlace de cotización por WhatsApp con el proyecto específico
    const btnDemo = document.getElementById("modalBtnDemo");
    const textMsg = encodeURIComponent(`Hola Steven, me interesa conocer más y ver una demo del sistema "${project.title}".`);
    btnDemo.href = `https://wa.me/51970788983?text=${textMsg}`;

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Evitar scroll del fondo
}

function cerrarModalProyecto() {
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

// Cerrar modal al hacer clic en el fondo o presionar Escape
window.addEventListener("click", (e) => {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        cerrarModalProyecto();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cerrarModalProyecto();
    }
});

// Enlace directo de demo para cada tarjeta
function cotizarProyectoDirecto(projectKey) {
    const project = proyectosData[projectKey];
    const name = project ? project.title : projectKey;
    const textMsg = encodeURIComponent(`Hola Steven, vi tu portafolio y me gustaría cotizar / solicitar una demo del sistema "${name}".`);
    window.open(`https://wa.me/51970788983?text=${textMsg}`, "_blank");
}

// Enlace directo de compra / licencia de sistemas en venta
function comprarSistemaDirecto(projectKey) {
    const project = proyectosData[projectKey];
    const name = project ? project.title : projectKey;
    const textMsg = encodeURIComponent(`Hola Steven, me interesa comprar / adquirir la licencia del sistema "${name}". ¿Me podrías indicar el precio, formas de entrega y soporte?`);
    window.open(`https://wa.me/51970788983?text=${textMsg}`, "_blank");
}

// Función para enviar formulario de contacto vía WhatsApp
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre')?.value.trim();
    const telefono = document.getElementById('telefono')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const tema = document.getElementById('tema')?.value.trim();
    const mensaje = document.getElementById('mensaje')?.value.trim();

    if (!nombre && !mensaje) {
        alert("Por favor, ingresa al menos tu nombre y un mensaje.");
        return;
    }

    let texto = "¡Hola Steven! Me contacto desde tu portafolio web.\n\n";
    if (nombre) texto += `👤 Nombre: ${nombre}\n`;
    if (telefono) texto += `📞 Teléfono: ${telefono}\n`;
    if (email) texto += `✉️ Email: ${email}\n`;
    if (tema) texto += `📌 Asunto: ${tema}\n`;
    if (mensaje) texto += `💬 Mensaje: ${mensaje}\n`;

    const textoFinal = encodeURIComponent(texto);
    const url = `https://wa.me/51970788983?text=${textoFinal}`;
    window.open(url, '_blank');
}

// Inventario de proyectos fuente locales (rutas amigables, sin exponer discos)
const proyectosFuente = {
    laragon: {
        label: "Laragon · Desarrollo local",
        icon: "fa-server",
        items: [
            "alimentos-bebidas", "alimentos-bebidas-IA", "cotizacion", "crm-colegio",
            "crm-delivery", "crm-gestion-tienda-celulares", "crm-tpv-fastfood", "DEPORTES-FITNES",
            "dev_alquilervehiculos", "dev_avicolas", "dev_catering", "dev_escuelasdeportivas",
            "dev_hostales", "dev_lavanderiaropas", "dev_mudanza", "dev_muebleria",
            "laboratorio-clinico", "medico-saas", "mi_sistema", "mi_tienda",
            "Minimarket PRO", "MODAS", "panaderiapasteleria", "restaurante",
            "saas_academia", "saas_botica", "saas_citasmedicas", "saas_clinica",
            "saas_colegio", "saas_ferreteria", "saas_gimnasio", "saas_hospedaje",
            "saas_minimarket", "saas_odontologia", "saas_prestamosycobranzas", "saas_restaurante",
            "saas_taller-automotriz", "saas_tienda_moda", "saas-taller-textil", "saas-ventas-inventario",
            "saas-veterinaria", "suite-educativa", "suite-retail", "suite-saas",
            "sys_barberia", "sys_carwash", "sys_condominio", "sys_consultorio_medico",
            "sys_consultorio_psicologico", "sys_estetica_spa", "sys_ferreteria", "sys_fotografia",
            "sys_gestion_ti", "sys_gimnasio", "sys_inventario_equipos", "sys_manufactura_produccion",
            "sys_polleria", "sys_reposteria", "sys_restaurante", "sys_restobar",
            "sys_taxi", "sys_tienda", "sys_tiendaropas", "sys_transporte",
            "sys_veterinaria", "tpv-EsteticaySPA", "tpv-hosteleria", "tpv-joyeria-relojeria",
            "tpv-panaderia", "tpv-papeleria-libreria", "tpv-peluqueria", "tpv-zapateria",
            "tvp-minimarket"
        ]
    },
    plantillas: {
        label: "Plantillas y Proyectos Web",
        icon: "fa-layer-group",
        items: [
            "ADMIN. LICENCIA · SISTEM. MODA", "ADMIN. LICENCIA · SISTEM. PANADERIA LICEN",
            "ADMIN. LICENCIA · SISTEM. PERSTAO Y COBRANZA LICEN", "APP MOVIL · app_veterinaria",
            "AUDITORIAS CHEK · auditcheckpro_consumo", "AUDITORIAS CHEK · auditcheckPro_gastronomia",
            "CRM-EPR · crm-condominio", "CRM-EPR · crm-odontologia", "CRM-EPR · crm-tiendaonline",
            "CRM-EPR · crm-ventas", "CRM-EPR · crm-viaje360", "CRM-EPR · erp-educativo",
            "CRM-EPR · erp-farmacia", "CRM-EPR · erp-taller-automotriz",
            "NEGOCIOS · gestion-almacenes", "NEGOCIOS · gestordocumental-abogados",
            "NEGOCIOS · gestordocumental-contable", "NEGOCIOS · gestordocumental-municipal",
            "NEGOCIOS · neg-servicio-tecnico", "NEGOCIOS · neg-sistema-contabilidad-peru",
            "NEGOCIOS · neg-sistema-control-asistencia-digital", "NEGOCIOS · neg-sistema-encomiendas",
            "NEGOCIOS · neg-sistema-planilla", "NEGOCIOS · sistema-consultorio-medico",
            "PROYECTO --EXTR · FACTURACIÓN-ELECTRÓNICA", "PROYECTO --EXTR · sistema_biblioteca",
            "C# · MiniMarket", "C# · SistemaAcademias", "C# · sistemahoteleria",
            "JAVASCRIP · boutique-system", "JAVASCRIP · dev_inmobiliaria", "JAVASCRIP · dev_optica",
            "JAVASCRIP · dev_pizzeria", "JAVASCRIP · dev_ssoma", "JAVASCRIP · dev_tiendaregalos",
            "JAVASCRIP · sistema-ferreteria", "JAVASCRIP · sistema-parqueo",
            "JAVASCRIP · sistema-polleria", "JAVASCRIP · sistema-prestamos",
            "JAVASCRIP · sistema-salondebelleza", "PHP · cotizacion", "PHP · sistema-hospedaje",
            "PYTHON · dev_estetica_salon_belleza", "PYTHON · sistema-veterinaria"
        ]
    }
};

function renderProyectosFuente() {
    const contenedor = document.getElementById("fuentesContenedor");
    if (!contenedor) return;

    const grupos = Object.values(proyectosFuente);
    const total = grupos.reduce((acc, grupo) => acc + grupo.items.length, 0);
    const totalEl = document.getElementById("fuentesTotal");
    if (totalEl) totalEl.textContent = total;

    contenedor.innerHTML = grupos.map(grupo => `
        <article class="fuente-grupo">
            <div class="fuente-grupo-header">
                <h3><i class="fa-solid ${grupo.icon}"></i> ${grupo.label}</h3>
                <span class="fuente-count">${grupo.items.length} proyectos</span>
            </div>
            <div class="fuente-tags">
                ${grupo.items.map(nombre => `<span class="fuente-tag">${nombre}</span>`).join("")}
            </div>
        </article>
    `).join("");
}

// Inicialización de componentes al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    inicializarAnimacionSkills();
    inicializarFiltrosPortfolio();
    renderProyectosFuente();
});
