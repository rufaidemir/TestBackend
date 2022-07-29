const { mergeResolvers } = require('@graphql-tools/merge');

const testModelResolver  = require('./TestModelResolver');




exports.rootResolver = mergeResolvers([
    testModelResolver,
]);