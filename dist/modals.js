(function($) {
  'use strict';

  var Modal = function(element, options) {
    this.$modal = $(element);
    this.options = options || {};
    this.visible = false;
  };

  Modal.prototype.show = function(relatedTarget) {
    if (this.visible) { return; }
    this.$trigger = relatedTarget ? $(relatedTarget) : null;

    // Show event
    var showEvent = $.Event('show.lt.modal', {
      relatedTarget: relatedTarget
    });
    this.$modal.trigger(showEvent);

    // Allow event to be prevented
    if (showEvent.isDefaultPrevented()) { return; }

    // Open Modal
    this.visible = true;
    $(document.body).addClass('modal-open');
    this.$modal
      .addClass('open')
      .attr('aria-hidden', 'false');

    // Register close buttons
    this.$modal.on('click.close.lt.modal', '[data-toggle="modal-close"]', $.proxy(this.hide, this));

    // Register escape key
    this.optionsEscape();

    // Focus modal
    this.modalFocus();

    // Callback
    this.options.onShow.call(this, this.$modal, this.$trigger);

    // Shown event
    var shownEvent = $.Event('shown.lt.modal', {
      relatedTarget: relatedTarget
    });
    this.$modal.trigger(shownEvent);
  };

  Modal.prototype.hide = function(relatedTarget) {
    if (!this.visible) { return; }

    // Hide event
    var hideEvent = $.Event('hide.lt.modal', {
      relatedTarget: (this.$trigger && this.$trigger[0]) ? this.$trigger[0] : relatedTarget
    });
    this.$modal.trigger(hideEvent);

    // Allow event to be prevented
    if (hideEvent.isDefaultPrevented()) { return; }

    // Hide modal
    this.visible = false;
    $(document.body).removeClass('modal-open');
    this.$modal
      .removeClass('open')
      .attr('aria-hidden', 'true');

    // Unregister close button listeners
    this.$modal.off('click.close.lt.modal');

    // Unregister escape key
    this.optionsEscape();

    // Restore focus
    this.restoreFocus();

    // Callback
    this.options.onHide.call(this, this.$modal);

    // Hidden event
    var hiddenEvent = $.Event('hidden.lt.modal', {
      relatedTarget: (this.$trigger && this.$trigger[0]) ? this.$trigger[0] : relatedTarget
    });
    this.$modal.trigger(hiddenEvent);
  };

  Modal.prototype.optionsEscape = function() {
    if (this.visible && this.options.esc) {
      this.$modal.on('keydown.close.lt.modal', $.proxy(function(e) {
        if (e.which === 27) {
          this.hide();
        }
      }, this));
    } else {
      this.$modal.off('keydown.close.lt.modal');
    }
  };

  Modal.prototype.modalFocus = function() {
    this.$modal.focus();
  };

  Modal.prototype.restoreFocus = function() {
    if (this.$trigger) {
      this.$trigger.focus();
      this.$trigger = null;
    }
  };

  // Define jQuery plugin
  function Plugin(method, relatedTarget) {
    return this.each(function() {
      var $modal = $(this);
      var settings = $.extend({}, Plugin.defaults, $modal.data(), typeof method === 'object' && method);

      var data = $modal.data('lt.modal');

      if (!data) {
        data = new Modal(this, settings);
        $modal.data('lt.modal', data);
      }

      if (typeof method === 'string') {
        data[method](relatedTarget);
      } else if (settings.show) {
        data.show(relatedTarget);
      }
    });
  }

  Plugin.defaults = {
    onShow: function() {},
    onHide: function() {},
    esc: true,
    show: true
  };

  $.fn.modal = Plugin;

  $(document).on('click.lt.modal.data-attr', '[data-toggle="modal"]', function (e) {
    var $trigger = $(this);
    var $target = $($trigger.attr('data-target')) || $($trigger.attr('href'));
    var options = $target.data('lt.modal') ? 'show' : $.extend($target.data(), $trigger.data());

    if ($trigger.is('a')) {
      e.preventDefault();
    }

    Plugin.call($target, options, $trigger[0]);
  });

})(jQuery);
