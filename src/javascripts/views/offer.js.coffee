class CropSwap.Views.Offer extends Backbone.View

  template: JST['offer']

  events:
    'click a.add-crop-or-offer-link': 'open_crop_or_offer'

  render: ->
    $(@el).html(rwh(@template, {}))
    this

  open_crop_or_offer: ->
    CropSwap.detail?.toggle()