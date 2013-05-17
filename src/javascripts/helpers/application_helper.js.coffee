Handlebars.registerHelper "ifCover", (conditional, options) ->
  noImageUrl = "http://bookshelf.deseretbook.com/images/detail_missing.png"
  if conditional is noImageUrl
    options.fn this
  else
    options.inverse this

Handlebars.registerHelper "ifCurrentBook", (options) ->
  if CropSwap.currentBookId != undefined
    options.fn this
  else
    options.inverse this

Handlebars.registerHelper "ifSvg", (options) ->
  if Modernizr.svg
    options.fn this
  else
    options.inverse this
