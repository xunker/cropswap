class window.Loader

  @show: ->
    $('body').append('<div class="modal-backdrop fade in"></div>')
    $('body').append('<div class="loading"><img src="/assets/ajax-loader.gif" width="32px" height="32px" alt="Loading..."/></div>')

  @hide: ->
    $('body > .modal-backdrop.fade.in').remove()
    $('body > .loading').remove()
