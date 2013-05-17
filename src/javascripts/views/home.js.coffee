class CropSwap.Views.Home extends Backbone.View

  template: $('#home-template').html()

  render: ->
    console.log @template
    $(@el).html(Handlebars.compile($('#home-template').html())({world: 'x'}))
    this
