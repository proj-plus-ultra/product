import React from 'react';


function Detail(props) {
  let newStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={newStyle}>
      <p>
        {props.item.name}

        <br />
        <br />
        Take the Fenty Face Quiz

        INSTANT REFRESH. ON-THE-GO FILTER EFFECT.

        <br />
        <br />

        Give it to me quick:

        A universal powder that absorbs shine and diffuses the look of pores for an instant filtered look on the fly.

        <br />
        <br />

        Tell me more:

        Don’t be caught without the perfect blot. Take it from Rihanna, who blots on the fly to stay photoready 24/7. This Fenty Beauty mattifying powder contains an exclusive pore-diffusing complex that absorbs shine and gives you a natural matte refresh for an instantly filtered look—so you’re always ready for a shine-free snap.

        <br />
        <br />

        Invisimatte’s translucent blot powder is completely traceless against all skin tones and won’t cake, clog pores, creep into fine lines, or disturb makeup. And get this: It extends the wear of your foundation, too. Invismatte Blotting Powder's sleek, magnetized compact attaches to its perfect partner, the Portable Touch Up Brush, meaning that it’s easy to keep your shine-stopping essentials within reach. So touch up, touch up again, and bring on the photo ops—when we say translucent, we mean it.

        <br />
        <br />

        Fenty Beauty is 100% cruelty free.

        <br />
        <br />

        Fill Weight: 8.5 g
      </p>
    </div>
  );
}

export default Detail;
