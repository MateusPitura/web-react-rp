import { IconsName } from "@/global/types";
import { name } from "../../../../package.json";
import Photo from "@assets/photo.webp";
import Person1 from "@assets/person1.webp";
import Person2 from "@assets/person2.webp";
import Person3 from "@assets/person3.webp";
import Person4 from "@assets/person4.webp";
import Person5 from "@assets/person5.webp";

export const topBar = {
  name,
};

export const introduction = {
  degree: "Dr.",
  name,
  image: Photo,
  description:
    "Médico clínico geral com mais de 10 anos de experiência no cuidado integral à saúde. Formado pela Universidade Estudal de Ponta Grossa (UEPG) e com especialização em Medicina da Família, atua com foco na prevenção, diagnóstico e tratamento de doenças comuns, sempre com uma abordagem humanizada e centrada no paciente",
};

interface SpecialtyProperties {
  icon: IconsName;
  title: string;
}

export const specialty: SpecialtyProperties[] = [
  {
    icon: "HowToReg",
    title: "Clínico Geral",
  },
  {
    icon: "Spa",
    title: "Tratamento de TDAH",
  },
  {
    icon: "Videocam",
    title: "Teleconsulta",
  },
];

export const education = [
  {
    title: "Graduação em Medicina",
    institution: "UEPG",
    period: "2002 - 2007",
    description:
      "Formação generalista com foco em anatomia, fisiologia, farmacologia, clínica médica, cirurgia, ginecologia, pediatria e internato supervisionado",
  },
  {
    title: "Residência em Clínica Médica",
    institution: "FMUSP",
    period: "2017 - 2019",
    description:
      "Treinamento intensivo no atendimento a adultos com doenças agudas e crônicas, em ambulatórios, enfermarias, pronto-socorro e UTI",
  },
  {
    title: "Especialização em Cardiologia",
    institution: "UEPG",
    period: "2021 - 2023",
    description:
      "Ênfase em diagnóstico e tratamento de doenças cardiovasculares, com prática em exames como ECG, ecocardiograma e cateterismo",
  },
];

export const rating = [
  {
    name: "Heraclio Barbosa Jr",
    date: "6 de abril de 2025",
    description:
      "Me senti muito bem na consulta e adorei as explicações detalhadas",
    image: Person1,
  },
  {
    name: "T.P",
    date: "9 de abril de 2025",
    description: "Atendimento foi ótimo e pontual, educado e atencioso",
    image: Person2,
  },
  {
    name: "W.R",
    date: "3 de abril de 2025",
    description: "Suas orientações me ajudaram a colocar a vida em ordem.",
    image: Person3,
  },
  {
    name: "William",
    date: "26 de março de 2025",
    description:
      "Estou satisfeito com o atendimento. Acredito muito na recuperação",
    image: Person4,
  },
  {
    name: "junior Stival",
    date: "20 de março de 2025",
    description:
      "Sem palavras para descrever o atendimento. Muito obrigado pela atenção Dr",
    image: Person5,
  },
];

interface ContactProperties {
  title: string;
  iconName: IconsName;
  description: string;
  link: string;
}

export const contact: ContactProperties[] = [
  {
    title: "WhatsApp",
    iconName: "WhatsApp",
    description: "(42) 9 9119-2286",
    link: "https://wa.me/5542991192286",
  },
  {
    title: "Instagram",
    iconName: "Instagram",
    description: "drrinaldopossagno",
    link: "https://www.instagram.com/drrinaldopossagno/",
  },
];

export const map = {
  address: "Rua Padre Ildefonso, 475. Sala 21",
  description: "Centro, Ponta Grossa",
  link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0606562798393!2d-50.16029462372654!3d-25.09980799580157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a42f8c57a3b%3A0x282c129b2623b785!2sR.%20Padre%20Ildefonso%2C%20475%20-%20Centro%2C%20Ponta%20Grossa%20-%20PR%2C%2084010-070!5e0!3m2!1sen!2sbr!4v1746149841058!5m2!1sen!2sbr",
};
