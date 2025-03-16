'use strict';

/**
 * druka service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::druka.druka');
