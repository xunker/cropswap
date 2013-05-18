class CropSwap.Views.Offer extends Backbone.View

  template: JST['offer']

  events:
    'click a.add-crop-or-offer-link': 'open_crop_or_offer'

  render: ->
    $(@el).html(rwh(@template, { buy_offers: (@buy_offers || []).reverse(), sell_offers: (@sell_offers || []).reverse() }))
    unless @buy_offers
      console.log 'loading buy offers'
      @get_buy_offers()
    unless @sell_offers
      console.log 'loading sell offers'
      @get_sell_offers()
    this

  get_buy_offers: ->
    @buy_offers = []
    # getMyBuyOffers/user_id
    $.ajax
      url:"#{CropSwap.service_base}/getMyBuyOffers/#{CropSwap.logged_in_user.user_id}",
      type:"GET",
      contentType:"application/json",
      dataType:"json",
      success: (data) =>
        console.log('get buy success')
        console.log data
        @buy_offers = data
        @render()

      error: (data) =>
        console.log data
        alert('error loading buy offers!')

  get_sell_offers: ->
    @sell_offers = []
    # getMySellOffers/user_id
    $.ajax
      url:"#{CropSwap.service_base}/getMySellOffers/#{CropSwap.logged_in_user.user_id}",
      type:"GET",
      contentType:"application/json",
      dataType:"json",
      success: (data) =>
        console.log('get sell success')
        console.log data
        @sell_offers =  data
        @render()

      error: (data) ->
        console.log data
        alert('error loading sell offers!')

  open_crop_or_offer: ->
    CropSwap.detail?.toggle()