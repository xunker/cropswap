class CropSwap.Models.Crop extends Backbone.Model

  urlRoot: 'http://swap-crops.com/WCF.svc/offer'

  initialize: ->
    @set('id', 1)

