window.onload = function () {
  const htmlDoc = document.querySelector('body'),
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    recipients = ['Glenn', 'Chris', 'Deena', 'Molly'],
    closingTitle = 'Former HZ Front End Developer';

  function todaysDate() {
    let today = new Date(),
      month = months[today.getMonth()],
      day = today.getDate(),
      year = today.getFullYear(),
      fullDate = `${month} ${day}, ${year}`;

    return fullDate;
  }

  function displayMessage(recipientData, index) {
    let newEmail = `
      <!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width initial-scale=1.0 user-scalable=no" />
          <title>Request Email</title>

          <style type="text/css">
            a:link,
            span.MsoHyperlink {
              mso-style-priority: 99;
              text-decoration: none;
            }
            .calendar-cta {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              border: 1px solid #000;
              border-radius: 5px;
              color: white;
              letter-spacing: .045em;
              font-family: arial;
              font-size: 14px;
              font-weight: bold;
              padding: 2px 4px;
              width: 100px;
              height: 30px;
              user-select: none;
            }
            .confirm-cta {
              background-color: #19b119;
            }
            .decline-cta {
              background-color: #f0722e;
            }
            @media screen and (max-width: 640px) {
              .percent100 {
                width: 100% !important;
                min-width: 100% !important;
                max-width: 100% !important;
              }
              .percent95 {
                width: 95% !important;
                min-width: 95% !important;
                max-width: 95% !important;
              }
              .percent85 {
                width: 85% !important;
                min-width: 85% !important;
                max-width: 85% !important;
              }
              .percent-auto {
                width: auto !important;
                min-width: auto !important;
                max-width: auto !important;
              }
              .height-auto {
                height: auto !important;
                min-height: auto !important;
                max-height: auto !important;
              }
              .mobile-padding-sp8 {
                padding-bottom: 8px !important;
              }
              .mobile-padding-sp15 {
                padding-bottom: 15px !important;
              }
              .mobile-vertical-spacer14 {
                height: 14px !important;
              }
              .mobile-hide {
                width: 0px !important;
                height: 0px !important;
                font-size: 0px !important;
                line-height: 0px !important;
                mso-hide: all !important;
                display: none !important;
                max-height: 0px !important;
                overflow: hidden !important;
                border-collapse: collapse !important;
              }
              .mobile-no-float {
                float: none !important;
              }
              .mobile-break-top {
                display: table-header-group !important;
              }
              .mobile-inversion-bottom {
                display: table-footer-group !important;
              }
              .mobile-center {
                margin: 0px auto !important;
              }
              .mobile-text-center {
                text-align: center !important;
              }
              .mobile-show {
                display: block !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0px; padding: 0px;">
          <table id='email-${index}' border="0" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;"">
            <tbody>
              <tr>
                <td class=" vertical-spacer mobile-vertical-spacer14" width="100%" height="25" style="width: 100%;"></td>
              </tr>
              <tr>
                <td width="100%" align="center" valign="top" style="width: 100%; margin: 0px; padding: 0px;">
                  <table class="percent95" width="580" border="0" cellpadding="0" cellspacing="0" style="max-width: 580px; min-width: 580px; margin: 0px; padding: 0px; border: 1px solid #000;">
                    <tbody>
                      <tr>
                        <td class="vertical-spacer percent-auto" width="580" height="25" style="width: 580px; min-width: 580px; max-width: 580px; height: 25px; margin: 0px; padding: 0px;"></td>
                      </tr>
                      <tr>
                        <td class="page percent-auto" width="580" align="center" valign="top" style="width: 580px; min-width: 580px; max-width: 580px; margin: 0px; padding: 0px;">
                          <table class="header-frame percent85" width="500" border="0" cellpadding="0" cellspacing="0" style="width: 500px; max-width: 500px; min-width: 500px; margin: 0px; padding: 0px;">
                            <tbody>
                              <tr>
                                <td class="header percent-auto" width="500" align="left" valign="top"
                                  style=" width: 500px; max-width: 500px; min-width: 500px; margin: 0px; padding: 0px;">
                                    <table class="logo-frame mobile-no-float" border="0" cellpadding="0" cellspacing="0" style="float: left;">
                                        <tr>
                                          <td class="logo height-auto mobile-padding-sp8" align="left" valign="middle" width="117" height="107" style="width: 117px; max-width: 117px; min-width: 117px; height: 107px; margin: 0px; padding: 0px;">
                                            <img class="logo" width="117" height="107" align="left" valign="middle" src="https://kcdevelop.github.io/reference-confirmation-thank-you/images/kc-smile-avatar.png" alt="avatar" style="width: 117px; max-width: 117px; min-width: 117px; height: 107px; max-height: 107px; min-height: 107px; display: block; margin: 0px; padding: 0px;" />
                                          </td>
                                          <td class="vertical-spacer" width="15" height="107" style="width: 15px; height: 107px; margin: 0px; padding: 0px;">
                                          </td>
                                        </tr>
                                    </table>
                                    <table class="information-frame percent-auto mobile-no-float" border="0" cellpadding="0" cellspacing="0" width="290"
                                      style="width: 290px; min-width: 290px; max-width: 290px; float: left;">
                                      <tr>
                                        <td class="information percent-auto height-auto" align="left" valign="middle" width="290" height="107" style="width: 290px; max-width: 290px; min-width: 290px; height: 107px; margin: 0px; padding: 0px;">
                                          <table class="contact" border="0" cellpadding="0" cellspacing="0">
                                              <tbody>
                                                  <tr>
                                                      <td class="name" align="left" valign="top" colspan="2" style="margin: 0px; padding: 0px 0px 2px; border-bottom: 2px solid #00ba1b; font-family: arial; font-size: 17px; color: #000;">
                                                          Kenneth Corbin
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="icon" width="17" height="17" align="left" valign="middle" style="width: 17px; max-width: 17px; min-width: 17px; height: 17px; max-height: 17px; min-height: 17px; margin: 0px; padding: 4px 4px 0px 0px;">
                                                          <img class="contact-icon" width="17" height="17" align="left" valign="middle" src="https://kcdevelop.github.io/reference-confirmation-thank-you/images/email-icon.png" alt="Email Icon" style="width: 17px; max-width: 17px; min-width: 17px; height: 17px; max-height: 17px; min-height: 17px; display: block; margin: 0px; padding: 0px;" />
                                                      </td>
                                                      <td class="email" align="left" valign="middle" style="margin: 0px; padding: 4px 0px 0px; font-family: arial; font-size: 14px; line-height: 20px; color: #000;">
                                                          <a href="mailto:corbincoding@gmail.com" style="font-family: arial; text-decoration: none !important; color: #000 !important;">corbincoding@gmail.com</a>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="icon" width="17" height="17" align="left" valign="middle" style="width: 17px; max-width: 17px; min-width: 17px; height: 17px; max-height: 17px; min-height: 17px; margin: 0px; padding: 4px 4px 0px 0px;">
                                                          <img class="contact-icon" width="17" height="17" align="left"
                                                              valign="middle" src="https://kcdevelop.github.io/reference-confirmation-thank-you/images/phone-icon.png" alt="Phone Icon" style="width: 17px; max-width: 17px; min-width: 17px; height: 17px; max-height: 17px; min-height: 17px; display: block; margin: 0px; padding: 0px;" />
                                                      </td>
                                                      <td class="phone" align="left" valign="middle" style="margin: 0px; padding: 4px 0px 0px; font-family: arial; font-size: 14px; line-height: 20px; color: #000;">
                                                          <a href="tel:1+301-704-3786" style="font-family: arial; text-decoration: none !important; color: #000 !important;">301-704-3786</a>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="letter-content percent85" width="500" border="0" cellpadding="0" cellspacing="0" style="width: 500px; margin: 0px; padding: 0px;">
                            <tbody>
                              <tr>
                                  <td class="vertical-spacer percent-auto" width="500" height="25" style="width: 500px; min-width: 500px; max-width: 500px; height: 25px; min-height: 25px; max-height: 25px; margin: 0px; padding: 0px;">
                              </tr>
                              <tr>
                                <td class="reason percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px 0px 12px; font-family: arial; font-size: 14px; font-weight: bold; line-height: 17px; color: #000;">
                                  RE: Letter of Reference Request
                                </td>
                              </tr>
                              <tr>
                                <td class="date percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px 0px 12px; font-family: arial; font-size: 14px; color: #000;">
                                  <table class="date-option" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                      <tr>
                                        <td class="date-text" align="left" valign="top" style="font-family: arial; font-size: 14px; line-height: 17px;">
                                          <a href="#" style="font-family: arial; font-size: 14px; text-decoration: none !important; color: #000 !important;">${todaysDate()}</a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="greeting percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px 0px 8px; font-family: arial; font-size: 14px; line-height: 17px; color: #000;">
                                  Hi ${recipientData},
                                </td>
                              </tr>
                              <tr>
                                <td class="text-content percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px 0px 8px; font-family: arial; font-size: 14px; line-height: 21px; color: #000;">
                                  This is Kenneth who use to work as a developer at HZ. I trust this email finds you well. Recently, I have returned to the job market, and I need to obtain professional letters of reference. Therefore, I am reaching out to see if you would be willing to provide me with said letter of reference&mdash;in a PDF or Word format.
                                </td>
                              </tr>
                              <tr>
                                <td class="text-content percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px 0px 11px; font-family: arial; font-size: 14px; line-height: 21px; color: #000;">
                                  If so, the letter must be dated and include your contact information. Please confirm or decline below, so that I can set reasonable expectations&mdash;or reply to this email with a &ldquo;Confirm&rdquo; or &ldquo;Decline.&rdquo; Thank you in advance for your consideration of this request.
                                </td>
                              </tr>
                              <tr>
                                <td class="cta-contnet percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px;">
                                  <table class="logo-frame mobile-no-float" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td class="cta-left" align="left" valign="top" style="margin: 0px; padding: 0px 0px 12px;">
                                        <a class="cta-link cta-link-yes" href="http://127.0.0.1:5555/reference-thank-you.html#${recipientData}#confirmed" target="_blank">
                                          <button class="calendar-cta confirm-cta">Confirm</button>
                                        </a>
                                      </td>
                                      <td class="vertical-spacer" width="8" style="width: 8px; margin: 0px; padding: 0px;">
                                      </td>
                                      <td class="cta-right" align="left" valign="top" style="margin: 0px; padding: 0px 0px 12px;">
                                        <a class="cta-link cta-link-no" href="http://127.0.0.1:5555/reference-thank-you.html#${recipientData}#declined" target="_blank">
                                          <button class="calendar-cta decline-cta">Decline</button>
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-content percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px 0px 8px; font-family: arial; font-size: 14px; line-height: 17px; color: #000;">
                                  Sincerely,
                                </td>
                              </tr>
                              <tr>
                                <td class="text-content percent-auto" width="500" align="left" valign="top" style="width: 500px; margin: 0px; padding: 0px; font-family: arial; font-size: 14px; line-height: ${closingTitle !== '' ? '20px' : '17px'}; color: #000;">
                                  Kenneth Corbin${closingTitle !== '' ? ',<br />' + closingTitle : ''}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td class="vertical-spacer percent-auto" width="500" height="25" style="width: 500px; min-width: 500px; max-width: 500px; height: 25px; min-height: 25px; max-height: 25px;margin: 0px; padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    let newEmailCode = `<textarea class="email-code" style="display: block; height: 250px;
        width: 580px; margin: 0px auto;">${newEmail}</textarea>`;

    return `${newEmail}<br />${newEmailCode}`;
  }

  function generateEmail(recipients) {
    recipients.forEach((recipient, index) => {
      htmlDoc.insertAdjacentHTML('beforeend', displayMessage(recipient, index));
    });
  }

  generateEmail(recipients);
}