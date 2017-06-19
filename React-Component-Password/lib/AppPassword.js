'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _zxcvbn = require('zxcvbn');

var _zxcvbn2 = _interopRequireDefault(_zxcvbn);

var _generatePassword = require('generate-password');

var _generatePassword2 = _interopRequireDefault(_generatePassword);

var _reactBootstrap = require('react-bootstrap');

require('bootstrap/dist/css/bootstrap.css');

require('./css/components/AppPassword.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppPassword = function (_Component) {
  _inherits(AppPassword, _Component);

  function AppPassword(props) {
    _classCallCheck(this, AppPassword);

    var _this = _possibleConstructorReturn(this, (AppPassword.__proto__ || Object.getPrototypeOf(AppPassword)).call(this, props));

    var value = props.value;

    if (value) _this.state = { password: value };else _this.state = { password: "" };

    _this.generatePassword = _this.generatePassword.bind(_this);

    return _this;
  }

  _createClass(AppPassword, [{
    key: 'handlePassChange',
    value: function handlePassChange(event) {
      this.setState({ password: event.target.value });
      if (this.props.handleFieldChange != undefined) this.props.handleFieldChange(event.target.value);
    }
  }, {
    key: 'generatePassword',
    value: function generatePassword() {
      var _props = this.props,
          length = _props.length,
          numbers = _props.numbers,
          symbols = _props.symbols,
          uppercase = _props.uppercase;

      if (typeof length === 'undefined' || !length) length = 10;
      if (typeof uppercase === 'undefined' || !uppercase) uppercase = "true";

      var pass = _generatePassword2.default.generate({ length: length, numbers: numbers, symbols: symbols, uppercase: uppercase });
      this.setState({ password: pass });
      if (this.props.handleFieldChange != undefined) this.props.handleFieldChange(pass);
    }
  }, {
    key: 'popoverGeneratePassword',
    value: function popoverGeneratePassword() {
      return _react2.default.createElement(
        _reactBootstrap.Popover,
        { id: 'popover-trigger-hover-focus', title: 'Generate Password' },
        _react2.default.createElement(
          'span',
          null,
          'Do you need a password?'
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { bsSize: 'small', className: 'StandardComponent', bsStyle: 'warning', onClick: this.generatePassword },
          'Generate'
        )
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props2 = this.props,
          show = _props2.show,
          className = _props2.className;

      var popover = this.popoverGeneratePassword();
      var component;

      var res = (0, _zxcvbn2.default)(this.state.password);
      var score = res.score;

      switch (score) {
        case 0:
        case 1:
          component = _react2.default.createElement(_reactBootstrap.Glyphicon, { className: 'StandardComponent GlyphiconDanger', glyph: 'glyphicon glyphicon-remove' });break;
        case 2:
          component = _react2.default.createElement(_reactBootstrap.Glyphicon, { className: 'StandardComponent GlyphiconWarning', glyph: 'glyphicon glyphicon-warning-sign' });break;
        case 3:
        case 4:
          component = _react2.default.createElement(_reactBootstrap.Glyphicon, { className: 'StandardComponent GlyphiconOk', glyph: 'glyphicon glyphicon-ok' });break;
      }

      var placeholder = "";
      if (this.state.password) placeholder = "";else placeholder = "password";

      if (!show) return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('input', { type: 'password', placeholder: placeholder, value: this.state.password, onChange: this.handlePassChange, className: className }),
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { delayHide: 700, placement: 'bottom', overlay: popover },
          component
        )
      );else return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('input', { type: 'text', placeholder: placeholder, value: this.state.password, onChange: this.handlePassChange, className: className }),
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { delayHide: 700, placement: 'bottom', overlay: popover },
          component
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this.renderInput()
      );
    }
  }]);

  return AppPassword;
}(_react.Component);

exports.default = AppPassword;
module.exports = exports['default'];
//# sourceMappingURL=AppPassword.js.map