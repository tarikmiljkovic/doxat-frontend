import { useEffect, useState } from "react";

function PropChangeWatch({ a, b }) {
  useEffect(() => {
    console.log("value of 'a' changed to", a);
  }, [a]);

  return (
    <div>
      I've got 2 props: a={a} and b={b}
    </div>
  );
}

export default PropChangeWatch;
