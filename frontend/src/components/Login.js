import React, { useEffect } from 'react';
import '../App.css';

function Login() {

  useEffect(() => {
    var CLASSES = {
      button: 'btn',
      checkbox: 'toggle__checkbox',
      container: 'mainContainer',
      form: '[data-toggle="form"]',
      input: 'inputfield__input',
      inputfield: 'inputfield',
    };

    var IS_ACTIVE = 'is-active';
    var IS_ANIMATING = 'is-animating';
    var IS_DIRTY = 'is-dirty';

    var CONTAINER_CLASSES = ['is-amnesia', 'is-login', 'is-register'];

    var BUTTON = document.querySelectorAll('.' + CLASSES.button);
    var CHECKBOX = document.querySelectorAll('.' + CLASSES.checkbox);
    var CONTAINER = document.getElementById(CLASSES.container);
    var FORMTOGGLE = document.querySelectorAll(CLASSES.form);
    var INPUTFIELD = document.querySelectorAll('.' + CLASSES.inputfield);

    var whichAnimationEvent = function () {
      var a;
      var el = document.createElement('loginfakeelement');
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (a in animations) {
        if (el.style[a] !== undefined) {
          return animations[a];
        }
      }

      return false;
    };

    var mobileCheck = function () {
      var check = false;

      (function (a) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)) {
          check = true;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    };

    var eventType = mobileCheck() ? 'touchstart' : 'click';
    var eventBtn = mobileCheck() ? 'touchstart' : 'mousedown';
    var animationEnd = whichAnimationEvent();

    var animationClassToggle = function () {
      this.classList.add(IS_ANIMATING);

      if (!animationEnd) {
        this.classList.remove(IS_ANIMATING);
        return;
      }

      animationEnd && this.addEventListener(animationEnd, function () {
        if (this.classList.contains(IS_ANIMATING)) {
          this.classList.remove(IS_ANIMATING);
        }
      });
    };

    [].slice.call(CHECKBOX).forEach(function (el) {
      el.addEventListener(eventBtn, animationClassToggle.bind(el));
    });

    [].slice.call(BUTTON).forEach(function (el) {
      el.addEventListener(eventBtn, animationClassToggle.bind(el));
    });

    [].slice.call(FORMTOGGLE).forEach(function (el) {
      var $target = document.getElementById(el.getAttribute('data-target'));
      var $type = 'is-' + el.getAttribute('data-type');

      el.addEventListener(eventType, function (e) {
        if (e) e.preventDefault();

        if (!$target) return;

        var children = $target.parentNode.children;

        Array.prototype.filter.call(children, function (child) {
          if (child !== $target) {
            child.classList.remove(IS_ACTIVE);
          }
        });

        if (!$target.classList.contains(IS_ACTIVE)) {
          $target.classList.add(IS_ACTIVE);
        }

        CONTAINER_CLASSES.forEach(function (c) {
          CONTAINER.classList.remove(c);
        });

        CONTAINER.classList.add($type);
      });
    });

    [].slice.call(INPUTFIELD).forEach(function (el) {
      var input = el.querySelector('.' + CLASSES.input);
      var checkValue = function () {
        if (input.value !== '' && !el.classList.contains(IS_DIRTY)) {
          el.classList.add(IS_DIRTY);
        } else if (input.value === '' && el.classList.contains(IS_DIRTY)) {
          el.classList.remove(IS_DIRTY);
        }
      };
      input.addEventListener('input', checkValue);
      input.addEventListener('change', checkValue);
      document.addEventListener('DOMContentLoaded', checkValue);
    });
  }, []);

  return (
    <div className="container is-login" id="mainContainer">
      <div className="card card--login shadow-2dp is-active" id="logInForm">
        <div className="card__content">
          <div className="inputfield">
            <input className="inputfield__input" type="text" />
            <label className="inputfield__label">Username</label>
            <span className="inputfield__underline"></span>
          </div>
          <div className="inputfield">
            <input className="inputfield__input" type="password" />
            <label className="inputfield__label">Password</label>
            <span className="inputfield__underline"></span>
          </div>
          <div className="toggle toggle--block toggle--center">
            <input className="toggle__input" type="checkbox" id="remember" />
            <label className="toggle__label" htmlFor="remember">Remember me?</label>
            <label className="toggle__checkbox" htmlFor="remember">
              <span className="sr-only">Toggle remember me.</span>
              <svg className="toggle__checkbox-mark" viewBox="0 0 18 18" aria-label="check">
                <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" />
              </svg>
            </label>
          </div>
          <p className="text-center">
            <button href="#" data-toggle="form" data-target="amnesiaForm" data-type="amnesia">
              Forgot your password?
            </button>
          </p>
        </div>
        <div className="card__action">
          <button className="btn btn--primary btn--block" type="button">
            Sign in
          </button>
        </div>
        <div className="card__action">
   
          <button
            className="btn btn--secondry btn--block"
            data-toggle="form"
            data-target="registerForm"
            data-type="register"
            type="button"
          >
            Register
          </button>
        </div>
      </div>

      <div className="card card--amnesia shadow-2dp" id="amnesiaForm">
        <div className="card__content">
          <div className="inputfield">
            <input className="inputfield__input" type="email" />
            <label className="inputfield__label">Email</label>
            <span className="inputfield__underline"></span>
          </div>
        </div>
        <div className="card__action">
          <button className="btn btn--flat btn--primary" type="button">
            Reset password
          </button>
          <button
            className="btn btn--flat"
            data-toggle="form"
            data-target="logInForm"
            data-type="login"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="card card--register shadow-2dp" id="registerForm">
        <div className="card__content">
          <div className="inputfield">
            <input className="inputfield__input" type="email" />
            <label className="inputfield__label">
              Email <i className="required">*</i>
            </label>
            <span className="inputfield__underline"></span>
          </div>
          <div className="inputfield">
            <input className="inputfield__input" type="text" />
            <label className="inputfield__label">
              Username <i className="required">*</i>
            </label>
            <span className="inputfield__underline"></span>
          </div>
          <div className="inputfield">
            <input className="inputfield__input" type="password" />
            <label className="inputfield__label">
              Password <i className="required">*</i>
            </label>
            <span className="inputfield__underline"></span>
          </div>
          <div className="inputfield">
            <input className="inputfield__input" type="password" />
            <label className="inputfield__label">
              Password Confirm <i className="required">*</i>
            </label>
            <span className="inputfield__underline"></span>
          </div>
         
          <div className="toggle toggle--block">
            <input className="toggle__input" type="checkbox" id="terms" />
            <label className="toggle__label" htmlFor="terms">
              Agree to terms and conditions? <i className="required">*</i>
            </label>
            <label className="toggle__checkbox" htmlFor="terms">
              <span className="sr-only">Toggle terms and conditions agreement.</span>
              <svg className="toggle__checkbox-mark" viewBox="0 0 18 18" aria-label="check">
                <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" />
              </svg>
            </label>
          </div>
          <p className="text-center">
            Fields marked <i className="required">*</i> are required.
          </p>
        </div>
        <div className="card__action">
          <button className="btn btn--primary btn--block" type="button">
            Create account
          </button>
        </div>
        <div className="card__action">
          <button
            className="btn btn--secondry btn--block"
            data-toggle="form"
            data-target="logInForm"
            data-type="login"
            type="button"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
