import { memo } from 'react';

import type { FullOffer } from '../../../../types/offer';

type HostProps = {
  description: string;
  host: FullOffer['host'];
};

function HostInner({ description, host }: HostProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={`offer__avatar-wrapper user__avatar-wrapper ${host.isPro && 'offer__avatar-wrapper--pro'}`}
        >
          <img
            className="offer__avatar user__avatar"
            src={host.avatarUrl}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{host.name}</span>
        {host.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}

const Host = memo(HostInner);

export default Host;
