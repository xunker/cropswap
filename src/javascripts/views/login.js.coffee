class CropSwap.Views.Login extends Backbone.View

  template: JST['login']

  events:
    "click a.login-logout-link": -> CropSwap.toggleLoggedIn()

  render: ->
    if CropSwap.is_logged_in()
      routeTo('home')
    else
      $(@el).html(rwh(@template, {world: 'y'}))
      this
