import { motion } from 'framer-motion';
import React from 'react';

interface PrivacyPolicyPopupProps {
  onClose: () => void;
}

const PrivacyPolicyPopup: React.FC<PrivacyPolicyPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed z-[1000] text-pretty top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-950 bg-slate-200 p-6 shadow-md max-h-[80vh] overflow-y-auto">
      <motion.div
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className=" text-center text-3xl font-bold mb-10">Datenschutzerklärung</h2>
        <p className="mb-4">
          Der Schutz Ihrer Daten ist uns sehr wichtig. Wir halten die deutschen Datenschutzgesetze ein und informieren Sie mit den nachfolgenden Datenschutzhinweisen über den Umgang mit Ihren Daten.
        </p>
        <p className="mb-4">
          Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
        </p>
        <h3 className='text-center mb-4 text-lg font-bold'>Server-Logfiles</h3>
        <p className="mb-4">
          Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Zugriff auf unsere Website werden Nutzungsdaten durch Ihren Internetbrowser übermittelt und in Protokolldateien (Server-Logfiles) anonym zu Statistikzwecken der Domain-Namen, die IP-Adresse des anfragenden Rechners, das Zugriffsdatum, die Dateianfrage des Client (Dateiname und URL, Information über die Website, von der aus Sie zu uns gefunden haben), Beschreibung des Typs der verwendeten Webbrowserversion inklusive Betriebssystem, den HTTP Antwort-Code sowie die Anzahl der im Rahmen der Verbindung transferierten Bytes und der anfragende Provider gespeichert.
        </p>
        <h3 className='text-center mb-4 text-lg font-bold'>Erhebung, Verarbeitung und Nutzung personenbezogener Daten Kontaktformular und e-mail-Kontakt</h3>
        <p className="mb-4">
          Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Alternativ ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert. Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an Dritte. Die Daten werden ausschließlich für die Verarbeitung der Konversation verwendet.      </p>
        <h3 className='text-center mb-4 text-lg font-bold'>Dauer der Speicherung</h3>
        <p className="mb-4">
          Nach vollständiger Vertragsabwicklung werden die Daten zunächst für die Dauer der Gewährleistungsfrist, danach unter Berücksichtigung gesetzlicher, insbesondere steuer- und handelsrechtlicher Aufbewahrungsfristen gespeichert und dann nach Fristablauf gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
        </p>
        <h3 className='text-center mb-4 text-lg font-bold'>Rechte der betroffenen Person
        </h3>
        <p className="mb-4">
          Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte nach Art. 15 bis 20 DSGVO zu: Recht auf Auskunft, auf Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit. Außerdem steht Ihnen nach Art. 21 (1) DSGVO ein Widerspruchsrecht gegen die Verarbeitungen zu, die auf Art. 6 (1) f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke von Direktwerbung.
        </p>
        <h3 className='text-center mb-4 text-lg font-bold'>Ihr Ansprechpartner in Datenschutzangelegenheiten
        </h3>
        <p className="mb-4">
          Wenn Sie Fragen hinsichtlich der Verarbeitung Ihrer persönlichen Daten haben, auch in Fällen von Auskunftsersuchen, Anträgen oder Beschwerden, wenden Sie sich bitte direkt an:
          <br />Enrico Trentzsch
          <br />Tel.: 0351 4852249
          <br />e-mail: info@auto-trentzsch.de
        </p>
        <h3 className='text-center mb-4 text-lg font-bold'>Beschwerderecht bei der Aufsichtsbehörde
        </h3>
        <p className="mb-10">
          Sie haben gemäß Art. 77 DSGVO das Recht, sich bei der Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
        </p>
        <div className="flex justify-center">
          <button onClick={onClose} className="bg-slate-950 text-slate-50 font-semibold py-3 px-8 rounded-full">
            Close
          </button>
        </div>
      </motion.div>
    </div >
  );
};

export default PrivacyPolicyPopup;
