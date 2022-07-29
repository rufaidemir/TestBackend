const { mergeTypeDefs} = require('graphql-tools');

const { testModelSchema} = require('./TestModelSchema');



exports.mainSchema = mergeTypeDefs([
    testModelSchema,

]);