'use strict';

const S3 = require('aws-sdk/clients/s3');
const s3 = new S3({
  apiVersion: '2006-03-01',
  region: 'ap-northeast-1',
});

module.exports.getImage = async () => {
  const params = {
    Bucket: 'apigateway-test-20211111',
    Key: 'test.png',
  };
  const data = await s3.getObject(params).promise();
  return data.Body.toString('base64');
};
