export function getSection(num) {
  return document.querySelector(`span[data-number='${num}']`).closest('div')
    .dataset.section;
}
console.log(getSection('1'));
