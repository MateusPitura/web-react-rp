import type { ReactNode } from "react";

export default function PrivacyPolicy(): ReactNode {
  return (
    <div className="bg-light-surface flex flex-wrap max-w-3xl m-auto justify-center text-left gap-3 py-8 px-4 text-light-on-surface">
      <h1 className="text-headline-large w-full">Política de Privacidade</h1>
      <p className="text-body-large w-full">
        A sua privacidade é extremamente importante para nós. Comprometemo-nos a
        respeitar sua privacidade e proteger qualquer informação pessoal que
        você possa fornecer através do nosso site, Mateus Pitura.
      </p>
      <h2 className="text-title-large w-full">Coleta de Informações</h2>
      <p>
        Solicitamos suas informações pessoais apenas quando elas são
        estritamente necessárias para fornecer nossos serviços a você. Coletamos
        essas informações de maneira justa e legal, com seu conhecimento e
        consentimento explícito. Também informamos os motivos da coleta e como
        essas informações serão utilizadas.
      </p>
      <h2 className="text-title-large w-full">
        Uso e Armazenamento de Informações
      </h2>
      <p className="text-body-large w-full">
        Retemos as informações coletadas somente pelo tempo necessário para
        fornecer o serviço solicitado. Armazenamos dados protegidos por medidas
        de segurança tecnicamente adequadas para prevenir perda, roubo, acesso
        não autorizado, divulgação, cópia, uso ou alteração.
      </p>
      <h2 className="text-title-large w-full">
        Compartilhamento de Informações
      </h2>
      <p className="text-body-large w-full">
        Não compartilhamos suas informações pessoais publicamente nem com
        terceiros, exceto quando exigido por lei.
      </p>
      <h2 className="text-title-large w-full">Sites Externos</h2>
      <p className="text-body-large w-full">
        Nosso site pode conter links para sites externos que não são operados
        por nós. Tenha em mente que não controlamos esses sites e não podemos
        assumir responsabilidade por suas políticas de privacidade.
      </p>
      <h2 className="text-title-large w-full">Recusa de Informações</h2>
      <p className="text-body-large w-full">
        Você pode optar por não fornecer suas informações pessoais, com o
        entendimento de que isso pode impedir que lhe forneçamos determinados
        serviços.
      </p>
      <h2 className="text-title-large w-full">Aceitação desta Política</h2>
      <p className="text-body-large w-full">
        O uso contínuo de nosso site indica a aceitação de nossa política de
        privacidade. Se você tiver dúvidas sobre como gerenciamos dados do
        usuário e informações pessoais, não hesite em nos contactar.
      </p>
      <h2 className="text-title-large w-full">Compromisso do Usuário</h2>
      <p className="text-body-large w-full">
        Ao usar o site Mateus Pitura, você se compromete a:
      </p>
      <ul className="list-disc pl-10">
        <li className="text-body-large w-full">
          Não realizar atividades ilegais ou contrárias à ética e à ordem
          pública;
        </li>
        <li className="text-body-large w-full">
          Não difundir conteúdo discriminatório, ilegal ou que promova
          atividades prejudiciais contra os direitos humanos;
        </li>
        <li className="text-body-large w-full">
          Não causar danos aos sistemas físicos e lógicos de Mateus Pitura, seus
          fornecedores ou terceiros.
        </li>
      </ul>
      <h2 className="text-title-large w-full">Mais Informações</h2>
      <p className="text-body-large w-full">
        Esperamos que você esteja esclarecido sobre os cookies. Se não tiver
        certeza sobre algo, recomendamos deixar os cookies ativados para
        garantir que funcionalidades do nosso site operem conforme esperado.
      </p>
      <p className="text-body-large w-full">
        Esta política entra em vigor a partir de 02 de maio de 2025.
      </p>
    </div>
  );
}
