/* eslint-disable max-len */
import React from 'react';

import Base from 'src/common/components/Base';
import { classes as classesProps } from 'src/common/classes';
import headerImage from './header-home.jpg';


const LegalMention = ({ classes }) => (
  <Base>
  <img className={classes.image} src={headerImage} alt="header" style={{backgroundPosition: 'left'}} />
    <div className={classes.legalMentionContainer}>
      <h3>Conditions d'utilisation</h3>
      <div>
        Le site accessible par les url suivants : www.projetsde.dev est exploité dans le respect de la législation française.
        L'utilisation de ce site est régie par les présentes conditions générales. En utilisant le site,
        vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées.
        Celles-ci pourront êtres modifiées à tout moment et sans préavis par les developpeurs de Projets de dev.<br />
        Projets de dev ne saurait être tenu pour responsable en aucune manière d’une mauvaise utilisation du service.
      </div>
      <h3>Limitation de responsabilité</h3>
      <div>
        Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour,
        mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune,
        erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler à travers la page de contact en décrivant le problème de la manière
        la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé, …).
        Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence,
        Projets de dev ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou
        d'une quelconque perte de données consécutives au téléchargement.
      </div>
      <h3>Litiges</h3>
      <div>
        <div>
          Les présentes conditions sont régies par les lois françaises et toute contestation ou litiges qui
          pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des
          tribunaux dont dépend le   siège social de la société Projets de dev. La langue de référence, pour le règlement de contentieux éventuels, est le français.
        </div>
        <h3>Déclaration à la CNIL</h3>
        <div>
          Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à
          la protection des personnes physiques à l'égard des traitements de données à caractère personnel) relative à l'informatique,
          aux fichiers et aux libertés, le site a fait l'objet d'une déclaration auprès de la Commission nationale de l'informatique et des libertés (www.cnil.fr).
        </div>
        <h3>Droit d'accès</h3>
        <div>
          En application de cette loi, les internautes disposent d’un droit d’accès, de rectification, de modification et de suppression
          concernant les données qui les concernent personnellement. Ce droit peut être exercé à travers la page de contactde Projets de dev,
          ou par voie électronique à l’adresse email suivante : rgpd@projetsde.dev.
          Les informations personnelles collectées ne sont en aucun cas confiées à des tiers.
        </div>
        <h3>Confidentialité</h3>
        <div>
          Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers.
        </div>
        <h3>Propriété intellectuelle</h3>
        <div>
          Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations,
          sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de Projets de dev à l'exception des marques,
          logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.<br/>
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
          de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Projets de dev.
          Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée
          par les articles L.335-2 et suivants du Code de la propriété intellectuelle.<br/>
          Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
          En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.<br/>
        </div>
      </div>

      <h3> Hébergeur</h3>
      <div>
        <div>O2Switch</div>
        <div>o2switch est une société Française offrant des services d'hébergement web depuis 2003</div>
        <div>https://www.o2switch.fr/</div>
        <div>support@o2switch.fr</div>
      </div>

      <h3>Conditions de service</h3>
      <div>
        Ce site est développé en React avec Materiel UI en front et Node.JS / Express en back, pour un meilleur confort d'utilisation et un graphisme plus agréable,
        nous vous recommandons de recourir à des navigateurs modernes comme Safari, Firefox ou Chrome.
      </div>

      <h3>Informations et exclusion</h3>
      <div>
        Projets de dev met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.
        Toutefois, des erreurs ou omissions peuvent survenir.
        L'internaute devra donc s'assurer de l'exactitude des informations auprès de Projets de dev,
        et signaler toutes modifications du site qu'il jugerait utile.
        Projets de dev n'est en aucun cas responsable de l'utilisation faite de ces informations,
        et de tout préjudice direct ou indirect pouvant en découler.
      </div>
      <h3>Cookies</h3>
      <div>
        Pour des besoins de statistiques et d'affichage, le présent site utilise des cookies.
        Il s'agit de petits fichiers textes stockés sur votre disque dur afin d'enregistrer des données techniques sur votre navigation.
        Certaines parties de ce site ne peuvent être fonctionnelle sans l’acceptation de cookies.
      </div>
      <h3>Liens hypertextes</h3>
      <div>
        Projets de dev peut offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet, certains peuvent contenir des liens d'affiliations.
      </div>
      <div>
        Projets de dev permet a ses utilisateurs d'ajouter des liens dans les profiles et projets, mais risque de ne pas controler ou vérifier ces derniers<br />
        Projets de dev ne répond pas de la disponibilité de tels sites et sources externes, ni de leur garantie.<br />
        Projets de dev  ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit,
        résultant du contenu de ces sites ou sources externes, et notamment des informations,
        produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. <br />
        Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation. <br />
        Projets de dev se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision. <br />
      </div>
      <h3>Précautions d'usage</h3>
      <div>
        En outre, le renvoi sur un site internet pour compléter une information recherchée ne signifie en aucune
        façon que Projets de dev reconnaît ou accepte quelque responsabilité quant à la teneur ou à l'utilisation dudit site.
      </div>
      <div>
        Il vous incombe par conséquent de prendre les précautions d'usage nécessaires pour vous assurer
        que ce que vous choisissez d'utiliser ne soit pas entaché d'erreurs voire d'éléments de nature destructrice tels que virus, trojans, etc....
      </div>
      <h3>Responsabilité</h3>
      <div>
        Aucune autre garantie n'est accordée au client, auquel incombe l'obligation de formuler clairement ses besoins et le devoir de s'informer.
        Si des informations fournies par Projets de dev apparaissent inexactes,
        il appartiendra au client de procéder lui-même à toutes vérifications de la cohérence ou de la vraisemblance des résultats obtenus.
        Projets de dev ne sera en aucune façon responsable vis à vis des tiers de l'utilisation par
        le client des informations ou de leur absence contenues dans ses produits y compris un de ses sites Internet.
      </div>
      <h3>Contactez-nous</h3>
      <div>
        Projets de dev est à votre disposition pour tous vos commentaires ou suggestions.
        Vous pouvez nous écrire à travers la page de contact.
      </div>
    </div>
  </Base>
);

LegalMention.propTypes = {
  ...classesProps,
};

export default LegalMention;
