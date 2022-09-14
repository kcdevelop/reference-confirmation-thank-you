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
      recipientText = data.length > 0 ? ' ' + recipient : '';

    message = recipient && answer === 'confirmed' ? `${confirmedMessage} ${recipient}.` : `${declinedMessage}${recipientText}, all the best.`;

    mainHeading.innerHTML = message;

    gtag('event', 'reference_confirmation', {
      'event_category': 'response',
      'event_label': `{ 'recipient': '${recipient}', 'answer': '${answer}', ${answer === 'confirmed' ? 1 : 0} }`
    });
  }

  displayMessage(getData());
}

