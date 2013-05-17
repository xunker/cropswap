class CropSwap.Views.Navigation extends Backbone.View

  template: "
    <div class='home-link-div'> <a class='home-link' href='#'>CropSwap</a> </div>
    <div class='navigation-icon'><a class='navigation-icon-link' href='#'><i class='icon-align-justify'></i></a></a></div>
    <ul class='navigation-links'>

      <li> <a class='search-link' href='#'>Search for Crops</a> </li>
      <li> <a class='offer-link' href='#'>Offer your Crops</a> </li>
      <li> <a class='account-link' href='#'>Your Account</a> </li>
      <li> <a class='log-in-link' href='#'>Log In</a> </li>
      <li> <a class='log-out-link' href='#'>Log Out</a> </li>
    </ul>
  "

  events:
    "click a.home-link": -> window.routeTo("home")
    "click a.search-link": -> window.routeTo("search")
    "click a.offer-link": -> window.routeTo("offer")
    "click a.navigation-icon-link": 'toggleNavigation'

  render: ->
    $(@el).html(rwh(@template))
    this

  toggleNavigation: ->
    $('.navigation ul.navigation-links').toggleClass('navigation-shown')

    # $('.navigation ul.navigation-links').toggle()
    # if $('.navigation ul:visible')
    #   $('.navigation-icon').hide()
    # else
    #   $('.navigation-icon').show()