(function($) {
  'use strict';

  var Modal = function(element, options) {
    this.$modal = $(element);
    this.options = options || {};
    this.visible = false;
  };

  Modal.prototype.show = function(relatedTarget) {
    if (this.visible) { return; }
    this.lastTrigger = relatedTarget ? relatedTarget : null;

    // Show event
    var showEvent = $.Event('show.lt.modal', {
      relatedTarget: relatedTarget
    });
    this.$modal.trigger(showEvent);

    // Allow event to be prevented
    if (showEvent.isDefaultPrevented()) { return; }

    // Open Modal
    this.visible = true;
    this.$modal.addClass('open');
    $(document.body).addClass('modal-open');

    // Register close buttons
    this.$modal.on('click.close.lt.modal', '[data-toggle="modal-close"]', $.proxy(this.hide, this));

    // Register escape key
    this.optionsEscape();

    // Focus modal
    this.modalFocus();

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
      relatedTarget: relatedTarget
    });
    this.$modal.trigger(hideEvent);

    // Allow event to be prevented
    if (hideEvent.isDefaultPrevented()) { return; }

    // Hide modal
    this.visible = false;
    this.$modal.removeClass('open');
    $(document.body).removeClass('modal-open');

    // Unregister close button listeners
    this.$modal.off('click.close.lt.modal');

    // Unregister escape key
    this.optionsEscape();

    // Restore focus
    this.restoreFocus();

    // Hidden event
    var hiddenEvent = $.Event('hidden.lt.modal', {
      relatedTarget: relatedTarget
    });
    this.$modal.trigger(hiddenEvent);
  };

  Modal.prototype.restoreFocus = function() {
    if (this.lastTrigger) {
      $(this.lastTrigger).focus();
      this.lastTrigger = null;
    }
  };

  Modal.prototype.modalFocus = function() {
    this.$modal.focus();
  };

  Modal.prototype.optionsEscape = function() {
    if (this.visible && this.options.esc) {
      this.$modal.on('keydown.close.lt.modal', $.proxy(function(e) {
        e.which === 27 && this.hide();
      }, this));
    } else {
      this.$modal.off('keydown.close.lt.modal');
    }
  };

  // Define jQuery plugin
  function Plugin(method, relatedTarget) {
    return this.each(function() {
      var $this = $(this);
      var settings = $.extend({}, Plugin.defaults, $this.data(), typeof method === 'object' && method);

      var data = $this.data('lt.modal');

      if (!data) {
        data = new Modal(this, settings);
        $this.data('lt.modal', data);
      }

      if (typeof method === 'string') {
        data[method](relatedTarget);
      } else if (settings.show) {
        data.show(relatedTarget);
      }

      settings.callback.call($this);
    });
  }

  Plugin.defaults = {
    callback: function() {},
    esc: true,
    show: true
  };

  $.fn.modal = Plugin;

  $(document).on('click.lt.modal.data-attr', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var $target = $($this.attr('data-target')) || $($this.attr('href'));
    var options = $target.data('lt.modal') ? 'show' : $.extend($target.data(), $this.data());

    if ($this.is('a')) {
      e.preventDefault();
    }

    Plugin.call($target, options, this);
  });

})(jQuery);
