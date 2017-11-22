import React from 'react';

import '@material/card/dist/mdc.card.css';
import Text from '@app/Text';
import nl2br from 'nl2br';

export default ({ actions, children, style, title, subtitle, ...rest }) => (
  <div
    style={{ padding: 16, background: 'white', ...style }}
    {...rest}
    className={`mdc-card ${rest.className || ''}`}
  >
    <section className="mdc-card__primary" style={{ paddingTop: 0 }}>
      <Text
        size="title"
        className="mdc-card__title mdc-card__title--large"
        dangerouslySetInnerHTML={{ __html: nl2br(title) }}
      />
      {subtitle ? (
        <Text size="std" tone="passive">
          {subtitle}
        </Text>
      ) : null}
    </section>
    <section
      css={{
        '&:last-child': { paddingBottom: 24 },
        paddingTop: 0,
        marginTop: -8,
        padding: '8px 16px'
      }}
    >
      <Text size="std-large" block lineHeight="1.55rem">
        {children}
      </Text>
    </section>
    {actions &&
      actions.length && (
        <section className="mdc-card__actions" children={actions} />
      )}
  </div>
);
