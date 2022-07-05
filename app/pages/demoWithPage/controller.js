/**
 * Module dependencies
 */
const React = require('react');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');
const demoService = require('../../../services/demo');
const View = require('./view');

const { basePath } = config.ragnar;

/**
 * Fetch Site data
 */
exports.fetchSiteData = function fetchSiteData(req, res, next) {
  demoService.getSite(req.platform.siteId)
    .then((data) => {
      res.locals.site = data;
      next();
    })
    .catch(err => next(err));
};

/**
 * Render Demo
 */
exports.render = function render(req, res) {
  /**
   * View with I18nProvider
   */
  const Demo = props => (
    <I18nProvider i18n={req.i18n}>
      <View {...props} />
    </I18nProvider>
  );

  /**
   * Render View
   */
  res.render(Demo, {
    baseURL: `${basePath}demo`,
    site: res.locals.site,
    siteId: req.platform.siteId,
    lowEnd: req.device.lowEnd,
    deviceType: req.device.type,
    translations: req.translations,
    company: config.get('companyName', req.platform.id, req.platform.siteId),
  }, {
    layoutOptions: {
      staticMarkup: false,
    },
    navigationOptions: {
      type: 'full',
    },
  });
};
