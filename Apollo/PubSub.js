// const { RedisPubSub } = require('graphql-redis-subscriptions');
const { PubSub } = require('graphql-subscriptions')

const pubSub = new PubSub()


exports.pubSub = pubSub;