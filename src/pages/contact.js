import React from 'react';
import Link from 'gatsby-link';

import Text from '@app/Text';
import { primaryTextColor } from '@app/colors';
import ExternalLink from '@app/ExternalLink';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <Text
              size={'title'}
              block
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              Adresa:
            </Text>

            <ExternalLink
              href="https://maps.google.com/maps?ll=46.778774,23.622164&z=16&t=m&hl=ro-RO&gl=RO&mapclient=embed&cid=5720872781647931140"
              color={primaryTextColor}
            >
              <Text size={'std-large'} itemProp="streetAddress">
                str Crișului nr 9,
              </Text>{' '}
              <Text size="std-large" itemProp="addressLocality">
                Cluj-Napoca, România
              </Text>
            </ExternalLink>

            <Text block size="std-large" itemProp="name">
              Biserica Creștină după Evanghelie Cluj-Napoca
            </Text>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Text size={'title'} block>
              Program întâlniri:
            </Text>
            <Text size={'std-large'} block>
              Duminică: 09:30 - 12:00 și 18:00 - 20:00
            </Text>
            <Text size={'std-large'} block>
              Joi: 18:00 - 19:30
            </Text>
            <hr />
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <iframe
            className="col"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5464.5914252873345!2d23.617786933252322!3d46.77877715278646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c117db1ea2d%3A0x4f649f7c03536704!2sBiserica+Cre%C8%99tin%C4%83+dup%C4%83+Evanghelie!5e0!3m2!1sro!2sro!4v1504732678153"
            frameBorder="0"
            style={{ border: 0, minHeight: 600 }}
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Contact;
