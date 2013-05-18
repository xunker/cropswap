class CropSwap.Views.Offer extends Backbone.View

  template: JST['offer']

  render: ->
    $(@el).html(rwh(@template, {}))
    this
