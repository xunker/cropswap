class CropSwap.Views.OfferDetail extends Backbone.View

  template: JST['offer_detail']

  tag: 'div'
  className: 'offer-detail'

  crop_sub_types:
    {
      3: {
        1: "Roma",
        2: "Beefsteak",
        3: "Celebrity",
        3: "Grape",
        3: "Cherry",
        3: "Pear"
      },
      4: {
        7: "Red Delicious",
        8: "Honeycrisp",
        9: "Gala",
        10: "Fuji",
        11: "Granny Smith",
        12: "Pink Lady"
      }
    }


  events:
    'click a.close-link': 'toggle',
    'change select.crop-type': 'update_crop_subtype',
    'click input.offer-type': 'update_offer_type'

  render: ->
    $(@el).html(rwh(@template, { }))
    @update_crop_subtype()
    @update_offer_type()
    this

  toggle: ->
    $('.offer-detail-container').toggle()

  update_crop_subtype: ->
    sv = parseInt($('select.crop-type').val())
    if sv.toString() == 'NaN' || !@crop_sub_types[sv]
      $('select.crop-sub-type').hide()
    else
      $('select.crop-sub-type').show()
      h = "<option>-- Select --</option>"
      for k,v of @crop_sub_types[sv]
        h = h + "<option value='#{k}'>#{v}</option>\n"
      $('select.crop-sub-type').html(h)

  update_offer_type: ->
    if $('#offerType1:checked').size() > 0
      $('.offer-detail .accept-type').show()
    else
      $('.offer-detail .accept-type').hide()

