class CropSwap.Views.Home extends Backbone.View

  template: "hello {{ world }}"

  render: ->
    $(@el).html(rwh(@template, {world: 'y'}))
    this
