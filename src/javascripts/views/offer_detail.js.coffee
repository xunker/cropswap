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
    'click input.offer-type': 'update_offer_type',
    'click .save-btn': 'save_crop',
    'click .clear-btn': 'reset_form'

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

  save_crop: ->
    crop_type = parseInt($('select.crop-type').val())
    crop_sub_type = parseInt($('select.crop-sub-type').val() || 0)
    offer_type = $('.offer-type:checked').val()
    units = parseInt($('select.quantity-unit').val())
    accept_cash = $('.accept-cash:checked').size() > 0
    accept_barter = $('.accept-barter:checked').size() > 0

    quantity = $('input.quantity').val()
    if /\./.test(quantity)
      quantity = parseFloat(quantity)
    else
      quantity = parseFloat("#{quantity}.0")

    crop_data = {
      "UserID"        : CropSwap.logged_in_user.user_id,
      "cropTypeID"    : crop_type,
      "cropSubTypeID" : crop_sub_type,
      "quatity"       : quantity,
      "unitsID"       : units,
      "cash"          : accept_cash,
      "barter"        : accept_barter
    }

    console.log JSON.stringify(crop_data)

    # crop_data = {"UserID":CropSwap.logged_in_user.user_id,"cropTypeID":3, "cropSubTypeID": 0, "quatity": 7.2, "cost":10.5, "unitsID":2, "cash":true, "barter":false}

    {"UserID":24,"cropTypeID":3,"cropSubTypeID":1,"quatity":12,"unitsID":null,"cash":false,"barter":false}

    $.ajax
      url:"#{CropSwap.service_base}/offer",
      type:"POST",
      data:JSON.stringify(crop_data),
      contentType:"application/json",
      dataType:"json",
      success: (data) =>
        console.log data
        if data.success == false
          alert('error saving')
        else
          @toggle()
          @reset_form()
          alert('saved!')


      error: (data) =>
        console.log data
        alert('error!')

  reset_form: ->
    @render()
