import React from 'react';
import Link from 'gatsby-link';

import moment from 'moment';
import nl2br from 'nl2br';

import Text from '@app/Text';
import Card from '@app/Card';
import { accentColor } from '@app/colors';

moment.locale('ro');

export default ({ news }) => (
  <div className="container-fluid" css={{ background: accentColor }}>
    <div className="container">
      <div
        className="row"
        style={{ paddingBottom: 20, paddingTop: 20, marginBottom: 20 }}
      >
        {news.map(article => {
          const ago = moment(article.date).fromNow();
          return (
            <div key={article.url} className="col-12 col-md-6">
              <Card
                className="col-12"
                title={article.title}
                subtitle={`Publicat: ${ago}.`}
                actions={[
                  <Link key={article.url} to={article.url}>
                    Citește mai mult
                  </Link>
                ]}
                children={
                  <div dangerouslySetInnerHTML={{ __html: article.summary }} />
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
