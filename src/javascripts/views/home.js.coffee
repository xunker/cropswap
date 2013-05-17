class CropSwap.Views.Home extends Backbone.View

  template: JST['home']

  render: ->
    $(@el).html(rwh(@template, {world: 'y'}))
    this
