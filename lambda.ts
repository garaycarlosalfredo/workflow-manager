import config from './src/config';
//import createCompleteSubscriptionPaymentHandler from './src/complete-subscription-payment-handler';

// Enable AWS X-Ray if available in the environment
// @see https://aws.amazon.com/xray/
// if (config.xray) {
//   const AWSXRay = require('aws-xray-sdk');
//   AWSXRay.captureHTTPsGlobal(require('https'));
// }

// const completeSubscriptionPayment = createCompleteSubscriptionPaymentHandler(config);

// export {
//   deleteSubscription
// };