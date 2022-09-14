window.onload = function () {
  const mainHeading = document.querySelector('.main-heading');

  function getData() {
    let parameterList = location.hash.split('#'),
      filteredParameterList = parameterList.filter(blankSpace => {
        return blankSpace !== '';
      });

    return filteredParameterList;
  }

  function displayMessage(data) {
    let [recipient, answer] = data,
      confirmedMessage = 'Thanks for your assistance',
      declinedMessage = 'Thank you any way',

      message = recipient !== 'undefined' && answer === 'confirmed' ? `${confirmedMessage} ${recipient}.` : `${declinedMessage} ${recipient}, all the best.`;

    mainHeading.innerHTML = message;

    /*gtag('event', 'reference_confirmation', { 'response': `{ 'recipient': '${recipient}', 'answer': '${answer}' }` });
    gtag('event', `reference_confirmation_${recipient}_${answer}`, `{ 'response': ${answer === 'confirmed' ? 1 : 0} }`);*/

    gtag('event', 'reference_confirmation', {
      'event_category': 'response',
      'event_label': `{ 'recipient': '${recipient}', 'answer': '${answer}', ${answer === 'confirmed' ? 1 : 0} }`
    });
    console.log(`{ 'recipient': '${recipient}', 'answer': '${answer}', ${answer === 'confirmed' ? 1 : 0} }`);

  }

  displayMessage(getData());
}

