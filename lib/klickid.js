"use client";

import { useEffect } from "react";

/**
 * Annonsens klick-id, fångat vid ankomst och buret till formuläret.
 *
 * Varför modulnivå och inte state: state följer komponenten. Klickar besökaren
 * sig vidare från landningssidan monteras den om, URL:en har tappat parametern,
 * och attributionen är borta. Exakt det felet kostade tryggadokument.se all
 * mätning: 0 av 2 betalningar bar klick-id trots 220 annonsklick.
 *
 * Varför inte cookie, localStorage eller sessionStorage: sajten är medvetet
 * kakfri. ePrivacy artikel 5(3) gäller ALL lagring på besökarens enhet, inte
 * bara kakor, så vilken som helst av dem hade tvingat fram en samtyckesruta.
 * En modulvariabel är flyktigt minne i fliken och räknas inte som lagring.
 *
 * wbraid och gbraid ersätter gclid när kakor saknas, vilket är regel i EU.
 * Google har ett eget fält per sort och avvisar raden om fel fält används, så
 * sorten följer med som prefix hela vägen till uppladdaren.
 */

let cachatKlickId = "";

/** Läses vid submit. Tom sträng betyder trafik som inte kom från en annons. */
export function klickId() {
  return cachatKlickId;
}

/** Renderas en gång i rot-layouten. Ritar inget, fångar bara id:t vid ankomst. */
export function KlickIdFangare() {
  useEffect(() => {
    if (cachatKlickId) return;
    try {
      const q = new URLSearchParams(window.location.search);
      for (const sort of ["gclid", "wbraid", "gbraid"]) {
        const varde = q.get(sort);
        if (varde) {
          const ren = varde.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 200);
          if (ren) cachatKlickId = `${sort}:${ren}`;
          return;
        }
      }
    } catch {
      /* trasig adressrad ska aldrig fälla sidan */
    }
  }, []);

  return null;
}
