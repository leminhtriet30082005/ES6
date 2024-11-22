const items = ['no-var', 'var-on-top', 'line-break'];
const listItems = items.map(item => `<li>${item}</li>`).join('');
console.log(listItems);