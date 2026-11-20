import React from 'react';
import { LotusIcon, OrnamentalDivider } from './Ornaments';

export default function CherishedMemoriesSection() {
  return (
    <section className="cherished-memories-section" id="cherished-memories">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="gallery-header-block arrival-item" style={{ '--delay': '0.1s' }}>
          <LotusIcon size={34} color="var(--color-gold)" className="mb-2" />
          <h2 className="gallery-section-title">Cherished Moments</h2>
          <OrnamentalDivider className="my-2" />
          <p className="gallery-section-subtext">
            Capturing the smiles, laughter, and timeless glimpses of our voyage together
          </p>
        </div>

        {/* Arch Card Placeholder Frame */}
        <div className="cherished-carousel-wrapper arrival-item" style={{ '--delay': '0.2s' }}>
          <div className="cherished-arch-card">
            {/* The Golden Arch Window Frame */}
            <div className="cherished-arch-window-outer">
              <div className="cherished-arch-window-inner cherished-placeholder-view">
                <div className="cherished-placeholder-art">
                  <span className="cherished-placeholder-icon">🪷</span>
                  <p className="cherished-placeholder-text">Moments of Joy &amp; Grace</p>
                  <span className="cherished-placeholder-sub">Photographs to be updated soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
