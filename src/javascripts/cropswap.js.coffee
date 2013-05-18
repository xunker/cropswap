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

  update_user_lat_long: ->
    if CropSwap.logged_in_user
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

$(document).ready ->

  if jQuery.reject # is the library loaded? should only be loaded on login page.
    $.reject
      reject:
        msie5: true, msie6: true, msie7: true, msie8: true,
        firefox1: true, firefox2: true, firefox3: true,
        chrome1: true, chrome2: true, chrome3: true, chrome4: true,
        safari1: true, safari2: true, safari3: true

  CropSwap.init()
