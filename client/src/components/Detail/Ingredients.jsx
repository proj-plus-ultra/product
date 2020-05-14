import React from 'react';

function Ingredients(props) {

  return (
    <p>
      The following are vegan:

      <br />
      <br />

      {props.item.name}: HYDROGENATED POLYISOBUTENE, ISODODECANE, ETHYLENE/PROPYLENE/STYRENE COPOLYMER, SYNTHETIC FLUORPHLOGOPITE, SILICA, PARFUM/FRAGRANCE, BUTYLENE/ETHYLENE/STYRENE COPOLYMER, ALUMINA, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, TIN OXIDE, IRON OXIDES (CI 77491, CI 77499), TITANIUM DIOXIDE (CI 77891).

      <br />
      <br />
    </p>
  );
}

export default Ingredients;
