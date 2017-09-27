import React from 'react';

import Text from '@app/Text';

import { primaryColorDark } from '@app/colors';

const Footer = () => {
  return (
    <div
      style={{
        color: 'white',
        width: '100%',
        marginTop: 20,
        background: primaryColorDark
      }}
      css={{
        padding: '1.45rem 0px'
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
                size={'title'}
                block
                style={{ paddingBottom: 10 }}
                color="white"
              >
                Întâlniri:
              </Text>
              <Text size={'std'} block color="white">
                Duminică: 9:30 - 12:00 și 18:00 - 20:00
              </Text>
              <Text size={'std'} block color="white">
                Joi: 18:00 - 20:00
              </Text>
            </div>
            <div className="col-4">
              <Text
                size={'title'}
                block
                style={{ paddingBottom: 10 }}
                color="white"
              >
                Adresa:
              </Text>
              <Text size={'std'} block color="white">
                str Crișului nr 9, Cluj-Napoca, România
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
