const byId = id => document.getElementById(id);
const show = (id, visible) => { byId(id).hidden = !visible; };
byId('show-summary').addEventListener('click', () => {
  byId('chosen-job').textContent = byId('job').value;
  byId('chosen-time').textContent = byId('timing').value;
  show('intake', false); show('summary', true); show('followup', false);
  byId('stage').textContent = '02 / Samlat underlag';
  byId('summary-heading').focus();
});
byId('show-followup').addEventListener('click', () => {
  show('followup', true);
  byId('stage').textContent = '03 / Nästa steg';
  byId('followup-heading').focus();
});
byId('reset').addEventListener('click', () => {
  show('intake', true); show('summary', false); show('followup', false);
  byId('stage').textContent = '01 / Kundens första steg';
  byId('job').selectedIndex = 0; byId('timing').selectedIndex = 0;
  byId('job').focus();
});
