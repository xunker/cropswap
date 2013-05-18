window.rwh = (html_obj, data)->
  h = if html_obj.html
    html_obj.html()
  else
    h = html_obj
  Handlebars.compile(h)(data)

window.routeTo = (route)->
  if CropSwap.router.routes[route]
    CropSwap.router.navigate route, trigger: true
  else
    alert "No route named '#{route}'!"

window.CropSwap =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}

  init: ->
    @router = new CropSwap.Routers.App
    Backbone.history.start
       pushState: true
       hashChange: false # avoid infinite loop in IE9

    # @authenticate = new CropSwap.Models.Authenticate()

    @navigation = new CropSwap.Views.Navigation()
    @render_nav()

    @detail = new CropSwap.Views.OfferDetail()
    $('.offer-detail-container').html(@detail.render().el)
    @detail.delegateEvents()

  render_nav: ->
    $('.navigation').html(@navigation.render().el)
    @navigation.delegateEvents()

  get_user_lat_long: ->
    new CropSwap.Models.Geocode(CropSwap.logged_in_user.location.name)

  is_logged_in: ->
    !!CropSwap.logged_in_user

  toggleLoggedIn: ->
    if CropSwap.logged_in_user
      CropSwap.logged_in_user = undefined
      FB.logout()
      CropSwap.render_nav()
    else
      FB.login ->
        []
      , {scope: 'email, user_location'}

  direct_user: ->
    if @is_logged_in() && Backbone.history.getFragment() == 'login'
      routeTo('home')

  service_base: "http://swap-crops.com/WCF.svc"

  get_user_id: ->
    $.get "#{@service_base}/checkForUser/#{@logged_in_user.id}", (data) =>
      console.log 'loading'
      if data.success == false
        console.log 'registering user'

        CropSwap.get_user_lat_long()

        user_data = {
          "fbID":CropSwap.logged_in_user.id,
          "userName":CropSwap.logged_in_user.name,
          "email":CropSwap.logged_in_user.email,
          "lat": CropSwap.logged_in_user.latitude,
          "lon": CropSwap.logged_in_user.longitude,
          "city": CropSwap.logged_in_user.location.name.split(',')[0],
          "state": CropSwap.logged_in_user.location.name.split(',')[1],
        }
        $.ajax
          url:"#{@service_base}/addUser",
          type:"POST",
          data:JSON.stringify(user_data),
          contentType:"application/json",
          dataType:"json",
          success: (d2, ts, jxhr) =>
            if d2.success == false
              console.log 'registration failed'
              console.log d2.message
            else
              CropSwap.logged_in_user.user_id = parseInt(d2.message)
              console.log "registered user as #{d2.message}"
        # $.ajax
        #   type: "POST"
        #   url: "http://swap-crops.com/WCF.svc/addUser"
        #   data: JSON.stringify(user_data),
        #   contentType: "application/json; charset=utf-8"
        #   success: (msg) ->
        #     console.log msg

        #   error: (xhr, ajaxOptions, thrownError) ->
        #     alert "error"
      else
        console.log 'user already registered'
        CropSwap.logged_in_user.user_id = parseInt(data.message)

$(document).ready ->

  if jQuery.reject # is the library loaded? should only be loaded on login page.
    $.reject
      reject:
        msie5: true, msie6: true, msie7: true, msie8: true,
        firefox1: true, firefox2: true, firefox3: true,
        chrome1: true, chrome2: true, chrome3: true, chrome4: true,
        safari1: true, safari2: true, safari3: true

  Handlebars.registerHelper "key_value", (obj, fn)->
    (fn(key: key, value: value) for own key, value of obj).join('')

  Handlebars.registerHelper "each_with_key", (obj, fn)->
    key_name = fn.hash.key
    buffer   = for own key, value of obj
        value[key_name] = key
        fn(value)
    buffer.join('')

  CropSwap.init()


