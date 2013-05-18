class CropSwap.Views.OfferDetail extends Backbone.View

  template: JST['offer_detail']

  tag: 'div'
  className: 'offer-detail'

  events:
    'click a.close-link': 'toggle'

  render: ->
    $(@el).html(rwh(@template, {}))
    this

  toggle: ->
    $('.offer-detail-container').toggle()
