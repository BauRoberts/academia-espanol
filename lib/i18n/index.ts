//lib/i18n/index.ts

// Definimos traducciones directamente en el archivo para evitar problemas de importación
const contactTranslations = {
  es: {
    title: "Agenda tu clase",
    subtitle:
      "Estamos aquí para ayudarte en tu viaje de aprendizaje del español. Contáctanos o agenda directamente una clase con nuestros profesores nativos.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      submit: "Enviar mensaje",
      success: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
      error:
        "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      placeholder: {
        name: "Tu nombre completo",
        email: "tu@correo.com",
        subject: "¿En qué podemos ayudarte?",
        message: "Escribe tu mensaje aquí...",
      },
    },
    calendar: {
      title: "Reserva tu clase",
      description:
        "Selecciona el horario que mejor se adapte a tu disponibilidad para comenzar tu aprendizaje de español con uno de nuestros profesores nativos.",
    },
    contact: {
      title: "Información de contacto",
      description:
        "Si prefieres contactarnos directamente, aquí tienes nuestros datos:",
      email: "contacto@academiaespanol.com",
      phone: "+34 912 345 678",
      address: "Calle Gran Vía 28, 28013 Madrid, España",
      social: "Síguenos en nuestras redes sociales:",
    },
    faq: {
      title: "Preguntas frecuentes",
      questions: [
        {
          question: "¿Qué nivel de español necesito para empezar?",
          answer:
            "¡Ninguno! Tenemos cursos para todos los niveles, desde principiantes absolutos (A1) hasta niveles avanzados (C2). Realizamos una evaluación inicial para ubicarte en el nivel adecuado.",
        },
        {
          question: "¿Cómo son las clases online?",
          answer:
            "Las clases se realizan a través de Zoom con material interactivo compartido. Nuestros profesores utilizan recursos digitales, actividades dinámicas y adaptadas a tus necesidades específicas.",
        },
        {
          question: "¿Puedo cancelar o reagendar una clase?",
          answer:
            "Sí, puedes cancelar o reagendar hasta 24 horas antes de la clase sin costo adicional. Las cancelaciones con menos de 24 horas de anticipación están sujetas a nuestra política de cancelación.",
        },
        {
          question: "¿Qué formas de pago aceptan?",
          answer:
            "Aceptamos tarjetas de crédito/débito, PayPal y transferencias bancarias. Puedes elegir entre planes mensuales o paquetes de clases según tus necesidades.",
        },
      ],
    },
  },
  en: {
    title: "Schedule Your Class",
    subtitle:
      "We're here to help you on your Spanish learning journey. Contact us or schedule a class directly with our native teachers.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      success: "Message sent successfully! We'll contact you soon.",
      error: "There was an error sending your message. Please try again.",
      placeholder: {
        name: "Your full name",
        email: "your@email.com",
        subject: "How can we help you?",
        message: "Write your message here...",
      },
    },
    calendar: {
      title: "Book your class",
      description:
        "Select the schedule that best fits your availability to start your Spanish learning journey with one of our native teachers.",
    },
    contact: {
      title: "Contact Information",
      description:
        "If you prefer to contact us directly, here's our information:",
      email: "contact@academiaespanol.com",
      phone: "+34 912 345 678",
      address: "Calle Gran Vía 28, 28013 Madrid, Spain",
      social: "Follow us on social media:",
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What level of Spanish do I need to start?",
          answer:
            "None! We have courses for all levels, from absolute beginners (A1) to advanced levels (C2). We conduct an initial assessment to place you at the appropriate level.",
        },
        {
          question: "How do online classes work?",
          answer:
            "Classes are conducted via Zoom with shared interactive material. Our teachers use digital resources and dynamic activities tailored to your specific needs.",
        },
        {
          question: "Can I cancel or reschedule a class?",
          answer:
            "Yes, you can cancel or reschedule up to 24 hours before the class at no additional cost. Cancellations with less than 24 hours notice are subject to our cancellation policy.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept credit/debit cards, PayPal, and bank transfers. You can choose between monthly plans or class packages according to your needs.",
        },
      ],
    },
  },
  pl: {
    title: "Zaplanuj swoją lekcję",
    subtitle:
      "Jesteśmy tutaj, aby pomóc Ci w nauce języka hiszpańskiego. Skontaktuj się z nami lub zarezerwuj lekcję bezpośrednio z naszymi rodzimymi nauczycielami.",
    form: {
      name: "Imię i nazwisko",
      email: "E-mail",
      subject: "Temat",
      message: "Wiadomość",
      submit: "Wyślij wiadomość",
      success: "Wiadomość wysłana pomyślnie! Skontaktujemy się wkrótce.",
      error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
      placeholder: {
        name: "Twoje pełne imię i nazwisko",
        email: "twoj@email.com",
        subject: "W czym możemy pomóc?",
        message: "Napisz swoją wiadomość tutaj...",
      },
    },
    calendar: {
      title: "Zarezerwuj lekcję",
      description:
        "Wybierz harmonogram, który najlepiej pasuje do Twojej dyspozycyjności, aby rozpocząć naukę hiszpańskiego z jednym z naszych rodzimych nauczycieli.",
    },
    contact: {
      title: "Informacje kontaktowe",
      description:
        "Jeśli wolisz skontaktować się z nami bezpośrednio, oto nasze dane:",
      email: "kontakt@academiaespanol.com",
      phone: "+34 912 345 678",
      address: "Calle Gran Vía 28, 28013 Madryt, Hiszpania",
      social: "Obserwuj nas w mediach społecznościowych:",
    },
    faq: {
      title: "Często zadawane pytania",
      questions: [
        {
          question: "Jaki poziom hiszpańskiego potrzebuję, żeby zacząć?",
          answer:
            "Żadnego! Mamy kursy dla wszystkich poziomów, od absolutnych początkujących (A1) do zaawansowanych (C2). Przeprowadzamy wstępną ocenę, aby umieścić Cię na odpowiednim poziomie.",
        },
        {
          question: "Jak działają zajęcia online?",
          answer:
            "Zajęcia odbywają się przez Zoom z udostępnianymi materiałami interaktywnymi. Nasi nauczyciele korzystają z zasobów cyfrowych i dynamicznych aktywności dostosowanych do Twoich konkretnych potrzeb.",
        },
        {
          question: "Czy mogę anulować lub przełożyć zajęcia?",
          answer:
            "Tak, możesz anulować lub przełożyć zajęcia do 24 godzin przed ich rozpoczęciem bez dodatkowych kosztów. Anulowania z wyprzedzeniem krótszym niż 24 godziny podlegają naszej polityce anulowania.",
        },
        {
          question: "Jakie metody płatności akceptujecie?",
          answer:
            "Akceptujemy karty kredytowe/debetowe, PayPal i przelewy bankowe. Możesz wybrać pomiędzy planami miesięcznymi lub pakietami zajęć według Twoich potrzeb.",
        },
      ],
    },
  },
  fr: {
    title: "Planifiez votre cours",
    subtitle:
      "Nous sommes là pour vous aider dans votre apprentissage de l'espagnol. Contactez-nous ou planifiez directement un cours avec nos professeurs natifs.",
    form: {
      name: "Nom",
      email: "E-mail",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer le message",
      success: "Message envoyé avec succès ! Nous vous contacterons bientôt.",
      error:
        "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
      placeholder: {
        name: "Votre nom complet",
        email: "votre@email.com",
        subject: "Comment pouvons-nous vous aider ?",
        message: "Écrivez votre message ici...",
      },
    },
    calendar: {
      title: "Réservez votre cours",
      description:
        "Sélectionnez l'horaire qui convient le mieux à votre disponibilité pour commencer votre apprentissage de l'espagnol avec l'un de nos professeurs natifs.",
    },
    contact: {
      title: "Informations de contact",
      description:
        "Si vous préférez nous contacter directement, voici nos coordonnées :",
      email: "contact@academiaespanol.com",
      phone: "+34 912 345 678",
      address: "Calle Gran Vía 28, 28013 Madrid, Espagne",
      social: "Suivez-nous sur les réseaux sociaux :",
    },
    faq: {
      title: "Questions fréquemment posées",
      questions: [
        {
          question: "Quel niveau d'espagnol dois-je avoir pour commencer ?",
          answer:
            "Aucun ! Nous proposons des cours pour tous les niveaux, des débutants absolus (A1) jusqu'aux niveaux avancés (C2). Nous effectuons une évaluation initiale pour vous placer au niveau approprié.",
        },
        {
          question: "Comment fonctionnent les cours en ligne ?",
          answer:
            "Les cours se déroulent via Zoom avec du matériel interactif partagé. Nos professeurs utilisent des ressources numériques et des activités dynamiques adaptées à vos besoins spécifiques.",
        },
        {
          question: "Puis-je annuler ou reporter un cours ?",
          answer:
            "Oui, vous pouvez annuler ou reporter jusqu'à 24 heures avant le cours sans frais supplémentaires. Les annulations avec moins de 24 heures de préavis sont soumises à notre politique d'annulation.",
        },
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer:
            "Nous acceptons les cartes de crédit/débit, PayPal et les virements bancaires. Vous pouvez choisir entre des forfaits mensuels ou des packs de cours selon vos besoins.",
        },
      ],
    },
  },
  pt: {
    title: "Agende sua aula",
    subtitle:
      "Estamos aqui para ajudá-lo em sua jornada de aprendizado do espanhol. Entre em contato conosco ou agende diretamente uma aula com nossos professores nativos.",
    form: {
      name: "Nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar mensagem",
      success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      error:
        "Houve um erro ao enviar sua mensagem. Por favor, tente novamente.",
      placeholder: {
        name: "Seu nome completo",
        email: "seu@email.com",
        subject: "Como podemos ajudá-lo?",
        message: "Escreva sua mensagem aqui...",
      },
    },
    calendar: {
      title: "Reserve sua aula",
      description:
        "Selecione o horário que melhor se adapta à sua disponibilidade para iniciar seu aprendizado de espanhol com um de nossos professores nativos.",
    },
    contact: {
      title: "Informações de contato",
      description:
        "Se preferir entrar em contato diretamente conosco, aqui estão nossas informações:",
      email: "contato@academiaespanol.com",
      phone: "+34 912 345 678",
      address: "Calle Gran Vía 28, 28013 Madrid, Espanha",
      social: "Siga-nos nas redes sociais:",
    },
    faq: {
      title: "Perguntas frequentes",
      questions: [
        {
          question: "Que nível de espanhol preciso para começar?",
          answer:
            "Nenhum! Temos cursos para todos os níveis, desde iniciantes absolutos (A1) até níveis avançados (C2). Realizamos uma avaliação inicial para colocá-lo no nível adequado.",
        },
        {
          question: "Como funcionam as aulas online?",
          answer:
            "As aulas são realizadas via Zoom com material interativo compartilhado. Nossos professores utilizam recursos digitais e atividades dinâmicas adaptadas às suas necessidades específicas.",
        },
        {
          question: "Posso cancelar ou reagendar uma aula?",
          answer:
            "Sim, você pode cancelar ou reagendar até 24 horas antes da aula sem custo adicional. Cancelamentos com menos de 24 horas de antecedência estão sujeitos à nossa política de cancelamento.",
        },
        {
          question: "Quais formas de pagamento vocês aceitam?",
          answer:
            "Aceitamos cartões de crédito/débito, PayPal e transferências bancárias. Você pode escolher entre planos mensais ou pacotes de aulas de acordo com suas necessidades.",
        },
      ],
    },
  },
};

// Definimos un tipo para las fuentes de traducción
type TranslationSource = {
  [key: string]: {
    [key: string]: any;
  };
};

// Organizamos las traducciones por componente/página y idioma
const translations: TranslationSource = {
  contact: contactTranslations,
  // Aquí se agregarían otros componentes o páginas
};

/**
 * Función para obtener las traducciones según el idioma y el componente/página
 * @param lang Código de idioma ('es', 'en', etc.)
 * @param component Nombre del componente o página para el que se requieren traducciones
 * @returns Objeto con las traducciones correspondientes
 */
export async function getTranslations(lang: string, component: string) {
  // Verificamos si existe el idioma solicitado, si no, usamos español como respaldo
  const languageExists = translations[component]?.[lang];
  const languageToUse = languageExists ? lang : "es";

  // Devolvemos las traducciones para el componente y el idioma especificados
  return translations[component]?.[languageToUse] || {};
}

/**
 * Lista de idiomas soportados
 */
export const supportedLanguages = ["es", "en", "pl", "fr", "pt"];

/**
 * Nombres de los idiomas soportados para mostrar en la UI
 */
export const languageNames = {
  es: "Español",
  en: "English",
  pl: "Polski",
  fr: "Français",
  pt: "Português",
};
