import { ENDPOINT } from "../../config/global.json";

export const verification = (token: string) =>
  `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Email</title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body,
    table,
    td,
    a {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    a[x-apple-data-detectors] {
      font-family: inherit !important;
      font-size: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      width: 100% !important;
      height: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
      background-color: #031c29;
      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    }

    .wrapper {
      display: grid;
      justify-content: center;
      margin-top: 30px;
    }

    .container {
      width: 400px;
    }

    header {
      text-align: center;
      color: rgba(255, 255, 255, 0.308);
    }

    main {
      padding: 30px 50px;
      background-color: white;
      border-top: 5px solid #ffaf2d;
      margin: 20px 0px;
      border-radius: 5px;
    }

    main .title {
      margin-bottom: 10px;
    }

    main p {
      line-height: 1.3em;
      color: rgba(0, 0, 0, 0.75);
    }

    a {
      display: block;
      padding: 15px 20px;
      border-radius: 5px;
      text-align: center;
      background-color: #ffaf2d;
      text-decoration: none;
      color: #000;
      margin-top: 30px;
      margin-bottom: 5px;
      font-weight: 600;
    }

    a:hover {
      background-color: #e79819;
    }

    footer {
      padding: 0px 50px;
      color: white;
      text-align: center;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">

      <header>
        <h3>CloudBoz</h3>
      </header>
      <main>
        <h1 class="title">Almost there!</h1>
        <p>Thank you for registering to CloudBoz.
          To confirm your email address, please click link below</p>
        ${ENDPOINT + /verify/ + token}
      </main>
      <footer>
        <p>You received this email because you just signed up for a new account</p>
      </footer>
    </div>
  </div>
</body>

</html>
  `;

export const forget = (token: string) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Email</title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body,
    table,
    td,
    a {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    a[x-apple-data-detectors] {
      font-family: inherit !important;
      font-size: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      width: 100% !important;
      height: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
      background-color: #031c29;
      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    }

    .wrapper {
      display: grid;
      justify-content: center;
      margin-top: 30px;
    }

    .container {
      width: 400px;
    }

    header {
      text-align: center;
      color: rgba(255, 255, 255, 0.308);
    }

    main {
      padding: 30px 50px;
      background-color: white;
      border-top: 5px solid #ffaf2d;
      margin: 20px 0px;
      border-radius: 5px;
    }

    main .title {
      margin-bottom: 10px;
    }

    main p {
      line-height: 1.3em;
      color: rgba(0, 0, 0, 0.75);
    }

    a {
      display: block;
      padding: 15px 20px;
      border-radius: 5px;
      text-align: center;
      background-color: #ffaf2d;
      text-decoration: none;
      color: #000;
      margin-top: 30px;
      margin-bottom: 5px;
      font-weight: 600;
    }

    a:hover {
      background-color: #e79819;
    }

    footer {
      padding: 0px 50px;
      color: white;
      text-align: center;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">

      <header>
        <h3>CloudBoz</h3>
      </header>
      <main>
        <h1 class="title">Reset password</h1>
        <p>To confirm your email address, please click link below. Dismiss this email if you never request to reset password.</p>
        ${ENDPOINT + /verify/ + token}
      </main>
      <footer>
        <p>You received this email because you just request to reset your password.</p>
      </footer>
    </div>
  </div>
</body>

</html>
  `;
