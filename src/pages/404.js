import React from 'react';
import Link from 'gatsby-link';

import Text from '@app/Text';

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Text size={'headline'} block>
            Pagina nu există!
          </Text>
          <Text size={'std-large'}>
            <p>
              Mergeți înapoi <Link to="/">acasă</Link>, sau, mai bine,
              vizitați-ne în Cluj-Napoca,{' '}
              <Link to="/contact">pe str Crișului nr 9</Link>.
            </p>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
