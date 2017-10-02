import React from 'react';

import Text from '@app/Text';

import { primaryColorDark } from '@app/colors';

import ExternalLink from '@app/ExternalLink';

import { css } from 'glamor';

const timeStyle = {
  display: 'inline-block',
  marginTop: 2
};

const Footer = () => {
  return (
    <div
      css={{
        flex: 'none',
        color: 'white',
        width: '100%',
        marginTop: 20,
        padding: '1.45rem 0px',
        background: primaryColorDark
      }}
      className={'container-fluid'}
    >
      <div className="row">
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ textAlign: 'end' }}
          >
            <div className="col-4" />
            <div className="col-4">
              <Text
                size={'std-large'}
                block
                style={{ paddingBottom: 10 }}
                color="white"
              >
                Întâlniri:
              </Text>
              <Text size={'std'} block color="white">
                <code css={timeStyle}>
                  Duminică: 9:30 – 12:00 & 18:00 – 20:00
                </code>
              </Text>

              <Text size={'std'} block color="white">
                <code css={timeStyle}>Joi: 18:00 – 19:30</code>
              </Text>
            </div>
            <div className="col-4">
              <Text
                size={'std-large'}
                block
                style={{ paddingBottom: 10 }}
                color="white"
              >
                Adresa:
              </Text>

              <ExternalLink
                href="https://maps.google.com/maps?ll=46.778774,23.622164&z=16&t=m&hl=ro-RO&gl=RO&mapclient=embed&cid=5720872781647931140"
                color="white"
              >
                <Text
                  size={'std'}
                  css={{
                    paddingBottom: 2
                  }}
                  color="white"
                >
                  str Crișului nr 9, Cluj-Napoca, România
                </Text>{' '}
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
