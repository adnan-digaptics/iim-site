async function validate() {
  try {
    const res = await fetch('http://localhost:3000/living-organ-donation');
    console.log('STATUS:', res.status);
    const text = await res.text();
    console.log('Length:', text.length);
    console.log('Has overview:', text.includes('id="overview"'));
    console.log('Has aims:', text.includes('id="aims"'));
    console.log('Has context:', text.includes('id="context"'));
    console.log('Has approach:', text.includes('id="approach"'));
    console.log('Has publications:', text.includes('id="publications"'));
    console.log('Has resources:', text.includes('id="resources"'));
    console.log('Has media:', text.includes('id="media"'));
    console.log('Has support:', text.includes('id="support"'));
    console.log('Has hero badge:', text.includes('FAITH • ETHICS • COMMUNITY'));
    console.log('Has supporters:', text.includes('Mahsin Habib'));
    console.log('Has CTA:', text.includes('Building understanding for better healthcare decisions'));
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

validate();
