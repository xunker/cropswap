class CropSwap.Views.Account extends Backbone.View

  template: JST['account']

  render: ->
    $(@el).html(rwh(@template, {user: CropSwap.logged_in_user}))
    this
