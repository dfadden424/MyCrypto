import React from 'react';

import { AnalyticsService, ANALYTICS_CATEGORIES } from 'v2/services';
import { CRYPTOSCAMDB, getKBHelpArticle, KB_HELP_ARTICLE, EXT_URLS } from 'v2/config';
import { translateRaw } from 'v2/translations';
import './Linkset.scss';

const LINK_COLUMNS = [
  {
    heading: translateRaw('NEW_FOOTER_TEXT_6'),
    links: [
      {
        title: 'MyCrypto.com',
        link: 'https://www.mycrypto.com/',
        analytics_event: 'MyCrypto.com'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_7'),
        link: getKBHelpArticle(KB_HELP_ARTICLE.HOME),
        analytics_event: 'Help & Support'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_8'),
        link: 'https://about.mycrypto.com/',
        analytics_event: 'Our Team'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_9'),
        link: 'mailto://press@mycrypto.com',
        analytics_event: 'Press'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_10'),
        link: 'https://about.mycrypto.com/privacy/',
        analytics_event: 'Privacy Policy'
      }
    ]
  },
  {
    heading: translateRaw('NEW_FOOTER_TEXT_11'),
    links: [
      {
        title: 'Ledger Wallet',
        link: EXT_URLS.LEDGER_REFERRAL.url,
        analytics_event: 'Ledger Wallet'
      },
      {
        title: 'Trezor',
        link: EXT_URLS.TREZOR_REFERRAL.url,
        analytics_event: 'TREZOR'
      },
      {
        title: 'Ether.cards',
        link: EXT_URLS.ETHER_CARD_REFERRAL.url,
        analytics_event: 'ether.card'
      }
    ]
  },
  {
    heading: translateRaw('NEW_FOOTER_TEXT_12'),
    links: [
      {
        title: 'EtherAddressLookup',
        link:
          'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn',
        analytics_event: 'EtherAddressLookup'
      },
      {
        title: 'CryptoScamDB',
        link: CRYPTOSCAMDB,
        analytics_event: 'CryptoScamDB'
      },
      {
        title: 'MoneroVision',
        link: 'https://monerovision.com/',
        analytics_event: 'MoneroVision'
      },
      {
        title: 'FindETH',
        link: 'https://findeth.io',
        analytics_event: 'FindETH'
      }
    ]
  }
];

const trackLinkClicked = (linkName: string): void => {
  AnalyticsService.instance.track(ANALYTICS_CATEGORIES.FOOTER, `${linkName} link clicked`);
};

export default function Linkset() {
  return (
    <section className="Footer-Linkset">
      {LINK_COLUMNS.map(({ heading, links }) => (
        <section key={heading} className="Linkset-column">
          <h2>{heading}</h2>
          <ul>
            {links.map(({ title, link, analytics_event }) => (
              <li key={title}>
                <a href={link} onClick={() => trackLinkClicked(analytics_event)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
