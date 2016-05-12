import connectSendgrid from 'sendgrid';

const { SENDGRID_KEY, TO, FROM, SUBJECT } = process.env;

const consoleResult = (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
};

const sendgrid = connectSendgrid(SENDGRID_KEY);

sendgrid.send(
  {
    to: TO,
    from: FROM,
    subject: SUBJECT,
    html: '<a href="http://google.com">Tracking</a>',
  },
  consoleResult
);
