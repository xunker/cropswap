class CropSwap.Views.Account extends Backbone.View

  template: JST['account']

  render: ->
    $(@el).html(rwh(@template, {}))
    this
