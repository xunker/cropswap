class CropSwap.Views.Navigation extends Backbone.View

  template: "
    <div class='home-link-div'> <a class='home-link' href='#'>CropSwap</a> </div>
    <div class='navigation-icon'><a class='navigation-icon-link' href='#'><i class='icon-align-justify'></i></a></a></div>
    <ul class='navigation-links'>

      <li> <a class='search-link' href='#'>Search for Crops</a> </li>
      <li> <a class='offer-link' href='#'>Offer your Crops</a> </li>
      <li> <a class='account-link' href='#'>Your Account</a> </li>
      <li class='login-logout'> <span></span><a href='#' class='login-logout-link'>log in</a> </li>
    </ul>
  "

  events:
    "click a.home-link": -> window.routeTo("home")
    "click a.search-link": -> window.routeTo("search")
    "click a.offer-link": -> window.routeTo("offer")
    "click a.account-link": -> window.routeTo("account")
    "click a.navigation-icon-link": 'toggleNavigation'
    "click a.login-logout-link": 'toggleLoggedIn'

  render: ->
    console.log 'rendering nav'
    $(@el).html(rwh(@template))
    if CropSwap.logged_in_user
      $('.login-logout-link').html('Click to Log out')
      $('.login-logout span').html("Logged in as #{CropSwap.logged_in_user.name}.")

    this

  toggleNavigation: ->
    $('.navigation ul.navigation-links').toggleClass('navigation-shown')

  toggleLoggedIn: ->
    if CropSwap.logged_in_user
      CropSwap.logged_in_user = undefined
      FB.logout()
      CropSwap.render_nav()
    else
      FB.login ->
        []
      , {scope: 'email, user_location'}
